import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
        <div className="section" id="home" data-stellar-background-ratio="0.5">
            <div className="container-fluid">
                <div className="disply-table">
                    <div className="table-cell" data-aos="fade-up" data-aos-delay="0.7"  data-aos-easing="ease-in-out">
                        <h4 id="name">Personal Blog</h4>                        
                        <h1 id="quotes"> "Everyday life is like programming, I guess.  
                        <br /> If you love something you can put beauty into it."</h1> 
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Header;