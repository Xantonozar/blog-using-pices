"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div className="bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground">
      {/* Hero Section */}
      <section className="hero-section py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-r dark:bg-gradient-to-r-dark">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg dark:drop-shadow-dark-lg">About Coding</h1>
          <p className="text-xl md:text-2xl mb-10 drop-shadow-md dark:drop-shadow-dark-md">
            Dive into the world of coding, explore our journey, and meet the minds behind our projects.
          </p>
        </div>
      </section>

      {/* Projects Showcase Section */}
<section className="showcase-section py-20 px-4 md:px-8 lg:px-16">
  <div className="container mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {/* Project Card 1 */}
      <motion.div
        className="project-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-dark-lg"
        whileHover={{ scale: 1.05, borderColor: '#9370DB' }}
        transition={{ duration: 0.3 }}
        style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}
      >
        <motion.img
          src="https://media.licdn.com/dms/image/C4D12AQFKlRdSpv8M8g/article-cover_image-shrink_600_2000/0/1653218685163?e=2147483647&v=beta&t=q3B958IcOpVvr7Vu8z4ob_hbSooxmvJWVRjQ25d2Kxc"
          alt="Project 1"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">Project One</h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            A brief description of Project One showcasing its features and impact.
          </p>
        </div>
      </motion.div>

      {/* Project Card 2 */}
      <motion.div
        className="project-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-dark-lg"
        whileHover={{ scale: 1.05, borderColor: '#9370DB' }}
        transition={{ duration: 0.3 }}
        style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}
      >
        <motion.img
          src="https://www.springboard.com/blog/wp-content/uploads/2022/03/what-is-a-coding-project.png"
          alt="Project 2"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">Project Two</h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            A brief description of Project Two showcasing its features and impact.
          </p>
        </div>
      </motion.div>

      {/* Project Card 3 */}
      <motion.div
        className="project-card bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg dark:shadow-dark-lg"
        whileHover={{ scale: 1.05, borderColor: '#9370DB' }}
        transition={{ duration: 0.3 }}
        style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}
      >
        <motion.img
          src="https://www.springboard.com/blog/wp-content/uploads/2022/03/p2p-file-sharing-app.png"
          alt="Project 3"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">Project Three</h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300">
            A brief description of Project Three showcasing its features and impact.
          </p>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default Page;
