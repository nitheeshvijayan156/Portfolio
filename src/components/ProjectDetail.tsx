import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Database, Cpu, Cloud } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projectDetails = {
    zenso: {
      title: 'Zenso – Sign Language Translator',
      subtitle: 'Real-time AI mobile app to translate sign language to/from speech',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
      overview: 'Zenso is a cutting-edge mobile application that bridges communication gaps by providing real-time translation between sign language and speech. Built with advanced AI technologies, it features a sophisticated encoder-decoder Transformer architecture optimized for mobile deployment.',
      architecture: [
        {
          title: 'Multi-pathway Landmark Encoder',
          description: 'Point-wise, global, and regional encoding for comprehensive gesture understanding'
        },
        {
          title: 'Self-attention Mechanisms',
          description: 'Advanced attention layers with positional weighting and temporal modeling'
        },
        {
          title: 'Mixture-of-Experts Decoder',
          description: 'Diverse beam search with confidence-penalty loss optimization'
        },
        {
          title: 'AdamW + Learning Schedulers',
          description: 'Optimized training pipeline for robust model performance'
        }
      ],
      deployment: [
        {
          title: 'Unified .pkl SLT Asset',
          description: 'Complete model package including weights, vocabulary, and utilities'
        },
        {
          title: 'Dynamic S3 Integration',
          description: 'Automatic model fetching with SHA-256 hash verification'
        },
        {
          title: 'Thread-safe Model Loader',
          description: 'Live model swapping with rollback capabilities and SQL logging'
        },
        {
          title: 'Vocab Editor Tool',
          description: 'Real-time vocabulary updates without model retraining'
        }
      ],
      features: [
        'Real-time sign language recognition',
        'Speech-to-sign translation',
        'Mobile-optimized performance',
        'Offline capability',
        'User-generated dataset collection',
        'Continuous learning pipeline'
      ],
      technologies: ['PyTorch', 'Transformers', 'AWS S3', 'MySQL', 'Android', 'Python'],
      metrics: [
        { label: 'Accuracy', value: '94.2%' },
        { label: 'Latency', value: '<200ms' },
        { label: 'Model Size', value: '15MB' },
        { label: 'Supported Gestures', value: '500+' }
      ]
    },
    dms: {
      title: 'Document Management System (DMS)',
      subtitle: 'AI-based enterprise system to manage RFPs and bills',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200',
      overview: 'A comprehensive enterprise document management solution that leverages AI for intelligent document processing, categorization, and retrieval. The system combines OCR technology with advanced embeddings and vector databases for superior document understanding.',
      architecture: [
        {
          title: 'OCR Text Extraction',
          description: 'Advanced optical character recognition for accurate text extraction from various document formats'
        },
        {
          title: 'Embedding Generation',
          description: 'Semantic embeddings using state-of-the-art language models for document understanding'
        },
        {
          title: 'Vector Database',
          description: 'High-performance vector storage for similarity search and document retrieval'
        },
        {
          title: 'Smart Categorization',
          description: 'AI-powered automatic document classification and tagging'
        }
      ],
      deployment: [
        {
          title: 'MySQL Metadata Storage',
          description: 'Robust relational database for document metadata and user management'
        },
        {
          title: 'AWS Cloud Storage',
          description: 'Scalable document storage with high availability and security'
        },
        {
          title: 'Chatbot Interface',
          description: 'Natural language querying for intuitive document search'
        },
        {
          title: 'Analytics Dashboard',
          description: 'Comprehensive insights into document usage and patterns'
        }
      ],
      features: [
        'Intelligent document categorization',
        'Natural language querying',
        'Advanced search capabilities',
        'Document versioning',
        'User access controls',
        'Audit trails and compliance'
      ],
      technologies: ['Python', 'OCR', 'Vector DB', 'MySQL', 'AWS', 'NLP'],
      metrics: [
        { label: 'Processing Speed', value: '25% faster' },
        { label: 'Accuracy', value: '96.8%' },
        { label: 'Documents Processed', value: '10K+' },
        { label: 'User Satisfaction', value: '4.8/5' }
      ]
    },
    'loan-advisor': {
      title: 'Loan Advisor Chatbot',
      subtitle: 'Intelligent chatbot for personalized loan recommendations',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=1200',
      overview: 'An intelligent conversational AI system that helps users find the best loan options based on their financial profile. Built with modern web technologies and advanced ML algorithms for accurate lender matching.',
      architecture: [
        {
          title: 'Conversational Interface',
          description: 'Natural language processing for seamless user interaction and data collection'
        },
        {
          title: 'ML Scoring Engine',
          description: 'Advanced machine learning model for lender-borrower compatibility scoring'
        },
        {
          title: 'Explainable AI',
          description: 'Transparent recommendation explanations for user trust and understanding'
        },
        {
          title: 'Rule-based Fallback',
          description: 'Robust fallback system ensuring reliable recommendations in edge cases'
        }
      ],
      deployment: [
        {
          title: 'React Frontend',
          description: 'Modern, responsive user interface built with React and TypeScript'
        },
        {
          title: 'Node.js Backend',
          description: 'Scalable server architecture with RESTful API design'
        },
        {
          title: 'Docker Containerization',
          description: 'Containerized deployment for consistent environments and easy scaling'
        },
        {
          title: 'Mobile Responsive',
          description: 'Optimized experience across all device types and screen sizes'
        }
      ],
      features: [
        'Interactive chat interface',
        'Real-time loan matching',
        'Personalized recommendations',
        'Financial profile analysis',
        'Lender comparison tools',
        'Application tracking'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'Docker', 'ML', 'NLP'],
      metrics: [
        { label: 'Match Accuracy', value: '92.5%' },
        { label: 'Response Time', value: '<2s' },
        { label: 'User Engagement', value: '85%' },
        { label: 'Conversion Rate', value: '34%' }
      ]
    },
    'collision-detection': {
      title: 'Collision Detection & Prevention',
      subtitle: 'IEEE published research on real-time vehicle safety systems',
      image: 'https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&w=1200',
      overview: 'A groundbreaking research project published in IEEE TQCEBT 2024, focusing on real-time collision detection and prevention using advanced computer vision techniques. The system enhances vehicle safety through intelligent object detection and night vision capabilities.',
      architecture: [
        {
          title: 'YOLOv8 Detection',
          description: 'State-of-the-art object detection for persons, bikes, trucks, and other vehicles'
        },
        {
          title: 'Night Vision Enhancement',
          description: 'Advanced image processing for low-light pedestrian detection'
        },
        {
          title: 'Real-time Processing',
          description: 'Optimized inference pipeline for immediate threat detection'
        },
        {
          title: 'Prevention Logic',
          description: 'Intelligent decision-making system for collision avoidance'
        }
      ],
      deployment: [
        {
          title: 'Dash Cam Integration',
          description: 'Seamless integration with vehicle camera systems for real-time monitoring'
        },
        {
          title: 'Edge Computing',
          description: 'On-device processing for minimal latency and reliable operation'
        },
        {
          title: 'Alert Systems',
          description: 'Multi-modal warning system including visual, audio, and haptic feedback'
        },
        {
          title: 'Data Logging',
          description: 'Comprehensive event logging for analysis and system improvement'
        }
      ],
      features: [
        'Multi-object detection',
        'Night vision capabilities',
        'Real-time alerts',
        'Collision prediction',
        'Driver assistance',
        'Safety analytics'
      ],
      technologies: ['YOLOv8', 'Computer Vision', 'OpenCV', 'Python', 'Edge AI'],
      metrics: [
        { label: 'Detection Accuracy', value: '97.3%' },
        { label: 'Processing Speed', value: '30 FPS' },
        { label: 'Night Accuracy', value: '89.1%' },
        { label: 'False Positives', value: '<2%' }
      ]
    }
  };

  const project = projectDetails[id as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 transition-colors duration-200"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl text-gray-300">{project.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{project.overview}</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {project.metrics.map((metric, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">{metric.value}</div>
              <div className="text-gray-300">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Architecture & Deployment */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Cpu className="text-blue-400 mr-3" size={32} />
              Architecture
            </h2>
            <div className="space-y-6">
              {project.architecture.map((item, index) => (
                <div key={index} className="bg-gray-900/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Cloud className="text-green-400 mr-3" size={32} />
              Deployment
            </h2>
            <div className="space-y-6">
              {project.deployment.map((item, index) => (
                <div key={index} className="bg-gray-900/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features & Technologies */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="space-y-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;