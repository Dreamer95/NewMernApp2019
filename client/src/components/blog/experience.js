import React, { Component } from 'react';

class Experience extends Component {
        constructor(props) {
            super(props);
            this.state = {
                exp : [
                    {
                        Id : 3,
                        Time : "May 2019 - Present",
                        Company : "Freelancer",
                        Job : "Research Single Page Application",
                        Summary : "Design MERN stack application",
                        Desc : "Learning Nodejs, Python basic, MongoDB, Reactjs, HTML5, CSS3, ECMAScript 6 ..."
                    },
                    {
                        Id : 2,
                        Time : "Sept 2017 - Apr 2019",
                        Company : "Company 8 - Mobifone Corporation",
                        Job : "Employee",
                        Summary : "Data analysis",
                        Desc : "Make job PL/SQL Oracle to follow data in telecommunication ."
                    },                   
                    {
                        Id : 1,
                        Time : "Sept 2013 - Dec 2017",
                        Company : "University of Information Technology - HCMC",
                        Job : "Student",
                        Summary : "Learned & graduated at UIT",
                        Desc : "Subjects: C/C++, Java, C#, Data Structure, AI."
                    }                  
                ]
            }
        }

    showExp = (listExp) => {
        let result = null;
        if (listExp.length > 0){
            result = listExp.map((item,index)=>{
                return <li className="timeline-event" data-aos="fade-up" key={index}>
                                <label className="timeline-event-icon" />
                                <div className="timeline-event-copy">
                                    <p className="timeline-event-thumbnail">{item.Time}</p>
                                    <h3>{item.Company}</h3>
                                    <h4>{item.Job}</h4>
                                    <p><strong>{item.Summary}</strong>
                                        <br />{item.Desc}
                                    </p>
                                </div>
                        </li>
            })
        }

        return result;
    }    


    render() {
        return (
            <div className="section" id="experience">
                <div className="container">
                    <div className="col-md-12">
                        <h4>02</h4>
                        <h1 className="size-50">My <br /> Experience</h1>
                        <div className="h-50"></div>
                    </div>
                    <div className="col-md-12">
                        <ul className="timeline">
                            {this.showExp(this.state.exp)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experience;