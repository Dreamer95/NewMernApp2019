import React, { Component } from 'react';
import ProductList from './../../components/shoppingList/ProductList';
import ProductItem from './../../components/shoppingList/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../actions/ShoppingList/index';

class ProductListPage extends Component {
   
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    render() {
        var { products } = this.props;
        return (
            <div className="container mt">
            <h1 className="text-center">Shopping List</h1>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-5">
                    <Link to="/" className="btn btn-info">Go Home</Link>&nbsp;
                    <Link to="/product/add" className="btn btn-info">Add Product</Link>
                </div>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
            </div>
        );
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onDelete={this.onDelete}
                />
            })
        }
        return result;        
    }

    onDelete = (id) => {
        this.props.deleteProduct(id);
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actions.actFetchProductsRequest())
        },
        deleteProduct : (id) => {
            dispatch(actions.actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
