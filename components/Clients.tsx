import React from 'react';

const Clients: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">We've partnered with leading organizations across industries to drive transformative change.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        <div className="flex flex-col items-center justify-center p-4">
          <i className="fab fa-apple text-5xl text-gray-700 mb-2"></i>
          <span className="text-gray-600 font-medium">Apple Inc.</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="fab fa-microsoft text-5xl text-gray-700 mb-2"></i>
          <span className="text-gray-600 font-medium">Microsoft</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="fab fa-amazon text-5xl text-gray-700 mb-2"></i>
          <span className="text-gray-600 font-medium">Amazon</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="fab fa-google text-5xl text-gray-700 mb-2"></i>
          <span className="text-gray-600 font-medium">Google</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="fab fa-spotify text-5xl text-gray-700 mb-2"></i>
          <span className="text-gray-600 font-medium">Spotify</span>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <i className="fab fa-slack text-5xl text-gray-700 mb-2"></i>
          <span className="text-gray-600 font-medium">Slack</span>
        </div>
      </div>
    </div>
  </section>
);

export default Clients;
