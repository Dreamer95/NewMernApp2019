import React, { Component } from 'react';

class Preloader extends Component {
    render() {
        return (
            <div id = "preloader" >
                <div className="status">
                    <div className="preloader" aria-busy="true" 
                         aria-label="Loading, please wait." role="progressbar">
                    </div>
                </div>
            </div >
        )}
    }

export default Preloader;
