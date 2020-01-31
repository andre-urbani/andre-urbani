import React, { useState } from 'react';

const Home = () => {



  return <div>
    <div className='hero-container'>
      <div className="left-column">
        <div id="page-links">
          <a href="#tech-skills" className="effect-underline">Tech Skills</a>
          <a href="#portfolio" className="effect-underline">Portfolio</a>
          <a href="#educatiion" className="effect-underline">Education</a>
          <a href="#contact" className="effect-underline">Contact</a>
          
        </div>
        <div id="my-photo"></div>
        <div id="my-name">André Urbani</div>
        <div id="my-hobbies">Junior Web Developer | Traveler | Music Lover</div>
        <a href="https://github.com/andre-urbani" target="_blank"><div id="icon" class="devicon-github-plain-wordmark colored git"></div></a>
        
      </div>
      <div className="right-column">
        <div id="about-text">About Me</div>
        <hr></hr>
        <div id="about-me">Hi I'm André, hildshgidshglkds, hdisfhidsjf jilfsdjlff jildjfg dsjifjgg hjiljgdgw. gfhsljfhjs jjglsjgklg gjkljgkljgls,fsf. gyjghk ghh ghjg g ggh ghjkgjkgjk ghkgk ghkghkgj gfd gd f fyfjfg gjghk. gyufthdg gyuftyjguhl gyfj. ggkg hgkghff gff d gfyfj.</div>
      </div>
    </div>
    <div className="tech-skills-container" id="tech-skills">
      <div id="my-skills">Tech Skills</div>
      <div className="icon-container">
        <div className="first-row">
          <div id="icon" class="devicon-javascript-plain"></div>
          <div id="icon" class="devicon-css3-plain-wordmark colored"></div>
          <div id="icon" class="devicon-express-original"></div>
          <div id="icon" class="devicon-mongodb-plain-wordmark colored"></div>
          
        </div>
        <div className="second-row">
          <div id="icon" class="devicon-python-plain-wordmark"></div>
          <div id="icon" class="devicon-sass-original colored"></div>
          <div id="icon" class="devicon-babel-plain"></div>
          <div id="icon" class="devicon-postgresql-plain-wordmark colored"></div>
          <div id="icon" class="devicon-trello-plain-wordmark"></div>
        </div>
        <div className="third-row">
          <div id="icon" class="devicon-react-original-wordmark colored"></div>
          <div id="icon" class="devicon-nodejs-plain colored"></div>
          <div id="icon" class="devicon-webpack-plain-wordmark"></div>
          <div id="icon" class="devicon-git-plain-wordmark colored"></div>
          <div id="icon" class="devicon-heroku-plain-wordmark colored"></div>
        </div>
        <div className="fourth-row">
          <div id="icon" class="devicon-html5-plain-wordmark"></div>
          <div id="icon" class="devicon-django-plain"></div>
          <div id="icon" class="devicon-github-plain-wordmark colored"></div>
          <div id="icon" class="devicon-visualstudio-plain colored"></div>
          
        </div>
      </div>
    </div>

    <div className="projects-container"></div>
  </div>


}

export default Home