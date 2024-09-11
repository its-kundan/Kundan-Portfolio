import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/30 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            Kundan
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            
              <a
                href="#about"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                Skills
              </a>
              <a
                href="#hackathon"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                Hackathon
              </a>
              <a
                href="blogs"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                Blogs
              </a>
              <a
                href="profiles"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                Profiles
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
              >
                Contact
              </a>
              <div className="ml-10 flex items-baseline space-x-4">
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
