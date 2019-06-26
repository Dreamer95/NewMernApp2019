import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="swiper-container hero-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="hero-content flex justify-content-center align-items-center flex-column">
                                        <img src="images/bg3.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            {/* Add Pagination */}
                            <div className="swiper-pagination" />

                        </div>{/* .swiper-container */}
                    </div>{/* .col */}
                </div>{/* .row */}
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-9 col-12 col-lg-3 col-md-5">
                            <a href="#">
                                <div className="yt-subscribe img-fluid">
                                    <img src="images/logo.png" alt="Youtube Subscribe" />
                                    <h3>Subscribe</h3>
                                    <p>To my Youtube Channel</p>
                                </div>{/* .yt-subscribe */}
                            </a>
                        </div>{/* .col */}
                    </div>{/* .row */}
                </div>{/* .container */}
            </div>

        );
    }
}

export default HomePage;
