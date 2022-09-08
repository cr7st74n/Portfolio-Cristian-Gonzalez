import React from 'react'
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
import {FaMailBulk} from "@react-icons/all-files/fa/FaMailBulk";
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'> 
      <a href="https://www.linkedin.com/in/cristian-gonzalez-romero-7566571b0/"><FaLinkedin /></a>
      <a href="https://github.com/cr7st74n"><FaGithub/></a>
      <a href="#"><FaMailBulk/></a>
      </div>
      <p> &copy; 2022 All rights reserved</p>
    </div>
  )
}

// <div id="contact-us" clase="contact-us">
// <h2>Contact us</h2>
// <ul>
//     <li>Email:</li>
//     <a href="#">cris-082011@hotmail.com</a>
//     <li>Linkedin:</li>
//     <a href="https://www.linkedin.com/in/cristian-gonzalez-romero-7566571b0/">Cristia Gonzalez Romero</a>
//     <li>GitHub:</li>
//     <a href="https://github.com/cr7st74n">cr7st74n</a>
// </ul>
// </div>
// </main>
// <footer>
// <p>All rights reserved </p>
// <h3>We will contact you !</h3>
// </footer>