import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { mainReducer, errorReducer } from './reducers/main-reducer';

const rootReducer = combineReducers({
    main: mainReducer,
    err: errorReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;