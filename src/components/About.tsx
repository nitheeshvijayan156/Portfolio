import React from 'react';
import { GraduationCap, Briefcase, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate AI/ML Engineer with expertise in building production-grade systems
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-8 rounded-xl hover:bg-gray-900/70 transition-all duration-300">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-blue-400 mr-3" size={32} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-blue-400">MSc in Data Science</h4>
                <p className="text-gray-300">Christ University</p>
              </div>
              <div>
                <h4 className="font-medium text-green-400">BSc Computer Science Electronics Mathematics</h4>
                <p className="text-gray-300">Christ University</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-xl hover:bg-gray-900/70 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Briefcase className="text-green-400 mr-3" size={32} />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-green-400">ML Engineer</h4>
                <p className="text-gray-300">Constient Global Solutions</p>
                <p className="text-sm text-gray-400">2024 - Present</p>
              </div>
              <p className="text-gray-300 text-sm">
                Experienced in Python, PyTorch, OpenCV, Transformers, RAG, MLOps
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-xl hover:bg-gray-900/70 transition-all duration-300">
            <div className="flex items-center mb-4">
              <Target className="text-purple-400 mr-3" size={32} />
              <h3 className="text-xl font-semibold">Values</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-gray-300">Reliability</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-300">Scalability</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-gray-300">Efficiency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;