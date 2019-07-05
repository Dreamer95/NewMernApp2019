import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Do you want delete this product ?')) { //eslint-disable-line
            this.props.onDelete(id)
        }
    }

   
    render() {
        var { product, index } = this.props;
        var statusName = product.necessary ? 'Yes' : 'No';
        var statusClass = product.necessary ? 'success' : 'warning';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`product/${product.id}/edit`} className="btn btn-danger mr-10">Edit</Link>&nbsp;
                    <button type="button" className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >Delete</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
