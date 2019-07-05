import React, { Component } from 'react';


class Result extends Component {

    setStyle(){
        return {
            color : this.props.p_Color,
            borderColor : this.props.p_Color,
            fontSize : this.props.p_fontSize
        }
        
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : {this.props.p_Color} - Fontsize : {this.props.p_fontSize}px</p>
                <div id="content" style={this.setStyle()}>
                    Content setting
                </div>
            </div>

        );
    }
}

export default Result;
