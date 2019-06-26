import React, {Component} from 'react';

class motelUpdateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
                roomName: 'Phòng ',
                preElectricNumber: '',
                curElectricNumber: '',
                totalElectricUsed: '',
                preWaterNumber: '',
                curWaterNumber: '',
                totalWaterUsed: '',
                isCheck : false
            
        }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
                [name] : value,
                isCheck : false           
        })       
    }

    onCheckbox = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
                [name] : value           
        })       
    }

    onCheck = () => {        
        var {isCheck} = this.state
        if(isCheck === false){
            this.setState({
                isCheck : true
            })
            var {motel,index} = this.props;
            var {preElectricNumber,curElectricNumber,preWaterNumber,curWaterNumber} = this.state;
            var tmp_motel = {
                roomName : `${motel.roomName}${index}`,
                preElectricNumber : preElectricNumber,
                curElectricNumber : curElectricNumber,
                totalElectricUsed : curElectricNumber - preElectricNumber,
                preWaterNumber : preWaterNumber,
                curWaterNumber : curWaterNumber,
                totalWaterUsed : curWaterNumber - preWaterNumber
            }      
            
            this.props.onSave(tmp_motel);
        }
        
    }
 
    render(){
        var {motel,index} = this.props;
        var {preElectricNumber,curElectricNumber,preWaterNumber,curWaterNumber,isCheck} = this.state;
       
        return(
            <tr>
                <td>{`${motel.roomName}${index}`}</td>
                <td>
                    <input  type="number"
                            name="preElectricNumber"
                            className="ip-cus"
                            value={preElectricNumber}
                            onChange={this.onChange}
                            ref="preElectricNumber"
                    ></input>
                </td>
                <td>
                    <input  type="number"
                            name="curElectricNumber"
                            className="ip-cus"
                            value={curElectricNumber}
                            onChange={this.onChange}
                            ref="curElectricNumber"
                    ></input>
                </td>
                <td>{ curElectricNumber - preElectricNumber }</td>
                <td>
                    <input  type="number"
                            name="preWaterNumber"
                            className="ip-cus"
                            value={preWaterNumber}
                            onChange={this.onChange}
                    ></input>
                </td>
                <td>
                    <input  type="number"
                            value={curWaterNumber}
                            className="ip-cus"
                            name="curWaterNumber"
                            onChange={this.onChange}
                    ></input>
                </td>
                <td>{curWaterNumber - preWaterNumber}</td>
                <td>
                   
                    <input  type="checkbox" value="" 
                            name="isCheck"
                            checked={isCheck}
                            onChange={this.onCheckbox}
                            onClick={this.onCheck}
                            />
                                               
                </td>
            </tr>
        )
    }
};

export default motelUpdateItem;