import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Left side - Animated Picture */}
        <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
          {/* Replace with your animated image */}
          <div className="relative w-64 h-64">
            <Image
              src="/kundan-portfolio/data/hero.jpg" // Replace with your image or animated gif
              alt="Animated"
              layout="fill" // Ensures image takes up the full width and height
              objectFit="cover" // Ensures the image covers the container (similar to background-size: cover)
              className="rounded-full animate-bounce"
            />
          </div>
        </div>

        {/* Right side - Text Content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            I&apos;m Kundan Kumar
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            A passionate full-stack developer and innovator, specializing in building high-quality web applications and solving complex problems using cutting-edge technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
