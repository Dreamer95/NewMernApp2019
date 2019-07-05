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
                txtQuantity: itemEditting.quantity,
                chkbStatus: itemEditting.necessary
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
        var { id, txtName, txtQuantity, chkbStatus } = this.state;
        var { history, onAddProduct, onUpdateProduct } = this.props;
        var product = {
            id: id,
            name: txtName,
            quantity: txtQuantity,
            necessary: chkbStatus
        }
        if (txtName && txtQuantity && id === '') {
            onAddProduct(product);            
        } else if (txtName && txtQuantity && id !== '') {
            onUpdateProduct(product);
        }
        history.goBack();
    }

    render() {
        var { txtName, txtQuantity, chkbStatus } = this.state;

        return (
            <div className="container mt">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >Product Name : </label>
                        <input type="text"
                            className="form-control"
                            name="txtName"
                            value={txtName}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Quantity: </label>
                        <input type="number"
                            className="form-control"
                            name="txtQuantity"
                            value={txtQuantity}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Necessary : </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                                name="chkbStatus"
                                value={chkbStatus}
                                onChange={this.onChange} />
                            Yes
                       </label>
                    </div>
                    <Link to="/product-list" className="btn btn-primary mr-10">Come Back</Link>&nbsp;
                    <button type="submit" className="btn btn-primary">Save</button>
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
