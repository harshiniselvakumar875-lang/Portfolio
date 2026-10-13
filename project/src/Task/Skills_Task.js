
import React from "react";

function Skills_Task() {
  const skills = [
    { name: "HTML", level: "(Learning)" },
    { name: "CSS", level: "(Learning)" },
    { name: "JavaScript", level: "(Learning)" },
    { name: "React", level: "(Learning)" },
    { name: "Python", level: "(Basics)" },
    { name: "Java", level: "(Basics)" }
  ];

  return (
        <>
      <h1 >WHAT I AM LEARNING</h1>
      <h3>My Skills</h3>

      <div className="skill">
        {skills.map((skill, index) => (
          <div key={skill.name}>
            <h2>{skill.name}</h2>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills_Task;
