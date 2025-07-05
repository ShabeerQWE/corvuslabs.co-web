import React from 'react';
import { Card, CardContent } from "./ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear what our clients have to say about their experience working with Corvus Labs.</p>
      </div>
      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-14"
        >
          <SwiperSlide>
            <Card className="bg-white border-none shadow-lg h-full">
              <CardContent className="p-8 pt-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <i className="fas fa-user-circle text-4xl text-gray-400"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sarah Johnson</h3>
                    <p className="text-gray-600">CEO, TechVision Inc.</p>
                  </div>
                </div>
                <div className="mb-4">
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                </div>
                <p className="text-gray-700 italic">"Corvus Labs transformed our business strategy, leading to a 40% increase in market share within just 12 months. Their insights were invaluable, and their team was professional at every step."</p>
              </CardContent>
            </Card>
          </SwiperSlide>
          
          <SwiperSlide>
            <Card className="bg-white border-none shadow-lg h-full">
              <CardContent className="p-8 pt-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <i className="fas fa-user-circle text-4xl text-gray-400"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Michael Chen</h3>
                    <p className="text-gray-600">CFO, Global Finance Group</p>
                  </div>
                </div>
                <div className="mb-4">
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                </div>
                <p className="text-gray-700 italic">"The financial advisory services provided by Corvus Labs helped us navigate a complex merger with confidence. Their attention to detail and strategic foresight saved us millions in potential losses."</p>
              </CardContent>
            </Card>
          </SwiperSlide>
          
          <SwiperSlide>
            <Card className="bg-white border-none shadow-lg h-full">
              <CardContent className="p-8 pt-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <i className="fas fa-user-circle text-4xl text-gray-400"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Emma Rodriguez</h3>
                    <p className="text-gray-600">COO, Nexus Retail</p>
                  </div>
                </div>
                <div className="mb-4">
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                </div>
                <p className="text-gray-700 italic">"Our supply chain efficiency improved by 35% after implementing Corvus Labs' recommendations. Their operations team understood our challenges and delivered practical, effective solutions."</p>
              </CardContent>
            </Card>
          </SwiperSlide>
          
          <SwiperSlide>
            <Card className="bg-white border-none shadow-lg h-full">
              <CardContent className="p-8 pt-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <i className="fas fa-user-circle text-4xl text-gray-400"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">David Thompson</h3>
                    <p className="text-gray-600">CTO, InnovateTech</p>
                  </div>
                </div>
                <div className="mb-4">
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                  <i className="fas fa-star text-yellow-500"></i>
                </div>
                <p className="text-gray-700 italic">"The digital transformation strategy developed by Corvus Labs positioned us as an industry leader. Their expertise in emerging technologies and change management was exceptional."</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <h3 className="text-3xl font-bold mb-4">Client Satisfaction</h3>
            <p className="text-gray-600 mb-6">Our commitment to excellence is reflected in our consistently high client satisfaction ratings.</p>
            <div className="space-y-6">
              {/* Overall Satisfaction */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Satisfaction</span>
                  <span className="text-sm font-bold text-green-600">98%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              
              {/* Service Quality */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Service Quality</span>
                  <span className="text-sm font-bold text-blue-600">96%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '96%' }}></div>
                </div>
              </div>
              
              {/* Communication */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Communication</span>
                  <span className="text-sm font-bold text-purple-600">97%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-purple-500 h-3 rounded-full" style={{ width: '97%' }}></div>
                </div>
              </div>
              
              {/* Results Delivered */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Results Delivered</span>
                  <span className="text-sm font-bold text-orange-600">99%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: '99%' }}></div>
                </div>
              </div>
              
              {/* Client Retention */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Client Retention</span>
                  <span className="text-sm font-bold text-teal-600">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-teal-500 h-3 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Our Commitment</h3>
            <p className="mb-6">At Corvus Labs, we are dedicated to delivering exceptional results that exceed client expectations.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                <span>Tailored solutions for your unique challenges</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                <span>Data-driven insights that drive strategic decisions</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                <span>Transparent communication throughout the engagement</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-400 mt-1 mr-3"></i>
                <span>Measurable results with clear ROI</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
