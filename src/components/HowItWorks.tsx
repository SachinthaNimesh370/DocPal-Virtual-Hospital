import React from 'react';
import { Calendar, Brain, Pill, Bell } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Calendar,
      title: 'Book or Join OPD',
      description: 'Schedule an appointment or join our virtual OPD queue',
      details: 'Select your preferred doctor, choose a time slot, or join our real-time virtual OPD for immediate assistance'
    },
    {
      step: 2,
      icon: Brain,
      title: 'AI Triage & Consultation',
      description: 'AI assessment followed by doctor consultation',
      details: 'Our AI system analyzes your symptoms and medical history, then connects you with the most suitable specialist'
    },
    {
      step: 3,
      icon: Pill,
      title: 'Prescription & Delivery',
      description: 'Receive prescriptions and get medicines delivered',
      details: 'Get digital prescriptions instantly and have your medications delivered to your doorstep within hours'
    },
    {
      step: 4,
      icon: Bell,
      title: 'Follow-up & Monitoring',
      description: 'Automated reminders and health tracking',
      details: 'Receive medication reminders, follow-up notifications, and continuous health monitoring through connected devices'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How DocPal Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, seamless healthcare in four easy steps
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-gray-100 rounded-xl p-8 text-center hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Healthcare Journey in Minutes
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              From initial consultation to medication delivery and follow-up care, 
              DocPal streamlines your entire healthcare experience
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">2 min</div>
                <div className="text-sm text-gray-600">Average booking time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">15 min</div>
                <div className="text-sm text-gray-600">Typical consultation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">2 hrs</div>
                <div className="text-sm text-gray-600">Medicine delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;