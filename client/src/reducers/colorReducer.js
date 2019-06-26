import * as Types from './../constants/ActionTypes';
var initialState = [];

var findID = (id, colors) => {
    let result = -1;
    colors.map((color,index)=>{
        if(color._id === id){
            result = index;           
        }
        return result;
    })
    return result;
}

const colorList = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.GET_COLOR_LIST:
            state = action.colors
            return [...state];
        case Types.ADD_COLOR:            
            state.push(action.color)
            return [...state]
        case Types.DELETE_COLOR:
            index = findID(action.id, state);
            if(index !== -1){
                state.splice(index,1);                
            }
            return [...state];
        case Types.UPDATE_COLOR:
            index = findID(action.color._id, state);
            if(index !== -1){
                state[index].colorName = action.color.colorName                
            }
            return [...state]
        default: return [...state];
    }
}

export default colorList;