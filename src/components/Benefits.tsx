import React from 'react';
import { MapPin, Users, DollarSign, FileText, Shield, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: MapPin,
      title: 'Accessible Anywhere',
      description: 'Reach patients in both urban and rural areas with our comprehensive telemedicine platform',
      stats: '100+ Cities'
    },
    {
      icon: Users,
      title: 'Reduces Hospital Queues',
      description: 'Minimize waiting times and overcrowding while reducing infection transmission risks',
      stats: '75% Time Saved'
    },
    {
      icon: DollarSign,
      title: 'Affordable & Convenient',
      description: 'Cost-effective healthcare solutions with transparent pricing and no hidden fees',
      stats: '60% Cost Reduction'
    },
    {
      icon: FileText,
      title: 'Integrated Health Records',
      description: 'Complete digital health records accessible anytime, anywhere with secure cloud storage',
      stats: '100% Digital'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Bank-level security with end-to-end encryption for all medical data and consultations',
      stats: 'HIPAA Compliant'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock access to healthcare services including emergency consultations',
      stats: 'Always Available'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose DocPal?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the advantages of modern healthcare technology designed for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {benefit.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Without Boundaries</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">No geographic limitations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Instant access to specialists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Comprehensive care coordination</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">AI-powered health insights</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Impact Numbers</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">50,000+</div>
                  <div className="text-blue-100 text-sm">Patients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">1,000+</div>
                  <div className="text-blue-100 text-sm">Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-blue-100 text-sm">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-blue-100 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;