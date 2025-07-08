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

        {/* Service 2 - CRM Systems */}
        <ExpandableCyberCard
          icon="fas fa-users-cog"
          title="CRM Systems"
          description="Streamline your customer relationships with world-class CRM implementations tailored to your business."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=3&orientation=landscape&flag=2cb6d86ff897e5fd0760f2bb64071180"
          imageAlt="CRM Systems"
          expandedContent={{
            whatWeOffer: [
              "Zoho CRM implementation and customization",
              "HubSpot setup and optimization",
              "Salesforce configuration and integration",
              "GoHighLevel deployment and training",
              "Custom CRM workflow automation"
            ],
            keyBenefits: [
              "Centralized customer data management",
              "Improved sales team productivity",
              "Enhanced customer insights",
              "Automated marketing campaigns"
            ]
          }}
        />

        {/* Service 3 - ERP Solutions */}
        <ExpandableCyberCard
          icon="fas fa-cogs"
          title="ERP Solutions"
          description="Unify your business operations with comprehensive ERP solutions that grow with your organization."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=4&orientation=landscape&flag=32400648ca9eb4e3410e77f9a887adc3"
          imageAlt="ERP Solutions"
          expandedContent={{
            whatWeOffer: [
              "Odoo implementation and customization",
              "Module configuration and integration",
              "Custom module development",
              "Data migration and system setup",
              "Training and ongoing support"
            ],
            keyBenefits: [
              "Integrated business processes",
              "Real-time operational visibility",
              "Reduced operational costs",
              "Improved decision-making"
            ]
          }}
        />

        {/* Service 4 - MSP Services */}
        <ExpandableCyberCard
          icon="fas fa-shield-alt"
          title="MSP Services"
          description="Comprehensive managed services to keep your technology infrastructure secure, compliant, and optimized."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=5&orientation=landscape&flag=e9e14e44cde36bfd208d4d42c3010660"
          imageAlt="MSP Services"
          expandedContent={{
            whatWeOffer: [
              "AI compliance and governance",
              "Security audits and assessments",
              "Network management and monitoring",
              "Cloud infrastructure management",
              "Disaster recovery planning"
            ],
            keyBenefits: [
              "Proactive issue prevention",
              "Enhanced security posture",
              "Regulatory compliance assurance",
              "Predictable IT costs"
            ]
          }}
        />

        {/* Service 5 - Web Design & Development */}
        <ExpandableCyberCard
          icon="fas fa-laptop-code"
          title="Web Design & Development"
          description="Craft modern, high-performance websites that elevate your brand and drive engagement — built using industry-leading tools like React, Next.js, and Webflow."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=6&orientation=landscape&flag=4d41045a3fca1ac8f8cc59c4d3bf6ed5"
          imageAlt="Web Design & Development"
          expandedContent={{
            whatWeOffer: [
              "Custom-designed websites tailored to your business goals",
              "Development with React, Next.js, or Webflow",
              "UI/UX prototyping and user-centered design systems",
              "Fully responsive layouts across all screen sizes",
              "Optimization for SEO, accessibility, and performance"
            ],
            keyBenefits: [
              "Establish a strong digital presence with premium design",
              "Improve engagement with intuitive user interfaces",
              "Boost visibility through SEO-optimized structure",
              "Ensure lightning-fast performance and mobile responsiveness",
              "Build a future-ready platform with modern frameworks"
            ]
          }}
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

        {/* Mobile Service 2 - CRM Systems */}
        <ExpandableMobileServiceCard
          icon="fas fa-users-cog"
          title="CRM Systems"
          description="Streamline your customer relationships with world-class CRM implementations tailored to your business."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=3&orientation=landscape&flag=2cb6d86ff897e5fd0760f2bb64071180"
          imageAlt="CRM Systems"
          expandedContent={{
            whatWeOffer: [
              "Zoho CRM implementation and customization",
              "HubSpot setup and optimization",
              "Salesforce configuration and integration",
              "GoHighLevel deployment and training",
              "Custom CRM workflow automation"
            ],
            keyBenefits: [
              "Centralized customer data management",
              "Improved sales team productivity",
              "Enhanced customer insights",
              "Automated marketing campaigns"
            ]
          }}
        />

        {/* Mobile Service 3 - ERP Solutions */}
        <ExpandableMobileServiceCard
          icon="fas fa-cogs"
          title="ERP Solutions"
          description="Unify your business operations with comprehensive ERP solutions that grow with your organization."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=4&orientation=landscape&flag=32400648ca9eb4e3410e77f9a887adc3"
          imageAlt="ERP Solutions"
          expandedContent={{
            whatWeOffer: [
              "Odoo implementation and customization",
              "Module configuration and integration",
              "Custom module development",
              "Data migration and system setup",
              "Training and ongoing support"
            ],
            keyBenefits: [
              "Integrated business processes",
              "Real-time operational visibility",
              "Reduced operational costs",
              "Improved decision-making"
            ]
          }}
        />

        {/* Mobile Service 4 - MSP Services */}
        <ExpandableMobileServiceCard
          icon="fas fa-shield-alt"
          title="MSP Services"
          description="Comprehensive managed services to keep your technology infrastructure secure, compliant, and optimized."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=5&orientation=landscape&flag=e9e14e44cde36bfd208d4d42c3010660"
          imageAlt="MSP Services"
          expandedContent={{
            whatWeOffer: [
              "AI compliance and governance",
              "Security audits and assessments",
              "Network management and monitoring",
              "Cloud infrastructure management",
              "Disaster recovery planning"
            ],
            keyBenefits: [
              "Proactive issue prevention",
              "Enhanced security posture",
              "Regulatory compliance assurance",
              "Predictable IT costs"
            ]
          }}
        />

        {/* Mobile Service 5 - Web Design & Development */}
        <ExpandableMobileServiceCard
          icon="fas fa-laptop-code"
          title="Web Design & Development"
          description="Craft modern, high-performance websites that elevate your brand and drive engagement — built using industry-leading tools like React, Next.js, and Webflow."
          imageUrl="https://readdy.ai/api/search-image?width=600&height=400&seq=6&orientation=landscape&flag=4d41045a3fca1ac8f8cc59c4d3bf6ed5"
          imageAlt="Web Design & Development"
          expandedContent={{
            whatWeOffer: [
              "Custom-designed websites tailored to your business goals",
              "Development with React, Next.js, or Webflow",
              "UI/UX prototyping and user-centered design systems",
              "Fully responsive layouts across all screen sizes",
              "Optimization for SEO, accessibility, and performance"
            ],
            keyBenefits: [
              "Establish a strong digital presence with premium design",
              "Improve engagement with intuitive user interfaces",
              "Boost visibility through SEO-optimized structure",
              "Ensure lightning-fast performance and mobile responsiveness",
              "Build a future-ready platform with modern frameworks"
            ]
          }}
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
