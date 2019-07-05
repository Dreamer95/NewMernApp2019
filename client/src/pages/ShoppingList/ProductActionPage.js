import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from './../../actions/ShoppingList/index';
import { connect } from 'react-redux';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: false
        }
    }

    componentDidMount() {
        var { match, onEditProduct } = this.props;
        if (match) {
            var id = match.params.id
            onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps && nextProps.itemEditting) {
            var { itemEditting } = nextProps;
            this.setState({
                id: itemEditting.id,
                txtName: itemEditting.name,
                txtPrice: itemEditting.price,
                chkbStatus: itemEditting.status
            })
        }

    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        })
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, chkbStatus } = this.state;
        var { history, onAddProduct, onUpdateProduct } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        if (txtName && txtPrice && id === '') {
            onAddProduct(product);            
        } else if (txtName && txtPrice && id !== '') {
            onUpdateProduct(product);
        }
        history.goBack();
    }

    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;

        return (
            <div className="container mt">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >Tên Sản Phẩm : </label>
                        <input type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Giá : </label>
                        <input type="number"
                            className="form-control"
                            name="txtPrice"
                            value={txtPrice}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Trạng thái : </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange} />
                            Còn Hàng
                       </label>
                    </div>
                    <Link to="/product-list" className="btn btn-primary mr-10">QuayLại</Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditting: state.itemEditting
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actions.actAddProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(actions.actGetProductRequest(id))
        },
        onUpdateProduct: (product) => {
            dispatch(actions.actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
