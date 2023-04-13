import React, {useState, useEffect} from 'react';
import initials from "../components/images/BW.png";

function Header({ currentPage, handlePageChange }) {
    const [shrink, setShrink] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (show) {
                setShrink(true);
            } else {
                setShrink(false);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="App-header">
            <nav className={`navbar navbar-expand-lg bg-main fixed-top navbar-light ${shrink ? 'shrink' : ''}`}>

                <div className="container ">
                    <a className="navbar-brand font-tertiary h3" href="index.html">
                        <img id="initials" src={initials} alt="BW" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a
                                    href="#home"
                                    className="nav-link text-decoration-none"
                                    onClick={() => handlePageChange('Home')}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#about"
                                    className="nav-link text-decoration-none"
                                    onClick={() => handlePageChange('About')}
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#projects"
                                    className="nav-link text-decoration-none"
                                    onClick={() => handlePageChange('Projects')}
                                >
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#resume"
                                    className="nav-link text-decoration-none"
                                    onClick={() => handlePageChange('Resume')}
                                >
                                    Resume
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    id="contact-link"
                                    href="#contact"
                                    className="nav-link text-decoration-none"
                                    onClick={() => handlePageChange('contact')}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;