import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide a valid email address' 
      });
    }

    // Send email to admin
    const adminEmail = await resend.emails.send({
      from: 'Corvus Labs Contact Form <noreply@corvuslabs.com>',
      to: [process.env.ADMIN_EMAIL || 'admin@corvuslabs.com'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #333;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Corvus Labs website contact form.</p>
            <p>Reply directly to this email to respond to ${name} at ${email}</p>
          </div>
        </div>
      `,
    });

    // Send acknowledgment email to user
    const userEmail = await resend.emails.send({
      from: 'Corvus Labs <noreply@corvuslabs.com>',
      to: [email],
      subject: 'Thank you for contacting Corvus Labs',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #333; margin: 0;">
              <span style="color: #000;">CORVUS</span><span style="color: #666;">LABS</span>
            </h1>
          </div>
          
          <h2 style="color: #333;">Thank you for reaching out!</h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Dear ${name},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Thank you for contacting Corvus Labs. We have received your message regarding "<strong>${subject}</strong>" and our team will review it carefully.
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary:</h3>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: #fff; padding: 15px; border-radius: 5px; border-left: 4px solid #333;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            We typically respond within 24-48 hours during business days. If your inquiry is urgent, please don't hesitate to call us directly.
          </p>
          
          <div style="margin: 30px 0; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Contact Information:</h3>
            <p style="margin: 5px 0;"><strong>Email:</strong> info@corvuslabs.com</p>
            <p style="margin: 5px 0;"><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p style="margin: 5px 0;"><strong>Address:</strong> 123 Business Avenue, Suite 500, New York, NY 10001</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Best regards,<br>
            <strong>The Corvus Labs Team</strong>
          </p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
            <p>© 2025 Corvus Labs. All rights reserved.</p>
          </div>
        </div>
      `,
    });

    console.log('Admin email sent:', adminEmail.data?.id);
    console.log('User email sent:', userEmail.data?.id);

    res.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`🚀 Email server running on port ${port}`);
  console.log(`📧 Resend API configured: ${process.env.RESEND_API_KEY ? 'Yes' : 'No'}`);
});
