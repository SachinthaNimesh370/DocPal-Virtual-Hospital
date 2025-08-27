import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Virtual 
                <span className="block text-blue-600">Mini Hospital</span>
                <span className="block text-sm md:text-lg font-normal text-gray-600 mt-4">
                  – Anytime, Anywhere
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Experience the future of healthcare with AI-powered consultations, remote monitoring, 
                and comprehensive medical support – all from the comfort of your home.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="font-semibold">Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span className="font-semibold">Learn More</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10k+</div>
                <div className="text-sm text-gray-600">Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Specialists</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Sarah Wilson</div>
                    <div className="text-sm text-gray-500">Available for consultation</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-800 font-medium">AI Health Assessment</div>
                  <div className="text-xs text-blue-600 mt-1">Complete your symptom check in 2 minutes</div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Next available slot</span>
                    <span className="text-gray-900 font-medium">2:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Estimated wait time</span>
                    <span className="text-green-600 font-medium">5 minutes</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;