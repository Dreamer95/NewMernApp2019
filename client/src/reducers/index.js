import {combineReducers} from 'redux';
import colorList from './colorReducer';
import products from './../reducers/shoppingList/products';
import itemEditting from './../reducers/shoppingList/itemEditting';

const appReducer = combineReducers({
    colorList,
    products,
    itemEditting
});

export default appReducer;