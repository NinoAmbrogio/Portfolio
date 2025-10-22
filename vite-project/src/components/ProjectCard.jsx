import React from "react";

const ProjectCard = ({ title, description, image, githubLink }) => {
  return (
    <div className="flex flex-col items-center text-center border-2 border-gray-600 rounded-2xl w-1/4 m-10 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full w-full"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col flex-grow justify-between">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm ">{description}</p>
        </div>
      </a>
    </div>
  );
};



export default ProjectCard;
