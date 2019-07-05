import React, { Component } from 'react';

class AddColor extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id : null,
            colorName : '#000000'        
        }
    }
    
    onChange = (e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
                [name] : value                      
        })
    }

    onSave = (colorName,id) => { 
        if(id){
            let color = {
                id : id,
                colorName : colorName
            }
            this.props.onUpdateColor(color);
        }else{
            let color = {
                colorName : colorName
            }
            this.props.onAddColor(color);  
        }          
    }

    onClose = () => {
        this.props.onClose();
    }

    componentWillReceiveProps(nextprops){
        if(nextprops && nextprops.colorEdit){
            this.setState({
                id : nextprops.colorEdit._id,
                colorName : nextprops.colorEdit.colorName                               
            })
        }else if (!nextprops.colorEdit){
            this.setState({                    
                id : null,
                colorName : '#000000'
            })
        }
        
    }

    render(){
        var {id,colorName} = this.state;
        return(            
            <div className="panel panel-default">
                  <div className="panel-heading">
                        <h3 className="panel-title">Add Color</h3>
                  </div>
                  <div className="panel-body">
                        <div>
                            <label>Code :</label><span>{colorName}</span>                            
                            <input  type="color" 
                                    name="colorName" 
                                    id="input"
                                    value={colorName}
                                    onChange={this.onChange} 
                                    className="form-control" />                            
                        </div>
                        <div className="mt-5">                            
                        <button type="button" 
                                className="btn btn-primary"
                                onClick={()=>this.onSave(colorName,id)}
                        >Save</button>&nbsp;     
                        <button type="button" 
                                className="btn btn-primary"
                                onClick={this.onClose}
                        >Cancel</button>
                        </div>
                        
                  </div>
            </div>
            
        )

    }
}

export default AddColor;