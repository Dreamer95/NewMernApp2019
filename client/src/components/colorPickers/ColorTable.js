import React, { Component } from 'react';

class ColorTable extends Component {
    render() {
        return (
            <div className="panel panel-info mt-5">              
                                
                <div className="panel-heading">
                    <h2 className="panel-title">
                        Bảng màu                   
                    </h2>
                    
                </div>
                <div className="panel-body">

                    <div className="table-responsive table-bordered">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Tên màu</th>
                                    <th>Hình ảnh</th>
                                    <th>Hành động</th>
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