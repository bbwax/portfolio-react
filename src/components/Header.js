import React from 'react';

function Header({ currentPage, handlePageChange }) {
    return (
        <header className="App-header">
            <h1 className="h1-header">Braxton Waxdeck</h1>
            <nav className='nav-bar'>
                <ul className='ul-header'>
                    <li className='li-header'>
                        <a
                            href="#about"
                            class= 'text-decoration-none a-header'
                            onClick={() => handlePageChange('About')}
                        >
                            About
                        </a>
                    </li>
                    <li className='li-header'>
                        <a
                            href="#projects"
                            class= 'text-decoration-none a-header'
                            onClick={() => handlePageChange('Projects')}
                        >
                            Projects
                        </a>
                    </li>
                    <li className='li-header'>
                        <a
                            href="#resume"
                            class= 'text-decoration-none a-header'
                            onClick={() => handlePageChange('Resume')}
                        >
                            Resume
                        </a>
                    </li>
                    <li className='li-header '>
                        <a
                            id='contact-tag'
                            href="#contact"
                            class= 'text-decoration-none a-header'
                            onClick={() => handlePageChange('contact')}
                            >
                                Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;