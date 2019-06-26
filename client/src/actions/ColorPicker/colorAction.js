import * as Types from './../../constants/ActionTypes';
import callApi from './../../utils/apiCaller';

export const actGetColorsRequest = () => {
    return async (dispatch) => {
        const res = await callApi('color','GET',null);
        dispatch(actGetColors(res.data));
    }

    // return (dispatch)=>{
    //     return callApi('color','GET',null).then(res=>{
    //         dispatch(actGetColors(res.data));
    //     })
    // }
}


export const actGetColors = (colors) => {
    return {
        type : Types.GET_COLOR_LIST,
        colors
    }
}

export const actAddColorRequest = (color) => {
    return async (dispatch)=>{        
        const res = await callApi('color','POST',color);
        dispatch(actAddColor(res.data));
    }
}


export const actAddColor = (color) => {
    return {
        type : Types.ADD_COLOR,
        color
    }
}

export const actDeleteColorRequest = (id) =>{
    return async (dispatch)=>{
        const res = await callApi(`color/${id}`,'DELETE',null)
        dispatch(actDeleteColor(id))
    }
}

export const actDeleteColor = (id) => {
    return {
        type : Types.DELETE_COLOR,
        id
    }
}

export const actUpdateColorRequest = (color) => {
    return async (dispatch) => {
        const res = await callApi(`color/${color.id}`,'PUT',color)
        dispatch(actUpdateColor(res.data.color))
    }
}

export const actUpdateColor = (color) => {
    return {
        type : Types.UPDATE_COLOR,
        color
    }
}