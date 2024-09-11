import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const SocialHandles = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-6">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/its-kundan" // Replace with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition duration-300 transform hover:scale-110"
      >
        <FaLinkedin size={30} />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/its-kundan" // Replace with your GitHub URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition duration-300 transform hover:scale-110"
      >
        <FaGithub size={30} />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/kundan_k_" // Replace with your Twitter URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-500 transition duration-300 transform hover:scale-110"
      >
        <FaTwitter size={30} />
      </a>
    </div>
  );
};

export default SocialHandles;
