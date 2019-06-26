import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchMotelListRequest = () => {
    return async (dispatch)=>{
        const res = await callApi('motel','GET',null);
        dispatch(actFetchMotelList(res.data));
    }
}

export const actFetchMotelList = (motels) => {
    return {
        type : Types.FETCH_MOTELS_LIST,
        motels
    }
}

export const actGetPriceRequest = () => {
    return async (dispatch)=>{
        const res = await callApi('price','GET',null);
        dispatch(actGetPrice(res.data));
    }
}

export const actGetPrice = (price) => {
    return {
        type : Types.GET_PRICE,
        price
    }
}