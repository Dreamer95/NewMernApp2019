import React, { Component } from 'react';

class SizeSetting extends Component {

    ChangeSize(value){
            this.props.onChangeSize(value);
    }
    render() {
        return (

            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Size : {this.props.p_fontSize} px</h3>
                </div>
                <div className="panel-body">

                    <button type="button" 
                            className="btn btn-primary"
                            onClick={() => this.ChangeSize(2)}
                    >
                        Up
                    </button>&nbsp;
                    <button type="button" 
                            className="btn btn-primary"
                            onClick={() => this.ChangeSize(-2)}
                    >
                        Down
                    </button>

                </div>
            </div>

        );
    }
}

export default SizeSetting;
