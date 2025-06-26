import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Document Management System',
      description: 'AI-driven OCR + LLM solution for managing RFPs and bills',
      longDescription: 'Developed a comprehensive document management system that combines Optical Character Recognition (OCR) with Large Language Models (LLMs) to automatically process, categorize, and extract key information from Request for Proposals (RFPs) and billing documents. The system improved search relevance by 25% through advanced semantic understanding and automated metadata extraction.',
      technologies: ['Python', 'OCR', 'LLMs', 'RAG', 'FastAPI', 'PostgreSQL'],
      impact: '25% improvement in search relevance',
      features: [
        'Automated document classification and tagging',
        'Intelligent text extraction with error correction',
        'Semantic search capabilities using vector embeddings',
        'Real-time document processing pipeline',
        'RESTful API for integration with existing systems'
      ]
    },
    {
      title: 'Zenso Gesture Translator',
      description: 'Real-time sign language recognition system',
      longDescription: 'Built an innovative real-time sign language translation system using Recurrent Neural Networks (RNN) and Transformer models. The system captures hand gestures through computer vision, processes them through deep learning models, and translates them into text or speech in real-time, making communication more accessible for the hearing-impaired community.',
      technologies: ['Python', 'RNN', 'Transformers', 'OpenCV', 'TensorFlow', 'MediaPipe'],
      impact: 'Real-time gesture recognition with 92% accuracy',
      features: [
        'Real-time hand gesture detection and tracking',
        'Multi-language sign language support',
        'Transformer-based sequence modeling',
        'Voice synthesis for translated text',
        'Mobile-friendly web interface'
      ]
    },
    {
      title: 'Collision Detection System',
      description: 'YOLO-based accident detection for traffic safety',
      longDescription: 'Developed an advanced computer vision system using YOLO (You Only Look Once) object detection for real-time vehicle collision detection. The system analyzes traffic camera feeds to automatically detect accidents, alert emergency services, and provide valuable data for traffic safety analysis. This work was published in an IEEE conference.',
      technologies: ['Python', 'YOLO', 'OpenCV', 'PyTorch', 'Flask', 'MongoDB'],
      impact: 'IEEE conference publication',
      features: [
        'Real-time vehicle and collision detection',
        'Automated emergency alert system',
        'Traffic pattern analysis and reporting',
        'Integration with existing traffic management systems',
        'Scalable deployment for multiple camera feeds'
      ]
    }
  ];

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-violet-100 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Innovative AI solutions that make a real-world impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-lg text-slate-600 mb-4">{project.description}</p>
                  
                  {expandedProject === index && (
                    <div className="space-y-4 mb-6">
                      <p className="text-slate-700">{project.longDescription}</p>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-lg">
                      {project.impact}
                    </span>
                    
                    <button
                      onClick={() => toggleProject(index)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      {expandedProject === index ? (
                        <>
                          Show Less <ChevronUp size={20} />
                        </>
                      ) : (
                        <>
                          Learn More <ChevronDown size={20} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;