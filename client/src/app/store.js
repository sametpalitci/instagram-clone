import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers/main-reducer';

const rootReducer = combineReducers({
    main: mainReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;