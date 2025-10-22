import React from "react";
import ProjectCard from "../components/ProjectCard";
import preview from "../assets/portfolioImg.png";

const Projects = () => {
  return (
    <section className="py-10 min-h-[calc(100vh-72px)] bg-gradient-to-b from-[#0b0f13] to-[#1f242b] text-white flex">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">
          🚀 I Miei Progetti
        </h2>

        <ProjectCard previewImage={preview} />
         
      </div>
    </section>
  );
};

export default Projects;