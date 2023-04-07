import React from 'react';
import Card from '../Card';

export default function About() {
  return (
    <div>
      <Card heading='About'>
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

        I am a creative problem solver who enjoys working collaborativeley. I am passionate about delivering
        high-quality code that meets the needs of clients and users.
        `}
      </p>
      </Card>
    </div>
  );
}