import React from 'react';
import { Code, Brain, Wrench, BarChart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className="text-blue-400" size={32} />,
      skills: ['Python', 'SQL', 'Java', 'HTML/CSS'],
      color: 'blue'
    },
    {
      title: 'ML/AI',
      icon: <Brain className="text-green-400" size={32} />,
      skills: ['PyTorch', 'Transformers', 'Scikit-learn', 'OpenCV', 'OCR', 'LLMs', 'RAG'],
      color: 'green'
    },
    {
      title: 'Tools',
      icon: <Wrench className="text-purple-400" size={32} />,
      skills: ['Docker', 'GitHub', 'AWS S3', 'MySQL'],
      color: 'purple'
    },
    {
      title: 'Other',
      icon: <BarChart className="text-orange-400" size={32} />,
      skills: ['MLOps', 'Model Deployment', 'Data Pipelines', 'Power BI'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-400/20 hover:border-blue-400/40',
      green: 'border-green-400/20 hover:border-green-400/40',
      purple: 'border-purple-400/20 hover:border-purple-400/40',
      orange: 'border-orange-400/20 hover:border-orange-400/40'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise across the AI/ML technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 p-6 rounded-xl border-2 ${getColorClasses(category.color)} transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-800/50 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;