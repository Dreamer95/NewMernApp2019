import React, { Component } from 'react';
const p_size = 7;

class motelItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: true
        }
    }

    onUpdate = (flag) => {
        if (flag) {
            this.setState({
                flag: !flag
            })
        }
    }

    onSave = (flag) => {
        if (!flag) {
            this.setState({
                flag: !flag
            })
        }
    }

    render() {
        var { motel, index } = this.props;
        var { flag } = this.state;
        return (
            <tr>
                <td>{index}</td>
                <td>{`${motel.roomName}${index}`}</td>
                <td>{motel.roomMoney}</td>
                <td>
                    <input type="text"
                        value={motel.preElectricNumber}
                        onChange={this.onChange}
                        size={p_size}
                        disabled={flag}
                    ></input>
                </td>
                <td>
                    <input type="text"
                        value={motel.curElectricNumber}
                        onChange={this.onChange}
                        size={p_size}
                        disabled={flag}
                    ></input>
                </td>
                <td>{motel.totalElectricUsed}</td>
                <td>{motel.totalElectricMoney}</td>
                <td>
                    <input type="text"
                        value={motel.preWaterNumber}
                        onChange={this.onChange}
                        size={p_size}
                        disabled={flag}
                    ></input>
                </td>
                <td>
                    <input type="text"
                        value={motel.curWaterNumber}
                        onChange={this.onChange}
                        size={p_size}
                        disabled={flag}
                    ></input>
                </td>
                <td>{motel.totalWaterUsed}</td>
                <td>{motel.totalWaterMoney}</td>
                <td>{motel.totalRoomMoney}</td>
                <td>{motel.note}</td>
                <td>
                    <div>
                        <button type="button" className="btn btn-primary mb-2"
                            onClick={() => this.onUpdate(flag)}
                        >Sửa</button>
                        <button type="button" className="btn btn-primary"
                            onClick={() => { this.onSave(flag) }}
                        >Lưu</button>
                    </div>
                </td>
            </tr>
        )
    }
}

export default motelItem;