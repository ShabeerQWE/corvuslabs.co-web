import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  // Parse the request body
  let formData;
  try {
    formData = JSON.parse(event.body || '{}');
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON' }),
    };
  }

  const { name, email, subject, message } = formData;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        error: 'All fields are required',
        success: false 
      }),
    };
  }

  // Import Resend (we'll install this next)
  try {
    const { Resend } = await import('resend');
    
    // 🚨 TO MAKE EMAILS WORK IN PRODUCTION:
    // 1. Go to Netlify Dashboard → Your Site → Site Settings → Environment Variables
    // 2. Click "Add environment variable"
    // 3. Key: RESEND_API_KEY
    // 4. Value: [PASTE YOUR RESEND API KEY HERE]
    // 5. Save and redeploy your site
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    // 1. Send notification to admin (you)
    const adminEmailData = await resend.emails.send({
      from: 'contact@corvuslabs.co',
      to: ['hello@corvuslabs.co'],
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #555; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #666;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            <p>This email was sent from the contact form on your website.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from the contact form on your website.
      `,
    });

    // 2. Send acknowledgment to user
    const userEmailData = await resend.emails.send({
      from: 'contact@corvuslabs.co',
      to: [email], // Send to the user who submitted the form
      subject: `Thank you for contacting Corvus Labs`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 300;">Thank You!</h1>
            <p style="color: #e8f0fe; margin: 10px 0 0 0; font-size: 16px;">We've received your message</p>
          </div>
          
          <div style="padding: 40px 20px; background: white;">
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
              Hi <strong>${name}</strong>,
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
              Thank you for reaching out to us! We've successfully received your message and our team will review it shortly.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #495057; margin-top: 0; font-size: 18px;">Your Message Summary:</h3>
              <p style="margin: 10px 0; color: #6c757d;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 10px 0; color: #6c757d;"><strong>Message:</strong></p>
              <p style="color: #495057; font-style: italic; margin: 10px 0; padding: 15px; background: white; border-left: 4px solid #667eea; border-radius: 4px;">
                "${message}"
              </p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333; margin-bottom: 20px;">
              We typically respond within <strong>24 hours</strong>. If your inquiry is urgent, please don't hesitate to call us directly.
            </p>
            
            <div style="background: #e8f0fe; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
              <p style="margin: 0; color: #1565c0; font-weight: 500;">
                Need immediate assistance?
              </p>
              <p style="margin: 5px 0 0 0; color: #1976d2;">
                Email: hello@corvuslabs.co
              </p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; color: #333;">
              Best regards,<br>
              <strong>The Corvus Labs Team</strong>
            </p>
          </div>
          
          <div style="background: #495057; padding: 20px; text-align: center;">
            <p style="margin: 0; color: #adb5bd; font-size: 14px;">
              This is an automated acknowledgment email. Please do not reply to this message.
            </p>
            <p style="margin: 5px 0 0 0; color: #6c757d; font-size: 12px;">
              © 2025 Corvus Labs. All rights reserved.
            </p>
          </div>
        </div>
      `,
      text: `
Hi ${name},

Thank you for reaching out to us! We've successfully received your message and our team will review it shortly.

Your Message Summary:
Subject: ${subject}
Message: "${message}"

We typically respond within 24 hours. If your inquiry is urgent, please don't hesitate to email us directly at hello@corvuslabs.co.

Best regards,
The Corvus Labs Team

---
This is an automated acknowledgment email. Please do not reply to this message.
© 2025 Corvus Labs. All rights reserved.
      `,
    });

    console.log('Admin email sent successfully:', adminEmailData);
    console.log('User acknowledgment email sent successfully:', userEmailData);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Emails sent successfully!',
        data: {
          adminEmail: adminEmailData,
          userEmail: userEmailData
        },
      }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      cause: error.cause,
      stack: error.stack
    });
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: 'Failed to send email. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      }),
    };
  }
};

export { handler };
