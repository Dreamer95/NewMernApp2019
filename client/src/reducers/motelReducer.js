import * as Types from './../constants/ActionTypes';
var initialState = [];

const motelList = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_MOTELS_LIST :
            state = action.motels
            return [...state];
        default: return [...state];
    }
}

export default motelList;