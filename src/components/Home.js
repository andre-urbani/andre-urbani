import React, { useState } from 'react';

const Home = () => {



  return <div>
    <div className='hero-container'>
      <div className="left-column">
        <div id="page-links">
          <a href="#tech-skills">Tech Skills</a>
          <div>Portfolio</div>
          <div>Education</div>
          <div>Contact</div>
        </div>
        <div id="my-photo"></div>
        <div id="my-name">André Urbani</div>
        <div id="my-hobbies">Web Developer | Traveler | Music Lover</div>
        <div id="icon" class="devicon-github-plain-wordmark colored git"></div>
        
      </div>
      <div className="right-column">
        <div>About</div>
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