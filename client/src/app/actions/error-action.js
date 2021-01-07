const GET_ERROR = 'GET_ERROR';

const errorAction = (getError) => {
    return {
        type: GET_ERROR,
        payload: getError
    };
};

export { errorAction };