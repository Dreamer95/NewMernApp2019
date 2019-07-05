import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-10">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                        </div>
                        <div className="panel-body">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Mã SP</th>
                                        <th>Tên SP</th>
                                        <th>Mô Tả</th>
                                        <th>Giá</th>
                                        <th>Trạng Thái</th>
                                        <th>Hành Động</th>
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
