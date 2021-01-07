import { ADD_USER, LOGIN_USER, GET_DATA } from '../actions/main-action';
const mainReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ADD_USER:
            return {...state, ...payload }
        case LOGIN_USER:
            return {...payload }
        case GET_DATA:
            return [...state, ...payload]
        default:
            return state;
    }
}

const errorReducer = (state = "", { type, payload }) => {
    if (type === "GET_ERROR") {
        return payload;
    }
    return state;
}
export { mainReducer, errorReducer };