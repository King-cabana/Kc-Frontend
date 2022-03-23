import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserComponent = () => {

    const users = useSelector((state) => state.allUsers.users);
    const renderList = users.map((user) => {
        const{id, firstName, lastName, email} = user;
    //   return()

        return(
            <div key={id}>
            <Link to={`/user/${id}`}>
            <h3>{firstName}</h3>
            <div>{lastName}</div>
            <div>{email}</div>
            </Link>
            </div>
        )
            
        

    });
    // return (
    //     <div>
            
    //     </div>
    // )
    return <>{renderList}</>
}

export default UserComponent
