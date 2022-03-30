import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';   
// import data from './data';
import { userDetailReducer, userListReducer } from './Reducers/UsersReducers';

const initialState = {};

// const reducer = (state, action) => {
//     return {users: data.users};
// };
 
const reducer = combineReducers({
    userList: userListReducer,
    userDetails: userDetailReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const  store = createStore(reducer, 
    initialState, 
    composeEnhancer(applyMiddleware(thunk)));

export default store;