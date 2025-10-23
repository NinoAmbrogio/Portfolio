import React from "react";
import ProjectCard from "../components/ProjectCard";
import preview from "../assets/portfolioImg.png";

const Projects = () => {
  return (
    <section className="py-8 sm:py-10 lg:py-16 min-h-[calc(100vh-72px)] bg-gradient-to-b from-[#0b0f13] to-[#1f242b] text-white flex">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-100 mb-8 sm:mb-12 lg:mb-16">
          🚀 I Miei Progetti
        </h2>

        <div className="w-full">
          <ProjectCard previewImage={preview} />
        </div>
      </div>
    </section>
  );
};

export default Projects;