import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            <header className="navbar-fixed-top">
            <nav className="container-fluid">
                <div id="myNavbar" className="navbar-collapse" aria-expanded="false">
                    <ul className="navber-nav menu-blur">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">experience</a></li>
                        <li><a href="#projects">projects</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </div>                
            </nav>
            </header>
        )
    }
}

export default Navigation;