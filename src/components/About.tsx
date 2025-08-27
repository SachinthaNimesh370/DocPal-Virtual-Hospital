import React from 'react';
import { Target, Users, Shield, Globe } from 'lucide-react';

const About = () => {
  const objectives = [
    {
      icon: Users,
      title: 'Remote Consultations',
      description: 'Connect with qualified doctors from anywhere, anytime'
    },
    {
      icon: Shield,
      title: 'AI Triage System',
      description: 'Intelligent symptom assessment and priority routing'
    },
    {
      icon: Target,
      title: 'Device Integration',
      description: 'Seamless IoT health monitoring and data collection'
    },
    {
      icon: Globe,
      title: 'Comprehensive Care',
      description: 'End-to-end healthcare including pharmacy and emergency services'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About DocPal</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing healthcare accessibility through cutting-edge technology, 
            making quality medical care available to everyone, everywhere.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              DocPal bridges the gap between traditional healthcare and modern technology needs. 
              We're building a virtual mini hospital that brings comprehensive medical care to your fingertips, 
              combining AI intelligence with human expertise to deliver personalized healthcare solutions.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform addresses critical healthcare challenges including accessibility, 
              affordability, and convenience while maintaining the highest standards of medical care and data security.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Digital Integration</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">AI</div>
                <div className="text-sm text-gray-600">Powered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">Secure</div>
                <div className="text-sm text-gray-600">Platform</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Objectives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <objective.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{objective.title}</h4>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;