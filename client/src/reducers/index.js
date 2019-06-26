import {combineReducers} from 'redux';
import motelList from './motelReducer';
import price from './priceReducer';
import colorList from './colorReducer';

const appReducer = combineReducers({
    motelList,
    price,
    colorList
});

export default appReducer;