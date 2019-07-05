import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-10">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">Shopping List</h3>
                        </div>
                        <div className="panel-body">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>Ordinal Numbers</th>
                                        <th>Products Name</th>
                                        <th>Quantity</th>
                                        <th>Necessary</th>
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
            </div>
        );
    }
}

export default ProductList;
