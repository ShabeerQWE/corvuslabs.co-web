import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Cpu, Database, Globe, Layers, Shield, Zap, ChevronRight } from 'lucide-react';

// Final Monotone Data
const services = [
  {
    id: 'ai',
    title: "AI Automation",
    description: "Leverage the power of artificial intelligence to automate complex workflows, reduce operational costs, and unlock predictive insights. We build custom AI agents and neural networks that evolve with your business.",
    icon: Cpu,
    imageUrl: "/service-ai-mono.png",
    features: ["Autonomous Agents", "Predictive Analytics", "Workflow Automation", "LLM Integration"]
  },
  {
    id: 'crm',
    title: "CRM Systems",
    description: "Centralize your customer interactions with a bespoke CRM strategy. Whether it's Salesforce, HubSpot, or a custom build, we ensure your sales and support teams have a 360-degree view of every client.",
    icon: Database,
    imageUrl: "/service-crm-mono.png",
    features: ["Pipeline Management", "Automated Outreach", "Customer Insights", "Data Migration"]
  },
  {
    id: 'web',
    title: "Web Experience",
    description: "We craft immersive, high-performance websites that blend aesthetic excellence with technical precision. From 3D interactive elements to lightning-fast load times, we define your digital brand.",
    icon: Globe,
    imageUrl: "/service-web-mono.png",
    features: ["3D WebGL Experiences", "React & Next.js", "Conversion Optimization", "Headless CMS"]
  },
  {
    id: 'erp',
    title: "ERP Solutions",
    description: "Break down silos with a comprehensive ERP solution. We integrate finance, supply chain, and HR into a single source of truth, enabling real-time decision making at an enterprise scale.",
    icon: Layers,
    imageUrl: "/service-erp-mono.png",
    features: ["Supply Chain Sync", "Financial Reporting", "Inventory Management", "HR Automation"]
  },
  {
    id: 'msp',
    title: "Managed Security",
    description: "Sleep soundly knowing your digital assets are protected by 24/7 monitoring and military-grade security protocols. We manage your cloud infrastructure so you can focus on growth.",
    icon: Shield,
    imageUrl: "/service-msp-mono.png",
    features: ["24/7 Threat Monitoring", "Cloud Compliance", "Disaster Recovery", "Zero Trust Security"]
  },
  {
    id: 'integration',
    title: "System Integration",
    description: "Stop copy-pasting data. We build robust API bridges between your favorite tools, ensuring data flows seamlessly across your entire tech stack without manual intervention.",
    icon: Zap,
    imageUrl: "/service-int-mono.png",
    features: ["Custom API Development", "Real-time Sync", "Legacy System Support", "Secure Data Transfer"]
  }
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="bg-black text-white pt-0 pb-20 md:pb-32 relative overflow-hidden">
      {/* Top Gradient for Diffused Border */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

      {/* Full Screen Background with Monotone Filter */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={services[activeIndex].imageUrl}
            alt=""
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/60"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-30 pt-12">
        <div className="mb-12 border-b border-white/10 pb-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">Our Services</h2>
          <p className="text-neutral-500 mt-3 text-lg max-w-xl">
            Comprehensive digital solutions designed for clarity, efficiency, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: List */}
          <div className="lg:col-span-5 flex flex-col">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group flex items-center gap-4 py-5 border-b border-white/10 cursor-pointer transition-all duration-300 ${activeIndex === index ? 'border-white pl-4' : 'hover:border-white/50 hover:pl-2'}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <ChevronRight
                  className={`w-6 h-6 transition-all duration-300 ${activeIndex === index ? 'text-white opacity-100' : 'text-neutral-600 opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'}`}
                />
                <h3 className={`text-2xl md:text-3xl font-light tracking-tight transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Right: Detail Card */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="bg-neutral-900/80 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-xl w-full shadow-2xl"
              >
                <div className="mb-6">
                  <div className="mb-6">
                    {React.createElement(services[activeIndex].icon, {
                      size: 32,
                      strokeWidth: 1.5,
                      className: "text-white"
                    })}
                  </div>

                  <h3 className="text-3xl font-bold mb-4 tracking-tight text-white">{services[activeIndex].title}</h3>
                  <p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
                    {services[activeIndex].description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {services[activeIndex].features.map((feature, i) => (
                    <div key={i} className="flex items-center text-neutral-300 text-sm tracking-wide bg-white/5 rounded-lg px-4 py-3 border border-white/5">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full group flex items-center justify-center gap-3 bg-white text-black py-4 rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors">
                  Explore Solution
                  <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
