import React, { Component } from "react";

class motelList extends Component {
  render() {
    return (
        <div className="panel-body">
            <div className="table-responsive ">
              <table className="table table-hover table-bordered info">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên Phòng</th>
                    <th>Tiền Phòng</th>
                    <th>Số Điện Cũ</th>
                    <th>Số Điện Mới</th>
                    <th>Số Điện Sử dụng</th>
                    <th>Tiền Điện</th>
                    <th>Số Nước Cũ</th>
                    <th>Số Nước Mới</th>
                    <th>Số Nước Sử dụng</th>
                    <th>Tiền Nước</th>
                    <th>Tổng Tiền</th>
                    <th>Ghi Chú</th>
                    <th>Hành Động</th>
                  </tr>
                </thead>
                <tbody>
                    {this.props.children}
                </tbody>
              </table>
            </div>
          </div>
    );
  }
}

export default motelList;
