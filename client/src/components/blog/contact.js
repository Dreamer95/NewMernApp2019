import React, {Component} from 'react';

class Contact extends Component {
    render(){
        return(
            <div className="section" id="contact">
            <div className="container">
                <div className="col-md-12">
                    <h4>04</h4>
                    <h1 className="size-50">Contact  Me</h1>
                    <div className="h-50"></div>
                </div>
                <div className="col-md-6" data-aos="fade-up">    
                    <h3>Phone Number : <span>0908236123</span> </h3> 
                    <h3>Email : <span>dongdn195@gmail.com</span></h3>    
                    <h3>Social Network</h3>    
                    <ul className="social">
                        <li><a href="https://www.facebook.com/Ngoc.Dong.195"><i className="ion-social-facebook"></i></a></li>
                        <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                        <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                    </ul>
                    <div className="clearfix"></div>
                    <div className="h-50"></div>
                </div>
                <div className="col-md-6" data-aos="fade-up">
                    <img src="img/footer.jpg" className="img-rounded img-responsive" alt="img footer"></img>   
                </div>               
            </div>
        </div>
    )}
}

export default Contact;