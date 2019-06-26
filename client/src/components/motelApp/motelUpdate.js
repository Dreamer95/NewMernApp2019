import React, { Component } from 'react';


class motelUpdate extends Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Tên Phòng</th>
                            <th>Số Điện Cũ</th>
                            <th>Số Điện Mới</th>
                            <th>Số Điện Tiêu Thụ</th>
                            <th>Số Nước Cũ</th>
                            <th>Số Nước Mới</th>
                            <th>Số Nước Tiêu Thụ</th>
                            <th>Xác Nhận</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>

        )
    }
}

export default motelUpdate;