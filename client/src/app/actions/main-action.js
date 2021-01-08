const ADD_USER = "ADD_USER";
const LOGIN_USER = "LOGIN_USER";
const GET_DATA = "GET_DATA";
const USER_DATA = "USER_DATA";

const addUser = (getData) => {
    return {
        type: ADD_USER,
        payload: {
            data: getData
        }
    }
}
const loginUser = (getData) => {
    return {
        type: ADD_USER,
        payload: {
            data: getData
        }
    }
}
const getData = (getData) => {
    return {
        type: GET_DATA,
        payload: getData
    }
}
const getUserData = (getData) => {
    return {
        type: USER_DATA,
        payload: getData
    }
}

export {
    addUser,
    ADD_USER,
    loginUser,
    LOGIN_USER,
    getData,
    GET_DATA,
    getUserData,
    USER_DATA
}