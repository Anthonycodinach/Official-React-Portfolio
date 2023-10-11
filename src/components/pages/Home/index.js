import React from 'react';
import logo from '../../../launch.png';
import "./style.css"

export default function Home({ currentPage, handlePageChange }) {
  return (
    <div className="body-cointainer">
      <div className="wrapper">
        <h1 className="welcomeText anim-typewriter"> Welcome. </h1>
      </div>
      <div id="textCointainer">
        <p>
          I'm <span style={{ color: '#C4391D' }}>Anthony Codinach</span>, a dynamic creative breaking into the
          ever-expanding tech space. The intersection between technology & creativity has always fascinated me.
        </p>{' '}
        <br/>
        <p>
          This portfolio is a love letter to my admiration for the past & future. Explore my catalog of the digital
          projects I've created during my journey into tech.
        </p>
      </div>

      <a
      href="#projects"
      onClick={() => handlePageChange('Projects')}
      // This is a conditional (ternary) operator that checks to see if the current page is "Home"
      // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
      className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
    >
       <img src={logo} alt="Click button" />
    </a>
    </div>
  );
}
