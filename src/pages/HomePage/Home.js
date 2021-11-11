import React from 'react'
import { InfoSection} from '../../Components'
import Login from '../LoginPage/Login'
import {homeObjOne}from './Data'


const Home = () => {
    return (
        <>
          <InfoSection {...homeObjOne } />   
          <Login/>
        </>
    )
}
export default Home;