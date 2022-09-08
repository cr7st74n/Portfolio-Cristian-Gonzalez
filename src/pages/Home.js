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
                <p>I am an Ecuadorian immigrant that come to United States to study and work with technology and investigation in different fields to help and improve the human life, it could be in several ways such as in Medicine, or even working in other areas including technology as the main idea for all my objectives and goals. </p>

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
    </div>
    
    </div>
  )
}
