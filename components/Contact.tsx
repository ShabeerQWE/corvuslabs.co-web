import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "./ui/card";
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

const Contact: React.FC = () => {
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
  <section id="contact" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">Have a question or ready to start a project? Reach out to our team for personalized assistance.</p>
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <i className="fas fa-map-marker-alt text-gray-700"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Our Location</h3>
                <p className="text-gray-600">123 Business Avenue, Suite 500<br />New York, NY 10001</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <i className="fas fa-envelope text-gray-700"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Email Us</h3>
                <p className="text-gray-600">info@corvuslabs.com<br />support@corvuslabs.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-full mr-4">
                <i className="fas fa-phone-alt text-gray-700"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Call Us</h3>
                <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors duration-300 cursor-pointer">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors duration-300 cursor-pointer">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors duration-300 cursor-pointer">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-full transition-colors duration-300 cursor-pointer">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
        <div>
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
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
                  className="text-lg" 
                  disabled={status.isSubmitting}
                >
                  {status.isSubmitting ? 'Sending...' : 'Send Message →'}
                </GlowingButton>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;
