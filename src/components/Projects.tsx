import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      id: 'zenso',
      title: 'Zenso – Sign Language Translator',
      description: 'Real-time AI mobile app to translate sign language to/from speech using advanced Transformer architecture.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PyTorch', 'Transformers', 'Mobile AI', 'Real-time'],
      highlights: ['Encoder-decoder architecture', 'S3 deployment system', 'Live model swapping']
    },
    {
      id: 'dms',
      title: 'Document Management System',
      description: 'AI-based enterprise system to manage RFPs and bills with OCR, embeddings, and intelligent querying.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['OCR', 'Vector DB', 'MySQL', 'AWS'],
      highlights: ['Smart categorization', 'Chatbot querying', 'Document analytics']
    },
    {
      id: 'loan-advisor',
      title: 'Loan Advisor Chatbot',
      description: 'Intelligent chatbot built with React + Node.js that matches users with top lenders based on ML scoring.',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'TypeScript', 'Docker'],
      highlights: ['ML-based matching', 'Explainable AI', 'Mobile responsive']
    },
    {
      id: 'collision-detection',
      title: 'Collision Detection & Prevention',
      description: 'Published IEEE research using YOLOv8 for real-time detection with night vision enhancement.',
      image: 'https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['YOLOv8', 'Computer Vision', 'IEEE Publication'],
      highlights: ['Real-time detection', 'Night vision', 'Safety systems']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production-ready AI solutions that make a real impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/50 rounded-xl overflow-hidden hover:bg-gray-900/70 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  View Details
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;