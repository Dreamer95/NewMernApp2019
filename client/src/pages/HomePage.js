import React, { Component } from 'react';
import Navigation from './../components/blog/navigation';
import About from './../components/blog/about';
import Header from './../components/blog/header';
import Experience from './../components/blog/experience';
import Project from './../components/blog/project';
import Contact from './../components/blog/contact';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navigation></Navigation>
                <Header></Header>
                <About></About>
                <Experience></Experience>
                <Project></Project>
                <Contact></Contact>
            </div>

        );
    }
}

export default HomePage;
