import React from 'react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      expertise: 'Healthcare Technology, Business Strategy',
      linkedin: 'https://linkedin.com/in/rajeshkumar',
      email: 'rajesh@docpal.com',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Medical Officer',
      expertise: 'Internal Medicine, Telemedicine',
      linkedin: 'https://linkedin.com/in/priyasharma',
      email: 'priya@docpal.com',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
  
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Team NeuroVolts</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse team of healthcare professionals, technology experts, and visionary leaders 
            committed to revolutionizing digital healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-blue-100"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-6">{member.expertise}</p>
                
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Team NeuroVolts?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Combined 50+ years of healthcare experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Deep expertise in healthcare technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Proven track record in scaling startups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Passionate about improving patient outcomes</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Advisory Board</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Dr. Rajesh Khanna</span>
                  <span className="text-sm text-gray-500">Former AIIMS Director</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Meera Joshi</span>
                  <span className="text-sm text-gray-500">Ex-McKinsey Partner</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Suresh Narayanan</span>
                  <span className="text-sm text-gray-500">Healthcare Investor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;