import React from 'react';
import { MapPin, GraduationCap, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-violet-100 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Passionate about leveraging cutting-edge technology to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Based in India</h3>
                <p className="text-slate-600">
                  Working remotely and collaborating with teams globally to deliver innovative AI solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Strong Academic Foundation</h3>
                <p className="text-slate-600">
                  MSc in Data Science and BSc in Computer Science, providing a solid theoretical and practical foundation in technology.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Problem Solver at Heart</h3>
                <p className="text-slate-600">
                  Love tackling complex challenges and transforming them into elegant, scalable solutions using the latest in AI and machine learning.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-slate-600">
              <p>
                My passion for artificial intelligence began during my computer science studies, where I discovered 
                the incredible potential of machine learning to transform industries and improve lives.
              </p>
              <p>
                Through my Master's in Data Science, I deepened my understanding of statistical modeling, 
                deep learning architectures, and the mathematical foundations that power modern AI systems.
              </p>
              <p>
                Today, I specialize in building production-ready AI solutions, from document processing systems 
                using OCR and LLMs to real-time computer vision applications. I'm particularly excited about 
                the intersection of traditional ML techniques with modern transformer architectures.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the latest research papers, contributing to 
                open-source projects, or mentoring aspiring data scientists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;