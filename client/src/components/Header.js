import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Header() {
    return (
    <header>
        <h1>James_Young</h1>
        <nav>
            <ul>
        
                <li><Link to="/">About Me</Link></li>
           
                <li><Link to="/projects">Portfolio</Link></li>
               
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resumee">Resumee</Link></li>
            </ul>
        </nav>
    </header>
    );
}