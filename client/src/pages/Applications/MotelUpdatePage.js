import React, { Component } from 'react';
import MotelUpdate from './../../components/motelApp/motelUpdate';
import MotelUpdateItem from './../../components/motelApp/motelUpdateItem';
const totalRoom = 10;

class MotelUpdatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            motel: {
                roomName: 'Phòng ',
                preElectricNumber: '',
                curElectricNumber: '',
                totalElectricUsed: '',
                preWaterNumber: '',
                curWaterNumber: '',
                totalWaterUsed: ''
            },
            month: ''
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }


    render() {
        var {  month } = this.state;
        return (
            <div className="container myFont">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Ghi Số Điện + Nước</h3>
                    </div>
                    <div>
                        <span className="float-left" >Chọn Tháng : </span>
                        <input type="month"
                            name="month" id="input"
                            className="float-left"
                            value={month}
                            onChange={this.onChange} />
                        <button type="button"
                            className="btn btn-primary float-left ml-5"
                            onClick={this.onSave}
                        >Lưu</button>

                    </div>

                    <div className="panel-body">
                        <MotelUpdate>
                            {this.showUpdateItem()}
                        </MotelUpdate>
                    </div>
                </div>
            </div>
        )
    }

   
    onSave = (motel) => {
        console.log (motel);
    }

    onSaveMotel = () =>{
        var temp = this.onSave();
        console.log(temp);
        this.setState({
            motel : temp
        })
    }

    showUpdateItem = (motelList) => {
        var result = [];
        if (motelList && motelList.length === totalRoom) {
            result = motelList.map((motel, index) => {
                return <MotelUpdateItem
                    key={index}
                    motel={motel}
                    index={index}
                    onSave={this.onSave}
                />
            })
        } else {
            for (let i = 0; i < totalRoom; i++) {
                result.push(
                    < MotelUpdateItem key={i}
                        index={i + 1}
                        motel={this.state.motel}
                        onSave={this.onSave} />
                )
            }
        }
        return result;
    }

}

export default MotelUpdatePage;