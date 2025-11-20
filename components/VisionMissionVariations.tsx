import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import {
    IconEye,
    IconTarget,
} from '@tabler/icons-react';

const content = {
    vision: {
        title: "Our Vision",
        subtitle: "Future Focused",
        description: "To empower businesses of all sizes with seamless digital systems and trusted human support — bridging innovation and service to fuel smarter, simpler growth.",
        tags: ["Innovation", "Growth", "Simplicity"]
    },
    mission: {
        title: "Our Mission",
        subtitle: "Purpose Driven",
        description: "To deliver agile, custom-built tech solutions and reliable services that help businesses operate faster, connect better, and grow smarter. We simplify complexity through systems, automation, and service.",
        tags: ["Agility", "Connection", "Reliability"]
    }
};

const VisionMissionVariations: React.FC = () => {
    const [hoveredSection, setHoveredSection] = useState<'vision' | 'mission' | null>(null);

    return (
        <section className="relative bg-black min-h-[600px] h-auto md:h-[75vh] flex flex-col md:flex-row overflow-hidden font-sans">

            {/* Vision Section */}
            <motion.div
                layout
                className="relative flex-1 flex flex-col justify-center p-6 md:p-12 border-b md:border-b-0 md:border-r border-white/10 cursor-default md:cursor-pointer group overflow-hidden"
                onMouseEnter={() => setHoveredSection('vision')}
                onMouseLeave={() => setHoveredSection(null)}
                animate={{
                    flex: hoveredSection === 'vision' ? 1.5 : hoveredSection === 'mission' ? 0.8 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/90 z-10" />
                    <motion.div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30"
                        animate={{
                            scale: hoveredSection === 'vision' ? 1.05 : 1,
                            opacity: hoveredSection === 'vision' ? 0.5 : 0.3
                        }}
                        transition={{ duration: 0.8 }}
                    />
                </div>

                <div className="relative z-20 max-w-xl mx-auto md:mx-0">
                    <motion.div
                        layout
                        className="mb-6"
                    >
                        <IconEye size={48} stroke={1} className="text-white/90 mb-4" />
                        <span className="text-white/50 text-[10px] font-mono tracking-[0.3em] uppercase block">
                            The Future
                        </span>
                    </motion.div>

                    <motion.h2
                        layout
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.9] tracking-tighter"
                    >
                        Seeing<br />
                        <span className="text-white/40 group-hover:text-white transition-colors duration-500">
                            Beyond
                        </span>
                    </motion.h2>

                    <motion.div
                        layout
                        animate={{
                            opacity: hoveredSection === 'mission' ? 0.3 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light border-l border-white/20 pl-6 mb-8 max-w-md">
                            {content.vision.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {content.vision.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-[10px] tracking-widest uppercase"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Mission Section */}
            <motion.div
                layout
                className="relative flex-1 flex flex-col justify-center p-6 md:p-12 cursor-default md:cursor-pointer group overflow-hidden"
                onMouseEnter={() => setHoveredSection('mission')}
                onMouseLeave={() => setHoveredSection(null)}
                animate={{
                    flex: hoveredSection === 'mission' ? 1.5 : hoveredSection === 'vision' ? 0.8 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/90 z-10" />
                    <motion.div
                        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30"
                        animate={{
                            scale: hoveredSection === 'mission' ? 1.05 : 1,
                            opacity: hoveredSection === 'mission' ? 0.5 : 0.3
                        }}
                        transition={{ duration: 0.8 }}
                    />
                </div>

                <div className="relative z-20 max-w-xl mx-auto md:mx-0">
                    <motion.div
                        layout
                        className="mb-6"
                    >
                        <IconTarget size={48} stroke={1} className="text-white/90 mb-4" />
                        <span className="text-white/50 text-[10px] font-mono tracking-[0.3em] uppercase block">
                            The Purpose
                        </span>
                    </motion.div>

                    <motion.h2
                        layout
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.9] tracking-tighter"
                    >
                        Driving<br />
                        <span className="text-white/40 group-hover:text-white transition-colors duration-500">
                            Impact
                        </span>
                    </motion.h2>

                    <motion.div
                        layout
                        animate={{
                            opacity: hoveredSection === 'vision' ? 0.3 : 1,
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light border-l border-white/20 pl-6 mb-8 max-w-md">
                            {content.mission.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {content.mission.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-[10px] tracking-widest uppercase"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
};

export default VisionMissionVariations;
