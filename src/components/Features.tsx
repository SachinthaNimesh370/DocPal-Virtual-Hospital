import React from 'react';
import { 
  Video, 
  Stethoscope, 
  Brain, 
  Activity, 
  Pill, 
  Ambulance, 
  Apple, 
  BookOpen 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Video,
      title: 'Virtual Consultations',
      description: '24/7 access to qualified doctors through secure video calls',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Stethoscope,
      title: 'Real-Time Virtual OPD',
      description: 'Join virtual outpatient departments with real-time queue management',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Brain,
      title: 'AI Symptom Checker',
      description: 'Intelligent symptom analysis and preliminary diagnosis suggestions',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Activity,
      title: 'Remote Health Monitoring',
      description: 'IoT device integration for continuous health parameter tracking',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Pill,
      title: 'Pharmacy Delivery',
      description: 'In-app payments and doorstep delivery of prescribed medications',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Ambulance,
      title: 'Emergency SOS & DocPal Ride',
      description: 'Emergency services and patient transport coordination',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Apple,
      title: 'Personalized Wellness',
      description: 'Custom diet plans and workout routines based on health data',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: BookOpen,
      title: 'Health Awareness Library',
      description: 'Comprehensive medical resources and health education content',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Healthcare Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for complete healthcare management in one integrated platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to experience the future of healthcare?</h3>
          <p className="text-blue-100 mb-6">Join thousands of patients who trust DocPal for their healthcare needs</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Start Your Health Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;