import React from 'react';
import image1 from '../../../netlix-chill.png'
import image2 from '../../../community-builders.png'
import image3 from '../../../lifetimes.png'
import github from '../../../github-icon.png'
import "./style.css"

export default function Projects() {
  return (
    <div>
      <div id="projects-page-title-wrapper">
        <h1 className="project-welcome"> Projects</h1>
      </div>
      <div className="projects-cointainer">
        <div className="project-cointainer">
          <a href="https://cassieellaelaine.github.io/Netflix-and-Chill-Generator" target="_blank" rel="noreferrer"><img className="project-img" src={image1} alt="Website preview for tv show finder"></img></a>
          <h2 className="project-title"> TV Show Finder </h2>
          <div className="project1-description"> <p className="project-text"> The website is a TV show recommendation curator designed to enhance users' entertainment experiences. Users can simply visit the website and, with a few clicks, generate highly rated handpicked TV show suggestions. The watchlist serves as a curated library where users can track every TV show they want to watch.  </p> </div>
          <a href="https://github.com/Cassieellaelaine/Netflix-and-Chill-Generator" target="_blank" rel="noreferrer"><img className="github-logo" src={github} alt="Github logo to visit Github repo for this project"></img></a>
        </div>
        <div className="project-cointainer">
          <a href="https://pacific-wildwood-17680-8e953e055e35.herokuapp.com" target="_blank" rel="noreferrer"><img className="project-img" src={image2} alt="Website preview for tv show finder"></img></a>
          <h2 className="project-title"> Community Builders </h2>
          <div className="project2-description"> <p className="project-text"> This application provides organizations with a seamless solution to post and promote their volunteering opportunities, reaching a vast network of dedicated individuals ready to lend a helping hand. Community Builders enables volunteers to discover and register for events that align with their interests and schedule. </p> </div>
          <a href="https://github.com/Anthonycodinach/Volunteer-Event-Tracker" target="_blank" rel="noreferrer"><img className="github-logo" src={github} alt="Github logo to visit Github repo for this project"></img></a>
        </div>
        <div className="project-cointainer">
          <a href="https://lifetimes-trip-planner-e4ba065bd3bc.herokuapp.com/" target="_blank" rel="noreferrer"><img className="project-img" src={image3} alt="Website preview for tv show finder"></img> </a>
          <h2 className="project-title"> Lifetimes </h2>
          <div className="project3-description"> <p className="project-text"> Our user-friendly platform simplifies the entire planning process, allowing you to create a personalized digital trip itinerary that's organized, easy to use and has every aspect of travel booking all in one place. With us, you can effortlessly plan multiple trips & curate unforgettable activities and experiences.</p> </div>
          <a href="https://github.com/Anthonycodinach/Vacation-Itinerary-Planner" target="_blank" rel="noreferrer"><img className="github-logo" src={github} alt="Github logo to visit Github repo for this project"></img></a>
        </div>
      </div>

    </div>
  );
}
