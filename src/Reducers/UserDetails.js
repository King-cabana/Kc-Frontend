import React from 'react'
import {  useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsOfUser } from '../Actions/UserActions';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import data from '../data';
import { keyframes } from 'styled-components';
const UserDetails = (props) => {

    const dispatch  = useDispatch();
    // const userId = props.match.params.id

    
    const userDetails = useSelector(state => state.userDetails);
    const {loading, error, user} = userDetails;
//     const { id } = useParams();
//   const userId = user.find((p) => p._id === Number(id));

//     useEffect(() => {
//        dispatch(detailsOfUser(userId))
//     }, [dispatch, userId])
    return (
        <div>
    <p>Hello</p>

     {loading ? (<LoadingBox></LoadingBox>)
      :
    error ? (<MessageBox>{error}</MessageBox>)
    :
    (
        <div>
        {user.map((p => 
            <p key={p.id}> {p.email})</p>)
            ) }
      </div>
      )
  }      
  </div>  
        // <div>
        // {data.products.map((product) => (
        //     <p key={product._id} product={product}></p>
           
        // ))}
        
        // </div>
      
      );

}

export default UserDetails;
