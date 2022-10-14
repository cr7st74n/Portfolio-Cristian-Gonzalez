import React from 'react';
import "../styles/Projects.css";
import imgGym from "../styles/Img/FitSpaceG.gif";
import imgBu from "../styles/Img/SuperStockMagic.gif";
import imgWeather from "../styles/Img/WeatherD.gif";
import imgSNApi from "../styles/Img/APIDev_SN.png";

export default function Projects() {
  return (
    <div id="projects" class="projects">
    <h2 class="project-title">Projects</h2>
    <section class="Project">
        <header class="header-project">Project FitSpace</header>
          <div className='container'>
            <img src={imgGym}/>
          </div>
        <a className='linkPage' href="https://fitspace-stay-fit-my-friends.herokuapp.com/">Access here!</a>
          <p>The purpose of our website is to provide the most unique experience to our users, and to make a workout more simple, functional, and fun. We offer a big amount of possible exercise and routines for every day, the possibility to check your account, and also search, find and practice the new routines that we provide.</p>
          <a className='linkPage' href='https://github.com/infinity-machine/fitspace'>GitHub Page</a>
          <p>------------------------</p>
          <h3>Technical Details</h3>
          <p>● Role: Front-end, UX designer</p>
          <p>● Tools: HTML, CSS, JavaScript, SQL, Express-Handlebars, FitnessAPI, Node, MVC.</p>
    </section>

    <section class="Project">
        <header class="header-project">Cobras Finances</header>
        <div className='container'>
          <img src={imgBu}/>
        </div>
        <a className='linkPage' href='https://troymnelson.github.io/superStockMagic/'>Access here!</a>
          <p>This is an awesome project that is going to help to calculate your budget.
          We are a team of learning developers in the UofM full stack development coding course.
          This project was created to provide a solution for experienced and new investors to have a place to get access to the latest stock news and market data from multiple sources.
          </p>
          <a className='linkPage' href='https://github.com/troymnelson/superStockMagic'>GitHub Page</a>
          <p>------------------------</p>
          <h3>Technical Details</h3>
          <p>● Role: Front-end, UX designer</p>
          <p>● Tools: HTML, CSS, JavaScript, Frameworks: Materialize, JQuery</p>
    </section>

    <section class="Project">
        <header class="header-project">Weather Dashboard</header>
        <div className='container'>
          <img src={imgWeather}/>
        </div>
        <a className='linkPage' href='https://cr7st74n.github.io/Weather-Dashboard/'>Access here!</a>
          <p>Web app to check the weather in diferent cities.
            This web-app will provide the most accurate information about the weather in different cities.
            This program is built for travelers that wanted to check for climate updates through our website.
            The real-time wheather updates that the news could not provide immediately as a website.
            The use of external API is essential for this project, how to request from important web weather sources.
            </p>
        <a className='linkPage' href='https://github.com/cr7st74n/Weather-Dashboard'>GitHub Page</a>
        <p>------------------------</p>
        <h3>Technical Details</h3>
          <p>● Role: Sole author</p>
          <p>● Tools: HTML, CSS, JavaScript,API</p>
    </section>

    <section class="Project">
        <header class="header-project">Api for Developers</header>
          <div className='container'>
            <img src={imgSNApi}/>
          </div>
          <p>This application will allow users can share their thoughts, react to friends’ thoughts, and create a friend list. All those functionalities that you love in one site. And the best part is that this is created by developers for developers.</p>
          <a className='linkPage' href='https://github.com/cr7st74n/SN_ApiForDevelopers'>GitHub Page</a>
          <p>------------------------</p>
          <p className='linkPage'> This project is and API that do not have an interface, It could be
          use to provide an structure for a future social networkd website.</p>
          <p>------------------------</p>
          <h3>Technical Details</h3>
          <p>● Role: Sole author</p>
          <p>● Tools: HTML, CSS, JavaScript.</p>
    </section>
</div>
  )
}
