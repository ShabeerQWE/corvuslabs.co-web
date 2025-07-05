import React from 'react';
import { Card, CardContent } from "./ui/card";
import { GlowingInput } from "./ui/glowing-input";
import { GlowingTextarea } from "./ui/glowing-textarea";
import { GlowingButton } from "./ui/glowing-button";
import { Label } from "./ui/label";
import { LabelInputContainer } from "./ui/label-input-container";

const Contact: React.FC = () => (
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
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <LabelInputContainer>
                    <Label htmlFor="name">Full Name</Label>
                    <GlowingInput 
                      id="name" 
                      type="text" 
                      placeholder="John Doe" 
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="email">Email Address</Label>
                    <GlowingInput 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                    />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer>
                  <Label htmlFor="subject">Subject</Label>
                  <GlowingInput 
                    id="subject" 
                    type="text" 
                    placeholder="How can we help you?" 
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="message">Message</Label>
                  <GlowingTextarea 
                    id="message" 
                    placeholder="Tell us about your project or inquiry..." 
                    rows={5}
                  />
                </LabelInputContainer>
                <GlowingButton type="submit" className="text-lg">
                  Send Message →
                </GlowingButton>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
