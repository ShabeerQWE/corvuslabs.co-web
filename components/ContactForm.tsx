import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlowingInput } from "./ui/glowing-input";
import { GlowingTextarea } from "./ui/glowing-textarea";
import { GlowingButton } from "./ui/glowing-button";
import { Label } from "./ui/label";
import { LabelInputContainer } from "./ui/label-input-container";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  isSubmitting: boolean;
  success: boolean;
  error: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    isSubmitting: false,
    success: false,
    error: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear any existing errors when user starts typing
    if (status.error) {
      setStatus(prev => ({ ...prev, error: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status
    setStatus({
      isSubmitting: true,
      success: false,
      error: ''
    });

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          isSubmitting: false,
          success: true,
          error: ''
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          isSubmitting: false,
          success: false,
          error: result.message || 'Failed to send message'
        });
      }
    } catch (error) {
      setStatus({
        isSubmitting: false,
        success: false,
        error: 'Network error. Please check your connection and try again.'
      });
    }
  };

  return (
    <div className="w-full">
      {/* Success Message */}
      {status.success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <p className="text-green-800 font-medium">
            ✅ Message sent successfully! We'll get back to you soon.
          </p>
        </motion.div>
      )}
      
      {/* Error Message */}
      {status.error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
        >
          <p className="text-red-800">❌ {status.error}</p>
        </motion.div>
      )}
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LabelInputContainer>
            <Label htmlFor="name">Full Name</Label>
            <GlowingInput 
              id="name"
              name="name"
              type="text" 
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <GlowingInput 
              id="email"
              name="email"
              type="email" 
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer>
          <Label htmlFor="subject">Subject</Label>
          <GlowingInput 
            id="subject"
            name="subject"
            type="text" 
            placeholder="How can we help you?"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <GlowingTextarea 
            id="message"
            name="message"
            placeholder="Tell us about your project or inquiry..." 
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </LabelInputContainer>
        <GlowingButton 
          type="submit" 
          className="text-lg w-full" 
          disabled={status.isSubmitting}
        >
          {status.isSubmitting ? 'Sending...' : 'Send Message →'}
        </GlowingButton>
      </form>
    </div>
  );
};

export default ContactForm;
