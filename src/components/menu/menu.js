import React from 'react';
import { menuData } from './menuData'
import { Nav } from 'react-bootstrap';
import './menu.css';
import { Link, useLocation } from "react-router-dom";

function Menu() {

    const location = useLocation();

    const entries = menuData.map((entry, index) => {
        return (
            <Nav.Item key={index} className={`${entry.cName} ${location.pathname === entry.path ? "active" : ""}`} >
                < Nav.Link as={Link} to={entry.path} >
                    {entry.icon}
                    <span> {entry.title} </span >
                </Nav.Link >
            </Nav.Item >)
    });

    return (
        <>
            <div className="nav-menu" >
                <Nav className="justify-content-center" >
                    {entries}
                </Nav>
            </div>
        </>
    );
}




export default Menu;