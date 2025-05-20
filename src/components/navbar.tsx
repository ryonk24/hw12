import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo">My Portfolio</h1>
                <ul className="nav-links">
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;