import React from 'react';
import { ChevronDown, TrendingUp, RotateCcw } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="text-blue-400">Nitheesh</span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I build intelligent, production-ready AI systems that scale. 
              Passionate about <span className="text-blue-400 font-semibold">LLMs</span>, 
              <span className="text-green-400 font-semibold"> Deep Learning</span>, and 
              <span className="text-purple-400 font-semibold"> MLOps</span>.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
              <TrendingUp className="text-green-400" size={20} />
              <span>25% boost in document retrieval</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 px-4 py-2 rounded-full">
              <RotateCcw className="text-blue-400" size={20} />
              <span>Live model reloading with rollback</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;