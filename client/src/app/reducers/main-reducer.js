import { ADD_USER } from '../actions/main-action';
const mainReducer = (state = [], { type,payload  }) => {
    switch (type) {
        case ADD_USER:
            return {...state,...payload}
        default:
            return state;
    }
}


export default mainReducer;