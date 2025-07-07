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
    const emailData = await resend.emails.send({
      from: 'contact@corvuslabs.co', // Replace with your verified domain
      to: 'hello@corvuslabs.co', // Where you want to receive emails
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
      // Also send a plain text version
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

    console.log('Email sent successfully:', emailData);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully!',
        data: emailData,
      }),
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
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
