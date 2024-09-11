import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Links */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Follow Me</h2>
          <div className="flex space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/kundan-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/kundan-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com/kundan_kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com/kundan.kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Kundan Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
