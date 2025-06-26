import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: 'Database Management',
      issuer: 'University of Colorado (Coursera)',
      date: '2023',
      description: 'Comprehensive course covering database design, SQL optimization, and modern database management systems.',
      skills: ['SQL', 'Database Design', 'Query Optimization', 'Data Modeling'],
      credentialId: 'UC-DATABASE-2023'
    },
    {
      title: 'Collision Detection System Research',
      issuer: 'IEEE Conference',
      date: '2023',
      description: 'Published research paper on YOLO-based collision detection system for traffic safety applications.',
      skills: ['Computer Vision', 'YOLO', 'Research', 'Academic Writing'],
      credentialId: 'IEEE-COLLISION-2023'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-violet-100 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Certificates & Publications</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Continuous learning and contributing to the AI/ML community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{cert.title}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-slate-600 mb-3">
                    <Calendar size={16} />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-700 mb-4 leading-relaxed">{cert.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-slate-900 mb-2">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <span className="text-sm text-slate-500">ID: {cert.credentialId}</span>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                  View Certificate
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I believe in staying at the forefront of AI and machine learning through continuous education, 
            research, and hands-on experimentation with emerging technologies.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Online Courses Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Research Papers Read Monthly</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Open Source Contributions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;