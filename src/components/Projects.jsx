import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import projectData from '@/data/projects_data.json'; // Import data from data.json
import Image from 'next/image';

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 rounded-[10%] overflow-hidden m-6" // Added transform and transition effects
              style={{ aspectRatio: '1/1' }} // Maintained square aspect ratio
            >
              <div className="flex flex-col h-full">
                {/* Half Image */}
                <div className="relative h-1/2">
                  <Image
                    src={project.image} // Use image from data.json
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>

                {/* Half Content */}
                <div className="p-4 flex flex-col justify-between h-1/2">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-black">{project.name}</h2>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    {/* GitHub Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                      <FaGithub className="mr-2" />
                      GitHub
                    </a>

                    {/* Live Link */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                      <FiExternalLink className="mr-2" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
