const ADD_USER = "ADD_USER";

const addUser = (getData) => {
    return {
        type:ADD_USER,
        payload:{
            data:getData
        }
    }
}

export {addUser, ADD_USER}