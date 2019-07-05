import * as Types from './../../constants/ActionTypes';

var initialState = {}

var itemEditting = (state = initialState , action) => {
        switch(action.type){
            case Types.EDIT_PRODUCT:
                state = action.product;
                return state;
            default: return state;
        }
}

export default itemEditting;