import React, { Component } from 'react';

class Reset extends Component {

    onResetDefault = () => {
        this.props.onSettingDefault(true);
    }

    onToggle = () => {
        this.props.onToggle();
    }

    render() {
        return (
            <div>
                <button type="button"
                    className="btn btn-success"
                    onClick={this.onToggle}
                >
                    Bảng màu
                </button>&nbsp;

                <button type="button"
                    className="btn btn-success"
                    onClick={this.onResetDefault}
                >
                    Reset
                </button>
            </div>
        );
    }
}

export default Reset;
