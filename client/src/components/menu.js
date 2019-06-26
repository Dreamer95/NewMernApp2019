import React, { Component } from 'react';
import MyLink from './../customLink/myLink';

const menus = [
    {
        name: "Home",
        to: "/",
        exact: true
    },
    {
        name: "Applications",
        to: "/motel",
        exact: false
    },
    {
        name: "About Me",
        to: "/about",
        exact: false
    },
    {
        name :"Color Picker",
        to : "/mycolor",
        exact: false
    }    
]


class Menu extends Component {

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MyLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }

    render() {
        return (
            <header className="site-header">
                <div className="top-header-bar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 flex align-items-center">
                                <div className="header-bar-text d-none d-lg-block">
                                    <p>Welcome</p>
                                </div>{/* .header-bar-text */}
                            </div>{/* .col */}
                            <div className="col-12 col-lg-6 flex justify-content-between justify-content-lg-end align-items-center">
                                <div className="header-bar-social d-none d-md-block">
                                    <ul className="flex align-items-center">
                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                                    </ul>
                                </div>{/* .header-bar-social */}
                                <div className="header-bar-search d-none d-md-block">
                                    <form>
                                        <input type="search" placeholder="Search" />
                                    </form>
                                </div>{/* .header-bar-search */}
                            </div>{/* .col */}
                        </div>{/* .row */}
                    </div>{/* .container-fluid */}
                </div>{/* .top-header-bar */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="site-branding flex flex-column align-items-center">
                                <h1 className="site-title"><a href="index.html" rel="home">Zero</a></h1>
                                <p className="site-description">Personal Blog</p>
                            </div>{/* .site-branding */}

                            <nav className="site-navigation">
                                <ul className="flex-lg flex-lg-row justify-content-lg-center align-content-lg-center">
                                    {this.showMenus(menus)}
                                </ul>
                            </nav>{/* .site-navigation */}


                        </div>{/* .col */}
                    </div>{/* .row */}
                </div>{/* .container */}
            </header>
        );
    }
}

export default Menu;
