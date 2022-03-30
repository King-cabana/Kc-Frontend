import React, { useState, useEffect } from 'react'

const DashBoard = (props) => {
    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        setUserInfo(JSON.parse(localStorage.getItem('data')) )
    }, [])

    return (
        <div>
            <h1>Users DashBoard</h1>

            <h1>Welcome { userInfo.firstName} {userInfo.lastName}</h1>
            <p>Your token is {userInfo.verificationToken}</p>
            <p>Your token is {userInfo.token}</p>
            <button>Create event</button>


        </div>
    )
}

export default DashBoard
