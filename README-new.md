# Corvus Labs Website

A modern, responsive website built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion, featuring a fully functional contact form with email notifications.

## 🚀 Features

- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Mobile-first approach
- **Functional Contact Form**: Email notifications via Resend
- **Interactive Components**: Animated navigation, testimonials carousel, and more

## 📧 Contact Form Setup

The contact form sends emails using [Resend](https://resend.com). Follow these steps to set it up:

### 1. Get Your Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to your dashboard and create an API key
3. Copy the API key (starts with `re_`)

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your details:
   ```env
   # Resend API Configuration
   RESEND_API_KEY=re_your_actual_api_key_here
   
   # Email Configuration  
   ADMIN_EMAIL=your-email@yourdomain.com
   
   # Server Configuration
   PORT=3001
   ```

### 3. Domain Verification (For Production)

For production use, you'll need to verify your domain in Resend:

1. Go to your Resend dashboard
2. Add and verify your domain (e.g., `corvuslabs.com`)
3. Update the email addresses in `server/server.js` to use your verified domain

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd corvus-website-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (see Contact Form Setup above)

4. **Run development servers**
   ```bash
   # Run both frontend and backend
   npm run dev:all
   
   # Or run them separately:
   npm run dev      # Frontend only (port 5173)
   npm run server:dev  # Backend only (port 3001)
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
corvus-website-react/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── AnimatedNav.tsx  # Navigation with animations
│   │   ├── Contact.tsx      # Contact form with email functionality
│   │   └── ...              # Other page components
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── App.tsx              # Main app component
├── server/
│   └── server.js            # Express server for email handling
├── public/                  # Static assets
└── dist/                    # Production build
```

## 🔧 Available Scripts

- `npm run dev` - Start frontend development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start backend server
- `npm run server:dev` - Start backend server with auto-reload
- `npm run dev:all` - Start both frontend and backend concurrently

## 📨 Contact Form Features

### For Users:
- **Real-time validation**: Instant feedback on form errors
- **Smooth animations**: Loading states and success/error messages
- **Professional acknowledgment**: Automatic thank-you email with message summary
- **Mobile responsive**: Works perfectly on all devices

### For Admins:
- **Instant notifications**: Get emails immediately when someone contacts you
- **Formatted messages**: Clean, professional email layout
- **Contact details**: All form data included for easy response
- **Reply-friendly**: Can reply directly to the notification email

### Email Templates:
- **Admin notification**: Professional format with all contact details
- **User acknowledgment**: Branded email with contact information and next steps

## 🌐 Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

### Backend (Railway/Heroku/VPS)
1. Deploy the server code
2. Set environment variables on your hosting platform
3. Update the API endpoint in the Contact component

## 🎨 Customization

### Styling
- All styling uses Tailwind CSS
- Custom colors and animations in `tailwind.config.js`
- Component-specific styles in individual files

### Email Templates
- Modify email templates in `server/server.js`
- Update branding, contact information, and styling as needed

### Contact Information
- Update contact details in `components/Contact.tsx`
- Modify company information throughout the site

## 📝 License

This project is private and proprietary to Corvus Labs.

## 🆘 Support

For questions or issues with the contact form:
1. Check your Resend dashboard for email delivery status
2. Verify your API key and domain configuration
3. Check server logs for any error messages
4. Ensure both frontend and backend are running
