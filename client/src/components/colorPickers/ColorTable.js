import React, { Component } from 'react';

class ColorTable extends Component {
    render() {
        return (
            <div className="panel panel-info mt-5">              
                                
                <div className="panel-heading">
                    <h2 className="panel-title">
                        Color Board                   
                    </h2>
                    
                </div>
                <div className="panel-body">

                    <div className="table-responsive table-bordered">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Color Name</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }  
    
}

export default ColorTable;