import * as Types from './../constants/ActionTypes';
var initialSate = []

const priceReducer = (state = initialSate, action) => {
    switch(action.type){
        case Types.GET_PRICE:
            state = action.price          
            return [...state]
        default :
            return [...state]
    }
}



export default priceReducer;