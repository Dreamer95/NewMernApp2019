import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {
    render(){
        return(
            <div className="section" id="projects">
            <div className="container">
                <div className="col-md-12 block">
                    <h4>03</h4>
                    <h1 className="size-50">Mini <br /> Projects</h1> 
                </div>               
                <div className="main-container portfolio-inner clearfix">                    
                    <div className="portfolio-div">                        
                        <div className="portfolio">
                            <div className="categories-grid wow fadeInLeft">
                                <nav className="categories">
                                    <ul className="portfolio_filter">
                                        <li><a href="#" className="active" data-filter="*">All</a></li>
                                        <li><a href="#" data-filter=".color">ColorPicker</a></li>
                                        <li><a href="#" data-filter=".shopping">ShoppingList</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="no-padding portfolio_container clearfix" data-aos="fade-up">                                
                                <div className="col-md-4 col-sm-6 color">                                    
                                    <Link  to="/mycolor" className="portfolio_item portfolio_item_hover"> 
                                        <img src="img/colorpicker.png" alt="img_logo" className="img-responsive img-border" /> 
                                        <div className="portfolio_item_hover">
                                            <div className="portfolio-border clearfix">
                                                <div className="item_info"> <span>ColorPicker</span> <em>MERN Stack App</em> </div>
                                            </div>
                                        </div>                                
                                    </Link>                                    
                                </div>

                                <div className="col-md-4 col-sm-6 shopping">                                    
                                    <Link  to="/product-list" className="portfolio_item portfolio_item_hover"> 
                                        <img src="img/shoppinglist.png" alt="img_logo" className="img-responsive img-border" /> 
                                        <div className="portfolio_item_hover">
                                            <div className="portfolio-border clearfix">
                                                <div className="item_info"> <span>ShoppingList</span> <em>MERN Stack App</em> </div>
                                            </div>
                                        </div>                                
                                    </Link>                                    
                                </div>                                                 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Project;