import React, { Component } from 'react';
import MotelList from './../../components/motelApp/motelList';
import * as actions from './../../actions/index';
import MotelItem from "./../../components/motelApp/motelItem";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const totalRoom = 10;

class MotelManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motel: {
        roomName: 'Phòng ',
        roomNumber: '',
        roomMoney: 1000000,
        month: '',
        preElectricNumber: '',
        curElectricNumber: '',
        totalElectricUsed: '',
        totalElectricMoney: '',
        preWaterNumber: '',
        curWaterNumber: '',
        totalWaterUsed: '',
        totalWaterMoney: '',
        totalRoomMoney: '',
        note: '',
        status: false
      },
      price: {
        name: '',
        codeNumber: '',
        electricPrice: '',
        waterPrice: ''
      }
    }
  }

  componentWillMount(){
    this.props.onGetPrice();
    
  }

  componentWillReceiveProps(){
    console.log(this.props.price)
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      motel: {
        [name]: value
      },
      price : this.props.price
    })
  }

  getData = () => {
    this.props.onGetMotelList();
  }


  showListMotels = (motels) => {
    var result = [];
    if (motels && motels.length === totalRoom) {
      result = motels.map((motel, index) => {
        return < MotelItem key={index}
          motel={motel}
          index={index + 1}
        />
      })
    } else {
      for (let i = 0; i < totalRoom; i++) {
        result.push(
          < MotelItem key={i}
            index={i + 1}
            motel={this.state.motel} />
        )
      }
    }

    return result;
  }

  render() {    
    var { month } = this.state.motel;    
    return (
      <div className="container myFont">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"> Quản Lý Phòng Trọ </h3>
          </div>
          <div>
            <input type="month"
              className="float-left"
              name="month"
              value={month}
              onChange={this.onChange}>
            </input>
            <button
              type="button"
              className="btn btn-success float-left ml-10"
              onClick={this.getData}>Xem
            </button>
            <Link
              to={month !== "" ? "/motel/update" : "/motel"}
              className="btn btn-success float-left ml-10"
              onClick={this.getData}>Ghi Số Mới
              
            </Link>
          </div>
          <MotelList>
            {this.showListMotels()}
          </MotelList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    motels: state.motelList,
    price: state.price
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onGetMotelList: () => {
      dispatch(actions.actFetchMotelListRequest());
    },

    onGetPrice: () => {
      dispatch(actions.actGetPriceRequest());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MotelManager);
