import React from 'react';


export default function About() {
  return (
    <div>
      <section className="hero-area bg-main">
        <div className="position-relative">
          <div className="container">
            <div className="row vh-50 align-items-center">
              <div className="col-lg-11 mx-auto">
                <h1 id="welcome-text" className="text-gray display-4">
                  About Me
                </h1>
              </div>
            </div>
          </div>
          <div className="plant-static-left"></div>
          <div className="plant-static-right"></div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
            <p>
              {`
              Hello, I'm Braxton, a software developer with a passion for computer science
              and applying it to real-world problems. My journey started when I completed the
              UC Berleley Software Developer Bootcamp where I gained real world application of 
              various technologies and programming languages.

              My skills include data structures, browser-based technologies, HTML/CSS, Javascript/jQuery, 
              responsive design, Bootstrap. 
              
              I also have experience with local storage, session storage, IndexedDB,
              React.js, MySQL, MongoDB, server-side development, user authentication, and the MERN stack
              (MongoDB, Express.js, React.js, Node.js). 

              Additionally I have knowledge of API design, client-server models, REST, JSON, AJAX (Fetch API),
              HTTP request methods, GraphQL, deployment and delivery, Heroku, Git, Github Pages, shell scripting,
              unit testing, and continuous integration.

              I am a creative problem solver who enjoys working collaboratively. I am passionate about delivering
              high-quality code that meets the needs of clients and users.
        `}
            </p>
        </div>
      </section>
    </div>
  );
}