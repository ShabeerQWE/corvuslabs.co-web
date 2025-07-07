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
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - Corvus Labs</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f7;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
            
            <!-- Header with gradient and logo placeholder -->
            <div style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff6b35 100%); padding: 50px 30px; text-align: center; position: relative; overflow: hidden;">
              <!-- Decorative circles -->
              <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              <div style="position: absolute; bottom: -30px; left: -30px; width: 60px; height: 60px; background: rgba(255, 255, 255, 0.1); border-radius: 50%;"></div>
              
              <!-- Corvus Labs Logo -->
              <div style="margin: 0 auto 20px; text-align: center;">
                <div style="display: inline-block; background: rgba(255, 255, 255, 0.15); padding: 15px 25px; border-radius: 12px; border: 2px solid rgba(255, 255, 255, 0.2);">
                  <div style="color: white; font-size: 20px; font-weight: 700; letter-spacing: 1px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;">
                    CORVUSLABS
                  </div>
                </div>
              </div>
              
              <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 600; letter-spacing: -0.5px;">Thank You!</h1>
              <p style="color: rgba(255, 255, 255, 0.9); margin: 15px 0 0 0; font-size: 18px; font-weight: 400;">We've received your message</p>
            </div>
            
            <!-- Main content -->
            <div style="padding: 40px 30px; background: white;">
              <div style="margin-bottom: 30px;">
                <h2 style="color: #1d1d1f; font-size: 24px; font-weight: 600; margin: 0 0 15px 0; letter-spacing: -0.3px;">
                  Hi ${name}! 👋
                </h2>
                <p style="font-size: 16px; line-height: 1.6; color: #424245; margin: 0;">
                  Thank you for reaching out to <strong style="color: #ff6b35;">Corvus Labs</strong>! We've successfully received your message and our team will review it shortly.
                </p>
              </div>
              
              <!-- Message summary card -->
              <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 12px; margin: 30px 0; border: 1px solid #e9ecef;">
                <h3 style="color: #495057; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #ff6b35; color: white; width: 24px; height: 24px; border-radius: 6px; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px; font-size: 12px;">📝</span>
                  Your Message Summary
                </h3>
                
                <div style="margin-bottom: 15px;">
                  <p style="margin: 0; color: #6c757d; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Subject</p>
                  <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px; font-weight: 500;">${subject}</p>
                </div>
                
                <div>
                  <p style="margin: 0; color: #6c757d; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                  <div style="margin-top: 10px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #ff6b35; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);">
                    <p style="color: #495057; margin: 0; line-height: 1.6; font-style: italic;">
                      "${message}"
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Response time info -->
              <div style="background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%); padding: 20px; border-radius: 12px; margin: 30px 0; border: 1px solid #ffeaa7; text-align: center;">
                <div style="color: #856404; font-size: 20px; margin-bottom: 5px;">⏱️</div>
                <p style="margin: 0; color: #856404; font-weight: 600; font-size: 16px;">
                  Expected Response Time: <span style="color: #ff6b35;">24 hours</span>
                </p>
                <p style="margin: 5px 0 0 0; color: #856404; font-size: 14px;">
                  We'll get back to you as soon as possible!
                </p>
              </div>
              
              <!-- Contact info -->
              <div style="background: linear-gradient(135deg, #e8f4f8 0%, #d1ecf1 100%); padding: 25px; border-radius: 12px; margin: 30px 0; text-align: center; border: 1px solid #bee5eb;">
                <div style="color: #0c5460; font-size: 20px; margin-bottom: 10px;">🚀</div>
                <p style="margin: 0; color: #0c5460; font-weight: 600; font-size: 16px;">
                  Need immediate assistance?
                </p>
                <p style="margin: 10px 0 0 0; color: #155724;">
                  <strong>Email:</strong> <a href="mailto:hello@corvuslabs.co" style="color: #ff6b35; text-decoration: none; font-weight: 600;">hello@corvuslabs.co</a>
                </p>
              </div>
              
              <!-- Closing -->
              <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #e9ecef;">
                <p style="font-size: 16px; line-height: 1.6; color: #424245; margin: 0;">
                  Best regards,<br>
                  <strong style="color: #ff6b35; font-size: 18px;">The Corvus Labs Team</strong>
                </p>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 30px; text-align: center;">
              <p style="margin: 0; color: #adb5bd; font-size: 14px; line-height: 1.5;">
                This is an automated acknowledgment email.<br>
                Please do not reply to this message.
              </p>
              <div style="margin: 20px 0; height: 1px; background: linear-gradient(90deg, transparent 0%, #495057 50%, transparent 100%);"></div>
              <p style="margin: 0; color: #6c757d; font-size: 12px;">
                © 2025 <strong style="color: #ff6b35;">Corvus Labs</strong>. All rights reserved.
              </p>
            </div>
            
          </div>
        </body>
        </html>
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
