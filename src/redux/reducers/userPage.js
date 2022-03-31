import React, {useEffect} from 'react'
import axios from "axios";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setUsers } from '../actions/usersActions';
import UserComponent from '../userComponent';



const UserPage = () => {

    const users = useSelector((state) => state.allUsers.users);
    const dispatch = useDispatch();
    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:8080/eventuser/all")
        .catch((err) => {
            console.log("Err: ", err);
        });
        dispatch(setUsers(response.data));

    };

    useEffect(() => {
        fetchUsers();
    }, []);

    console.log("Users :", users)
    return (
        <div>
          
           <UserComponent/>
           
        </div>
    )
}

export default UserPage
