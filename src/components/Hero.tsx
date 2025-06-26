import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Nitheesh_Vijayan.pdf';
    link.download = 'Nitheesh_Vijayan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Nitheesh Vijayan
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-60 max-w-3xl mx-auto leading-relaxed">
              AI/ML Engineer who builds intelligent solutions with{' '}
              <span className="font-semibold text-blue-600">OCR</span>,{' '}
              <span className="font-semibold text-purple-600">LLMs</span>,{' '}
              <span className="font-semibold text-indigo-600">RAG</span>, and{' '}
              <span className="font-semibold text-cyan-600">deep learning</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Learn More About Me
            </button>
            <button
              onClick={downloadResume}
              className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>

          <div className="pt-16">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-slate-400 hover:text-blue-600 transition-colors duration-200"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;