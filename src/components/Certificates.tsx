import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'IEEE Publication – Collision Detection',
      issuer: 'IEEE TQCEBT 2024',
      description: 'Published research on real-time collision detection and prevention using YOLOv8',
      type: 'Research Publication',
      color: 'blue'
    },
    {
      title: 'Database Management',
      issuer: 'University of Colorado (Coursera)',
      description: 'Comprehensive course covering database design, SQL, and data management principles',
      type: 'Professional Certificate',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-400/20 hover:border-blue-400/40 text-blue-400',
      green: 'border-green-400/20 hover:border-green-400/40 text-green-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="certificates" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certificates & Publications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition for expertise and contributions to the field
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 p-8 rounded-xl border-2 ${getColorClasses(cert.color)} transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-start mb-4">
                <Award className={`mr-4 mt-1 flex-shrink-0 ${cert.color === 'blue' ? 'text-blue-400' : 'text-green-400'}`} size={32} />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className={`font-medium mb-2 ${cert.color === 'blue' ? 'text-blue-400' : 'text-green-400'}`}>
                    {cert.issuer}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">{cert.description}</p>
              
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  cert.color === 'blue' 
                    ? 'bg-blue-600/20 text-blue-400' 
                    : 'bg-green-600/20 text-green-400'
                }`}>
                  {cert.type}
                </span>
                
                <button className={`flex items-center ${cert.color === 'blue' ? 'text-blue-400 hover:text-blue-300' : 'text-green-400 hover:text-green-300'} transition-colors duration-200`}>
                  <span className="mr-2">View</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;