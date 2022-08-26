import React from 'react'
import "../styles/Projects.css"
import imgGym from "../styles/Img/project gym.png"

export default function Projects() {
  return (
    <div id="projects" class="projects">
    <h2 class="project-title">Projects</h2>
    <section class="Project">
        <header class="header-project">FitSpace</header>
          <div className='container'>
            <img src={imgGym}/>
          </div>
        <a href="https://fitspace-stay-fit-my-friends.herokuapp.com/">FitSpace</a>
          <p>The purpose of our website is to provide the most unique experience to our users, and to make a workout more simple, functional, and fun. We offer a big amount of possible exercise and routines for every day, the possibility to check your account, and also search, find and practice the new routines that we provide.</p>
    </section>

    <section class="Project">
        <header class="header-project">Projects 2</header>
        {/* <img src="./css/Img/boombox.svg" alt="icon" height="100" width="100"> */}
          <p>Lorem ipsum dolor sit amet consectetur</p>
    </section>

    <section class="Project">
        <header class="header-project">Projects 3</header>
        {/* <img src="./css/Img/boombox.svg" alt="icon" height="100" width="100"> */}
          <p>Lorem ipsum dolor sit amet consectetur</p>
    </section>

    <section class="Project">
        <header class="header-project">Projects 4</header>
        {/* <img src="./css/Img/boombox.svg" alt="icon" height="100" width="100"> */}
          <p>Lorem ipsum dolor sit amet consectetur</p>
    </section>

    <section class="Project">
        <header class="header-project">Coming up</header>
        {/* <img src="./css/Img/IMG_pig" alt="coming" height="100" width="100"> */}
          <p>Lorem ipsum dolor sit amet consectetur</p>
    </section>

</div>
  )
}
