import React from 'react';

export default function Home({ currentPage, handlePageChange }) {
    const goToAbout = () => {
        handlePageChange('About');
    };
    return (
        <div>
            <section className="hero-area bg-main">
                <div className="position-relative">
                    <div className="container">
                        <div className="row vh-100 align-items-center">
                            <div className="col-lg-11 mx-auto">
                                <h1 id="welcome-text" className="text-gray display-4">
                                    Welcome! I'm <br />
                                    Braxton Waxdeck <br />
                                    Software Engineer
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="plant-animation-left"></div>
                    <div className="plant-animation-right"></div>
                </div>
            </section>
            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-10 mx-auto text-center">
                            <p className="">
                            Hi, I'm Braxton, a skilled software developer with a 
                            background in computer science and civil engineering with a drive to solve real-world
                             problems. Trained at UC Berkeley's Software Developer Bootcamp,
                              I specialize in web technologies like HTML/CSS, JavaScript, 
                              React.js, and the MERN stack. My expertise extends to API design, 
                              data storage, user authentication, and deployment, while ensuring quality
                               code and client satisfaction. As a collaborative and creative problem solver,
                                I'm eager to bring my passion and skills to your next project.
                            </p>
                            <a
                                href="#about"
                                className="btn btn-info text-decoration-none"
                                onClick={goToAbout}
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );

}
