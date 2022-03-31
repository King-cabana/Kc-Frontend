import { ActionTypes } from "../constants/action-types"


const initialState ={
    users: []
}

export const usersReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.SET_USERS:
            return {...state, users: payload};
        default:
            return state;
    }
};

export const  selectedUsersReducer = (state ={}, {type, payload}) => {
    console.log(type);
    switch(type) {
        case ActionTypes.SELECTED_USERS:
            return{...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_USER:
            return {};
        default:
            return state;
    }
};