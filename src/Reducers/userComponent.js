import React, {useEffect, useState} from 'react'
import { listUsers } from '../Actions/UserActions';
// import { Link } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';

//import { useRecoilValue } from 'recoil';
// import { userQuery } from '../Components/UserService';
const UserComponent = () => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);

  const userList = useSelector((state )=> state.userList )
  const{loading, error, users} = userList;
  
  const dispatch =  useDispatch();
  useEffect(() => {
    // const fetchData = async () =>{
     
    //  try{
    //   setLoading(true);
    //   const {data} = await 
    //   axios.get('http://localhost:8080/eventuser/all')
    //   setLoading(false);
    //   setUsers(data)
    //  }catch(err){
    //     setError(err.message)
    //     setLoading(false);
    //  }
      
    // };
    // fetchData();
    dispatch(listUsers())
  },[dispatch ])
   
  
  
  

  
  
  return (
    <div>
    <p>Hello</p>

     {loading ? (<LoadingBox></LoadingBox>)
      :
    error ? (<MessageBox>{error}</MessageBox>)
    :
    (<div>
      {users.map(person => <p key={person.id}>{person.firstName}</p>)}

      </div>)
  }      
  </div>  
  
  );
 
}
export default UserComponent;
