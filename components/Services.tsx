import React from 'react';
import { CyberCard } from "./ui/cyber-card";
import { ExpandableCyberCard } from "./ui/expandable-cyber-card";
import MobileServiceCard from "./ui/mobile-service-card";
import ExpandableMobileServiceCard from "./ui/expandable-mobile-service-card";

const Services: React.FC = () => (
  <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
    {/* Background cyber grid */}
    <div className="absolute inset-0 opacity-5" 
         style={{
           backgroundImage: `
             linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px),
             linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
           `,
           backgroundSize: '40px 40px'
         }}>
    </div>
    {/* Gradient overlays */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">Our Services</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive consulting solutions designed to elevate your business to new heights.</p>
      </div>
      {/* Desktop Cards - Hidden on Mobile */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 - AI Automation */}
        <ExpandableCyberCard
          icon="fas fa-robot"
          title="AI Automation"
          description="Transform your business processes with intelligent automation powered by cutting-edge AI technology."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=2&orientation=landscape&flag=9d6156f18624d1acd2b159095980055c"
          imageAlt="AI Automation"
          expandedContent={{
            whatWeOffer: [
              "n8n workflow automation and integration",
              "Large Language Model (LLM) integration",
              "Custom AI-powered process automation",
              "Intelligent document processing",
              "Automated decision-making systems"
            ],
            keyBenefits: [
              "Reduce manual work by up to 80%",
              "Eliminate human errors",
              "24/7 automated operations",
              "Scale operations without adding headcount"
            ]
          }}
        />

        {/* Service 2 */}
        <CyberCard
          icon="fas fa-digital-tachograph"
          title="Digital Transformation"
          description="Navigate the digital landscape with innovative solutions that modernize your operations and enhance customer experiences."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=3&orientation=landscape&flag=2cb6d86ff897e5fd0760f2bb64071180"
          imageAlt="Digital Transformation"
        />

        {/* Service 3 */}
        <CyberCard
          icon="fas fa-dollar-sign"
          title="Financial Advisory"
          description="Optimize financial performance with expert guidance on investment strategies, risk management, and capital allocation."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=4&orientation=landscape&flag=32400648ca9eb4e3410e77f9a887adc3"
          imageAlt="Financial Advisory"
        />

        {/* Service 4 */}
        <CyberCard
          icon="fas fa-search"
          title="Market Research"
          description="Gain valuable insights into market trends, consumer behavior, and competitive landscapes to inform strategic decision-making."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=5&orientation=landscape&flag=e9e14e44cde36bfd208d4d42c3010660"
          imageAlt="Market Research"
        />

        {/* Service 5 */}
        <CyberCard
          icon="fas fa-users"
          title="Organizational Development"
          description="Enhance organizational effectiveness through strategic talent management, leadership development, and culture transformation."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=6&orientation=landscape&flag=4d41045a3fca1ac8f8cc59c4d3bf6ed5"
          imageAlt="Organizational Development"
        />

        {/* Service 6 */}
        <CyberCard
          icon="fas fa-cogs"
          title="Operations Consulting"
          description="Streamline operations and supply chains to improve efficiency, reduce costs, and enhance overall business performance."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=7&orientation=landscape&flag=171e3f95943df0363f525e7bc5220049"
          imageAlt="Operations Consulting"
        />
      </div>

      {/* Mobile Cards - Hidden on Desktop */}
      <div className="md:hidden grid grid-cols-1 gap-6 max-w-md mx-auto">
        {/* Mobile Service 1 - AI Automation */}
        <ExpandableMobileServiceCard
          icon="fas fa-robot"
          title="AI Automation"
          description="Transform your business processes with intelligent automation powered by cutting-edge AI technology."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=2&orientation=landscape&flag=9d6156f18624d1acd2b159095980055c"
          imageAlt="AI Automation"
          expandedContent={{
            whatWeOffer: [
              "n8n workflow automation and integration",
              "Large Language Model (LLM) integration",
              "Custom AI-powered process automation",
              "Intelligent document processing",
              "Automated decision-making systems"
            ],
            keyBenefits: [
              "Reduce manual work by up to 80%",
              "Eliminate human errors",
              "24/7 automated operations",
              "Scale operations without adding headcount"
            ]
          }}
        />

        {/* Mobile Service 2 */}
        <MobileServiceCard
          icon="fas fa-digital-tachograph"
          title="Digital Transformation"
          description="Navigate the digital landscape with innovative solutions that modernize your operations and enhance customer experiences."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=3&orientation=landscape&flag=2cb6d86ff897e5fd0760f2bb64071180"
          imageAlt="Digital Transformation"
        />

        {/* Mobile Service 3 */}
        <MobileServiceCard
          icon="fas fa-dollar-sign"
          title="Financial Advisory"
          description="Optimize financial performance with expert guidance on investment strategies, risk management, and capital allocation."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=4&orientation=landscape&flag=32400648ca9eb4e3410e77f9a887adc3"
          imageAlt="Financial Advisory"
        />

        {/* Mobile Service 4 */}
        <MobileServiceCard
          icon="fas fa-search"
          title="Market Research"
          description="Gain valuable insights into market trends, consumer behavior, and competitive landscapes to inform strategic decision-making."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=5&orientation=landscape&flag=e9e14e44cde36bfd208d4d42c3010660"
          imageAlt="Market Research"
        />

        {/* Mobile Service 5 */}
        <MobileServiceCard
          icon="fas fa-users"
          title="Organizational Development"
          description="Enhance organizational effectiveness through strategic talent management, leadership development, and culture transformation."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=6&orientation=landscape&flag=4d41045a3fca1ac8f8cc59c4d3bf6ed5"
          imageAlt="Organizational Development"
        />

        {/* Mobile Service 6 */}
        <MobileServiceCard
          icon="fas fa-cogs"
          title="Operations Consulting"
          description="Streamline operations and supply chains to improve efficiency, reduce costs, and enhance overall business performance."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=7&orientation=landscape&flag=171e3f95943df0363f525e7bc5220049"
          imageAlt="Operations Consulting"
        />
      </div>
    </div>
  </section>
);

export default Services;
