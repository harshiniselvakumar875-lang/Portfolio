
import React from "react";

function Projects_Task() {
  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A shopping website interface with product cards and navigation.",
      tech: "(React, CSS)"
    },
    {
      title: "Netflix UI",
      description:
        "A streaming-platform-inspired interface for movies and series.",
      tech: "(React, CSS)"
    },
    {
      title: "Student Management",
      description:
        "A basic application to add and display student details.",
      tech: "(React, JavaScript)"
    }
  ];

  return (
    <div >
      <h1 >SOME THINGS I HAVE WORKED ON 🚀</h1>
      <h2>My Projects</h2>

      
        {projects.map((project) => (
          <div className="pro">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.tech}</p>
          </div>
        ))}
      </div>
  );
}

export default Projects_Task;
