import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-gray-400">Built with</span>
            <Heart className="text-red-400 mx-2" size={16} />
            <span className="text-gray-400">and</span>
            <Code className="text-blue-400 mx-2" size={16} />
            <span className="text-gray-400">by Nitheesh Vijayan</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Nitheesh Vijayan. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;