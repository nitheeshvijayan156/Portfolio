import React from 'react';
import { Code, Database, Wrench, BarChart } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'blue',
      skills: ['Python', 'SQL', 'Java (Basic)', 'R (Basic)', 'HTML/CSS (Basic)']
    },
    {
      title: 'ML/AI Frameworks',
      icon: BarChart,
      color: 'purple',
      skills: ['PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'Transformers', 'LLMs', 'RAG']
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'green',
      skills: ['Power BI', 'GitHub', 'Linux', 'Google Analytics GA4', 'Docker', 'AWS']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'orange',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Vector Databases']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconBgClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100',
      purple: 'bg-purple-100',
      green: 'bg-green-100',
      orange: 'bg-orange-100'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getIconColorClasses = (color: string) => {
    const colorMap = {
      blue: 'text-blue-600',
      purple: 'text-purple-600',
      green: 'text-green-600',
      orange: 'text-orange-600'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-violet-100 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-12 h-12 ${getIconBgClasses(category.color)} rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className={`w-6 h-6 ${getIconColorClasses(category.color)}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`inline-block px-3 py-1 text-sm font-medium rounded-full border ${getColorClasses(category.color)} mr-2 mb-2`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Specializations</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Artificial Intelligence</h4>
              <p className="text-slate-600 text-sm">Deep learning, neural networks, computer vision, and NLP</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">ML</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Machine Learning</h4>
              <p className="text-slate-600 text-sm">Supervised learning, unsupervised learning, and reinforcement learning</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Data Science</h4>
              <p className="text-slate-600 text-sm">Statistical analysis, data visualization, and predictive modeling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;