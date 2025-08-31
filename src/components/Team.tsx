import React from 'react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Thilakarathne B.P.T.S.',
      role: 'CEO & Founder',
      expertise: 'Electronic & Electrical Engineering, University of Jaffna',
      linkedin: 'https://linkedin.com/in/rajeshkumar',
      email: 'suneththilakarathne@gmail.com',
      image: 'dist/assets/img/thilakarathna.jpeg'
    },
    {
      name: 'Nimesh S.P.S.',
      role: 'CTO & Co-Founder',
      expertise: 'Computer Engineering, University of Jaffna',
      linkedin: 'https://linkedin.com/in/priyasharma',
      email: 'sachinthanimesh370@gmail.com',
      image: 'dist/assets/img/nimesh.jpeg'
    },
    {
      name: 'Gunarathna A.S.M.N',
      role: 'Project Manager & Co-Founder',
      expertise: 'Computer Engineering, University of Jaffna',
      linkedin: 'https://linkedin.com/in/priyasharma',
      email: 'satharakanilmantha1@gmail.com',
      image: 'dist/assets/img/gunarathna.jpeg'
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
              <div className="flex flex-row items-start justify-between">
                <div className="flex flex-col items-start space-y-1">
                  <span className="text-gray-700">Dr.(Mrs.) J.Jananie</span>
                  <span className="text-sm text-gray-500">Senior Lecturer Grade II</span>
                  <span className="text-sm text-gray-500">Department of Computer Engineering,</span>
                  <span className="text-sm text-gray-500">Faculty Of Engineering</span>
                  <span className="text-sm text-gray-500">University of Jaffna</span>
                </div>
                <img src="dist/assets/img/jananie.jpg" alt="Advisor" style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #b7b7b7ff' }} />
              
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;