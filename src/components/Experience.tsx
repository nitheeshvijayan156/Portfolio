import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-violet-100 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Work Experience</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building and deploying AI solutions in production environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="relative">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              <div className="ml-20 pb-12">
                <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">ML Engineer</h3>
                      <h4 className="text-xl font-semibold text-blue-600 mb-3">Constient Global Solutions</h4>
                    </div>
                    
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Calendar size={16} />
                        <span className="font-medium">January 2024 – Present</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin size={16} />
                        <span>Remote</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <p className="text-slate-700 leading-relaxed">
                      Leading the development and deployment of cutting-edge AI models in production environments, 
                      with a focus on MLOps best practices and scalable machine learning pipelines.
                    </p>

                    <div>
                      <h5 className="font-semibold text-slate-900 mb-3">Key Responsibilities & Achievements:</h5>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Built and deployed production-ready AI models serving thousands of users daily</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Implemented comprehensive MLOps pipelines with automated testing, monitoring, and deployment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Developed RAG (Retrieval-Augmented Generation) systems using LLMs for intelligent document processing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Optimized model performance and reduced inference latency by 40% through efficient architecture design</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Collaborated with cross-functional teams to integrate AI solutions into existing business workflows</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-slate-900 mb-3">Technologies & Tools:</h5>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'PyTorch', 'TensorFlow', 'Docker', 'Kubernetes', 'AWS', 'MLflow', 'Apache Airflow', 'PostgreSQL', 'Redis'].map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-slate-900">Impact</span>
                      </div>
                      <p className="text-slate-700">
                        Successfully delivered multiple AI projects that improved operational efficiency by 35% 
                        and reduced manual processing time by over 60% across various business units.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Looking for New Opportunities</h3>
            <p className="text-slate-600 mb-6">
              I'm always interested in challenging projects that push the boundaries of AI and machine learning. 
              Let's discuss how we can work together to build the future.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;