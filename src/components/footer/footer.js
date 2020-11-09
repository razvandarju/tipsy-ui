import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {


    return (
        <div className="footer-container">
            <Nav.Item key="aboutUs">
                <Nav.Link as={Link} to="/about" >
                    <span>About</span>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item key="contact">
                <Nav.Link as={Link} to="/contact" >
                    <span>Contact</span>
                </Nav.Link>
            </Nav.Item>

        </div>
    )
}

export default Footer;