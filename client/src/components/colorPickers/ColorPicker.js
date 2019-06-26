import React, { Component } from 'react';


class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors : ['red']
        };
    
    }
    
    componentWillReceiveProps(nextprops){
        
        if(nextprops && nextprops.colors){
            this.setState({
                colors : nextprops.colors
            })
        }
    }

    showColor(param){
        return {
            backgroundColor : param
        }
    }

    setActiveColor(param) {
        //console.log(param);
        this.props.onReceiveColor(param);
    }
    render() { 
        var elmColors = this.state.colors.map((color, index)=>{
            return  <span 
                            key={index} 
                            style={this.showColor(color.colorName)}
                            className={this.props.p_Color === color.colorName ? 'active-color' : ''}
                            //C1:  onClick = {this.setActiveColor.bind(this,color)}
                            onClick = { () => this.setActiveColor(color.colorName)} // C2
                    >
                    </span>
        })       
        return (

            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">ColorPicker</h3>
                </div>
                <div className="panel-body">
                        {elmColors}
                </div>
            </div>
        );
    }
}

export default ColorPicker;
