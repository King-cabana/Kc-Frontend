import axios from "axios";
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS,USER_LIST_FAIL, 
    USER_LIST_REQUEST, 
    USER_LIST_SUCCESS } from "../Constants/UserConstants"


export const listUsers = () => async (dispatch) =>{
    dispatch({
        type: USER_LIST_REQUEST
    });
    try{
        const {data} = await axios.get("http://localhost:8080/eventuser/all");
        dispatch({type: USER_LIST_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: USER_LIST_FAIL, payload: error.message});
    }
};

export const detailsOfUser = (userId) => async(dispatch) =>{
    dispatch({type:USER_DETAILS_REQUEST, payload: userId})
    try{
        const{data} = await axios.get(`http://localhost:8080/eventuser/${userId}`)
        dispatch({type: USER_DETAILS_SUCCESS, payload: data})
    }catch(error){
        dispatch({type: USER_DETAILS_FAIL, payload:error.response && error.response.data.message
        ? error.response.data.message
        :  error.message,
        })
    }
}