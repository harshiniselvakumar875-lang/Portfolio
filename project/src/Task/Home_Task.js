import React, { useState } from "react";
import { Routes, Route, Link } from "react-router";

import About_Task from "./About_Task";
import Skills_Task from "./Skills_Task";
import Projects_Task from "./Projects_Task";
import Contact_Task from "./Contact_Task";
import Login_Task from "./Login_Task";
import Accordian_Task from "./Accordian_Task";

import "./App.css";

function Home_Task() {
  const [user, setUser] = useState("Harshini S");

  const data = {
    name: "Harshini",
    username: "harshu",
    role: "Student",
    email: "harshiniselva87@gmail.com",
    location: "Rasipuram",
    college: "Muthayammal Engineering College",
    course: "B.E CSE - Cyber Security",
    about:
      "I am a student interested in full stack development and cybersecurity.",
    skills: ["Python", "Java", "React", "HTML", "CSS"],
    projects: [
      {
        title: "E-commerce Website",
        description: "An online shopping website built using React."
      },
      {
        title: "Netflix UI",
        description: "A movie and series streaming interface design."
      }
    ]
  };

  return (
    <div className="value">
      <header className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/accordion/faq">FAQ</Link>
          <Link to="/login">Login</Link>
        
      </header>

      <Routes>
        <Route
          path="/home"
          element={
            <div className="hm">
              <h1>WELCOME TO MY PORTFOLIO</h1>
              <h2> Hi, I'm {data.name} 👋</h2>
              <h3>Student || Full Stack Developer Enthusiast</h3>
              <h3> {data.about} </h3>
                <h3>{data.role}</h3>
                <h3>{data.college},{data.location}</h3>
              </div>
          }
        />

        <Route path="/about" element={<About_Task />} />
        <Route path="/skills" element={<Skills_Task />} />
        <Route path="/projects" element={<Projects_Task />} />
        <Route path="/contact" element={<Contact_Task />} />
        <Route path="/login" element={<Login_Task />} />
        <Route path="/accordion/faq" element={<Accordian_Task />} />
      </Routes>

      
    </div>
  );
}

export default Home_Task;

// import React, { useState } from 'react'
// import{Routes,Route,Link} from 'react-router'
// import Login_Task from './Login_Task'
// import About_Task from './About_Task'
// import Contact_Task from './Contact_Task'
// import Projects_Task from './Projects_Task'
// import Skills_Task from './Skills_Task'
// import Accordian_Task  from './Accordian_Task'
// import './App.css'

// function Home_Task() {
//   const[user,setuser]=useState("Harshini S");
//    const data=[
//     {
//       id:'19',
//       name:"Harshini",
//       username:'harshu',
//       Contact:'1234567892',
//       role:'Student',
//       email:'harshiniselva87@gmail.com',
//       skills:[{ language:'python'}],
//       location:'rasipuram',
//       about:'I am student in Muthayammal Engineering Clg',
//       projects:[{
//          title:'E-commerce',
//          description:'its looks like an online websites',
//       },{
//         title:'Netflix',
//         description:'we use to see movies and series'
//       }],
//       social:{
//         Insta_id:'@imperfect_.4',
//         Linkedin:'@harshiniselvakumar875-lang',

//       },
//       accordian:[{}],
//     }
//   ]


//   return (
//     <div className='style'>
      
//       <Link to='./home'>Home</Link><br/>
//         <Link to='./About'>About</Link><br/>
//        <Link to='./Skills'>Skills</Link><br/>
//         <Link to='./Project'>Project</Link><br/>
//         <Link to='./Contact'>Contact</Link><br/>
//         <Link to='./Login'>Login</Link><br/>
//         <Link to='./Accordian/FaQ'>Accordian</Link><br/>
      
//         <Routes>
//             <Route path='./home' element={<Home_Task/>}/>
//           <Route path='./About' element={<About_Task/>}/>
//           <Route path='./Skills' element={<Skills_Task/>}/>
//           <Route path='./Project' element={<Projects_Task/>}/>
//           <Route path='./Contact' element={<Contact_Task/>}/>
//             <Route path='./Login' element={<Login_Task/>}/>
//           <Route path='./Accordian/FaQ' element={<Accordian_Task/>}/>
//         </Routes>
        
//     </div>
//   )
//   // return(
//   //   <div>
//   //     <div>
//   //         <section>
//   //       <h1>Hello Everyone!!!</h1>
//   //       <h2>I am {user}</h2>
//   //       <p>AspiringFull Stack Developer</p>
//   //     </section>
//   //       </div>
//   //   </div>
//   // )
// }

// export default Home_Task


{/* <footer className="footer">
        <p>© 2026 Harshini | Built with React</p>
      </footer> */}