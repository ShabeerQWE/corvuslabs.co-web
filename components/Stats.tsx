import React from 'react';
import { CompareDemo } from './ui/compare-demo';

const Stats: React.FC = () => (
  <section className="py-16 bg-black text-white">
    <div className="max-w-6xl mx-auto px-8">
      <div className="flex items-center justify-center">
        <CompareDemo />
      </div>
    </div>
  </section>
);

export default Stats;
