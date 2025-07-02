import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building production-grade AI systems that drive real business impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/50 p-8 rounded-xl border-l-4 border-blue-400">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-2">ML Engineer</h3>
                <h4 className="text-xl text-gray-300 mb-2">Constient Global Solutions</h4>
              </div>
              <div className="flex flex-col md:items-end text-gray-400">
                <div className="flex items-center mb-1">
                  <Calendar size={16} className="mr-2" />
                  <span>2024 – Present</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>Remote</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <TrendingUp className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300">
                  Delivered 2+ AI systems improving operational efficiency by 20% through advanced machine learning implementations
                </p>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300">
                  Built end-to-end ML pipelines with RAG (Retrieval-Augmented Generation) and Large Language Models for enterprise applications
                </p>
              </div>
              
              <div className="flex items-start">
                <TrendingUp className="text-green-400 mr-3 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-300">
                  Contributed to full-stack deployment and model tracking systems, ensuring robust production environments
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <h5 className="text-lg font-semibold text-blue-400 mb-3">Key Technologies</h5>
              <div className="flex flex-wrap gap-2">
                {['Python', 'PyTorch', 'Transformers', 'RAG', 'LLMs', 'MLOps', 'Docker', 'AWS'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;