import React from 'react'
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaMailBulk} from "@react-icons/all-files/fa/FaMailBulk";
import "../styles/Home.css";
import imgCris from "../styles/Img/img-aside.png";

export default function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <div className='container'>
                    <img src={imgCris}/>
            </div>
            <h2>My name is Cristian Gonzalez</h2>
            <div className='prompt'>
                <p>My name is Cristian Gonzalez, I am a Full stack web developer with passion in UI/UX design. Recently earned a certificate in full stack development from the University of Minnesota Coding bootcamp, with experience in cooperative work to develop competitive and responsible projects. The most important skills are HTML, CSS, JavaScript, React.js, Node.js, and MySQL. Known for the attention in every detail and always committed to work and improve in every part of my project. I applied all the abilities that I have to build a web-app with the latest technologies. I worked with a team of 4 to develop a single-page MERN app that provides the most accurate information about how to adjust your budget and save money based on the information provided by the user. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web.</p>

            </div>
        <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, BootStrap, Materialize.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS ExpressJS, ApolloServer,
              MySQL, MongoDB.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#</span>
          </li>
        </ol>
      </div>
      <div className='Resume'>
        <a className='res' href="https://docs.google.com/document/d/1NrXpjE3ihwOpx1EHgfWhnRPKHUsNSPJAX54KD2dRaMA/view?usp=sharing">Resume</a>
      </div>
    </div>
    
    </div>
  )
}
