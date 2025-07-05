import React from 'react';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Services: React.FC = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive consulting solutions designed to elevate your business to new heights.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Service 1 */}
        <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img src="https://readdy.ai/api/search-image?width=600&height=400&seq=2&orientation=landscape&flag=9d6156f18624d1acd2b159095980055c" alt="Strategic Consulting" className="w-full h-full object-cover object-top" />
          </div>
          <CardContent className="p-6 pt-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-chart-line text-2xl text-gray-800 mr-3"></i>
              <h3 className="text-2xl font-bold">Strategic Consulting</h3>
            </div>
            <p className="text-gray-600 mb-4">Develop comprehensive business strategies that align with your vision and drive sustainable growth in competitive markets.</p>
            <Button variant="link" className="p-0 text-black hover:text-gray-700 font-medium !rounded-button whitespace-nowrap">
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </CardContent>
        </Card>

        {/* Service 2 */}
        <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img src="https://readdy.ai/api/search-image?width=600&height=400&seq=3&orientation=landscape&flag=2cb6d86ff897e5fd0760f2bb64071180" alt="Digital Transformation" className="w-full h-full object-cover object-top" />
          </div>
          <CardContent className="p-6 pt-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-digital-tachograph text-2xl text-gray-800 mr-3"></i>
              <h3 className="text-2xl font-bold">Digital Transformation</h3>
            </div>
            <p className="text-gray-600 mb-4">Navigate the digital landscape with innovative solutions that modernize your operations and enhance customer experiences.</p>
            <Button variant="link" className="p-0 text-black hover:text-gray-700 font-medium !rounded-button whitespace-nowrap">
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </CardContent>
        </Card>

        {/* Service 3 */}
        <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img src="https://readdy.ai/api/search-image?width=600&height=400&seq=4&orientation=landscape&flag=32400648ca9eb4e3410e77f9a887adc3" alt="Financial Advisory" className="w-full h-full object-cover object-top" />
          </div>
          <CardContent className="p-6 pt-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-dollar-sign text-2xl text-gray-800 mr-3"></i>
              <h3 className="text-2xl font-bold">Financial Advisory</h3>
            </div>
            <p className="text-gray-600 mb-4">Optimize financial performance with expert guidance on investment strategies, risk management, and capital allocation.</p>
            <Button variant="link" className="p-0 text-black hover:text-gray-700 font-medium !rounded-button whitespace-nowrap">
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </CardContent>
        </Card>

        {/* Service 4 */}
        <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img src="https://readdy.ai/api/search-image?width=600&height=400&seq=5&orientation=landscape&flag=e9e14e44cde36bfd208d4d42c3010660" alt="Market Research" className="w-full h-full object-cover object-top" />
          </div>
          <CardContent className="p-6 pt-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-search text-2xl text-gray-800 mr-3"></i>
              <h3 className="text-2xl font-bold">Market Research</h3>
            </div>
            <p className="text-gray-600 mb-4">Gain valuable insights into market trends, consumer behavior, and competitive landscapes to inform strategic decision-making.</p>
            <Button variant="link" className="p-0 text-black hover:text-gray-700 font-medium !rounded-button whitespace-nowrap">
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </CardContent>
        </Card>

        {/* Service 5 */}
        <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img src="https://readdy.ai/api/search-image?width=600&height=400&seq=6&orientation=landscape&flag=4d41045a3fca1ac8f8cc59c4d3bf6ed5" alt="Organizational Development" className="w-full h-full object-cover object-top" />
          </div>
          <CardContent className="p-6 pt-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-users text-2xl text-gray-800 mr-3"></i>
              <h3 className="text-2xl font-bold">Organizational Development</h3>
            </div>
            <p className="text-gray-600 mb-4">Enhance organizational effectiveness through strategic talent management, leadership development, and culture transformation.</p>
            <Button variant="link" className="p-0 text-black hover:text-gray-700 font-medium !rounded-button whitespace-nowrap">
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </CardContent>
        </Card>

        {/* Service 6 */}
        <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="h-48 overflow-hidden">
            <img src="https://readdy.ai/api/search-image?width=600&height=400&seq=7&orientation=landscape&flag=171e3f95943df0363f525e7bc5220049" alt="Operations Consulting" className="w-full h-full object-cover object-top" />
          </div>
          <CardContent className="p-6 pt-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-cogs text-2xl text-gray-800 mr-3"></i>
              <h3 className="text-2xl font-bold">Operations Consulting</h3>
            </div>
            <p className="text-gray-600 mb-4">Streamline operations and supply chains to improve efficiency, reduce costs, and enhance overall business performance.</p>
            <Button variant="link" className="p-0 text-black hover:text-gray-700 font-medium !rounded-button whitespace-nowrap">
              Learn more <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default Services;
