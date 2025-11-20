import React from 'react';
import { FeaturesSectionWithHoverEffects } from './ui/feature-section-with-hover-effects';

const Industries: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-4">
                        Industries We Have Worked With
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Delivering tailored solutions across diverse sectors to drive growth and innovation.
                    </p>
                </div>
                <FeaturesSectionWithHoverEffects />
            </div>
        </section>
    );
};

export default Industries;
