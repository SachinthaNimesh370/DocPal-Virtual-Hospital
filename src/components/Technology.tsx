import React from 'react';
import { Smartphone, Server, Cloud, Shield, Cpu, Zap } from 'lucide-react';

const Technology = () => {
  const techStack = [
    {
      category: 'Frontend',
      icon: Smartphone,
      technologies: ['React', 'React Native', 'TypeScript', 'Tailwind CSS'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      category: 'Backend',
      icon: Server,
      technologies: ['Spring Boot', 'Node.js', 'RESTful APIs', 'Microservices'],
      color: 'bg-green-100 text-green-600'
    },
    {
      category: 'Database & Cloud',
      icon: Cloud,
      technologies: ['Firebase', 'PostgreSQL', 'AWS', 'Redis'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      category: 'Security',
      icon: Shield,
      technologies: ['OAuth 2.0', 'JWT', 'End-to-end Encryption', 'HIPAA Compliance'],
      color: 'bg-red-100 text-red-600'
    },
    {
      category: 'IoT & Hardware',
      icon: Cpu,
      technologies: ['ESP32', 'Arduino', 'Raspberry Pi', 'Sensor Integration'],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      category: 'AI & Analytics',
      icon: Zap,
      technologies: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision'],
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with cutting-edge technologies to ensure scalability, security, and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center mb-4`}>
                <tech.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{tech.category}</h3>
              <div className="space-y-2">
                {tech.technologies.map((technology, techIndex) => (
                  <div key={techIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">{technology}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Enterprise-Grade Infrastructure</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our platform is built on robust, scalable architecture designed to handle millions of users 
              while maintaining the highest standards of security and performance.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">&lt;100ms</div>
                <div className="text-gray-300 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">256-bit</div>
                <div className="text-gray-300 text-sm">Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">Global</div>
                <div className="text-gray-300 text-sm">CDN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;