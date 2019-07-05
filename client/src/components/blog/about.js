import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="section" id="about">
                <div className="container">
                    <div className="col-md-6" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <h4>01</h4>
                        <h1 className="size-50">Know <br /> About me</h1>

                        <div className="h-50"></div>
                        <p>
                            Hi ! I'm Dong. I'm 24 years old. I graduated from University of Information Technology - VNUHCM.
                            My major is Computer Science.
                        </p>
                        <p>
                            I really like programing and I want to become a fullstack web developer.
                        </p>
                        <div className="h-50"></div>
                        <a href="img/NGO_1512.JPG"><img src="img/NGO_1512.JPG" width="500" className="thumbnail" alt=""/></a>
                        <div className="h-50"></div>
                    </div>
                    <div className="col-md-6 about-img-div">
                        <div className="about-border" data-aos="fade-up" data-aos-delay=".5"></div>
                        <img src="img/front.jpg" width="400" className="img-responsive" alt="" align="right" data-aos="fade-right" data-aos-delay="0" />
                    </div>
                </div>
            </div>
        )
    }
}

export default About;