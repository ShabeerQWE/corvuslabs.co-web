import React from 'react';

const Stats: React.FC = () => (
  <section className="py-16 bg-black text-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6">
          <i className="fas fa-project-diagram text-4xl mb-4"></i>
          <h3 className="text-4xl font-bold mb-2">500+</h3>
          <p className="text-gray-300">Projects Completed</p>
        </div>
        <div className="p-6">
          <i className="fas fa-globe-americas text-4xl mb-4"></i>
          <h3 className="text-4xl font-bold mb-2">20+</h3>
          <p className="text-gray-300">Countries Served</p>
        </div>
        <div className="p-6">
          <i className="fas fa-trophy text-4xl mb-4"></i>
          <h3 className="text-4xl font-bold mb-2">98%</h3>
          <p className="text-gray-300">Success Rate</p>
        </div>
        <div className="p-6">
          <i className="fas fa-handshake text-4xl mb-4"></i>
          <h3 className="text-4xl font-bold mb-2">10+</h3>
          <p className="text-gray-300">Years of Excellence</p>
        </div>
      </div>
    </div>
  </section>
);

export default Stats;
