import React from 'react';
import Card from '../Card';
import SafeZone from "../images/SafeZone.png"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Flights Tonight",
      img: 'data:image/jpeg;base64,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',
      linkAddress: 'https://elangworth.github.io/camps-a-lot/',
    },
    {
      id: 2,
      title: "Media Map",
      img: 'https://i.imgur.com/cTtucwK.png',
      linkAddress: 'https://stream-team.herokuapp.com/',
    },
    {
      id: 3,
      title: "SafeZone",
      img: SafeZone,
      linkAddress: 'https://safezone.herokuapp.com/',
    }
  ];



  return (
    <div>
      <section className="hero-area bg-main">
        <div className="position-relative">
          <div className="container">
            <div className="row vh-50 align-items-center">
              <div className="col-lg-11 mx-auto">
                <h1 id="welcome-text" className="text-gray display-4">
                  Projects
                </h1>
              </div>
            </div>
          </div>
          <div className="plant-static-left"></div>
          <div className="plant-static-right"></div>
        </div>
      </section>
      <section className="section bg-main" >
        <div className='container'>
          {projects.map(project => (
            <Card key={project.id} heading={project.title}>
              <a href={project.linkAddress}><img className='image' src={project.img} alt={project.title}></img></a>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
