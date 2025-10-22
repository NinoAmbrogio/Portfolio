import React from "react";
import ProjectCard from "../components/ProjectCard";
import cardtodo from "../assets/cardtodo.jpg"

const Projects = () => {

return (
    <>
    <section className=" py-16  min-h-[calc(100vh-72px)] bg-gray-400 ">
    <ProjectCard
    title= "ToDo App"
    description = "Un app react per gestire le attivita quiotidiane"
    image = {cardtodo}
    githubLink= "https://github.com/NinoAmbrogio/Portfolio"
    />
   </section>
    </>
)

}


export default Projects