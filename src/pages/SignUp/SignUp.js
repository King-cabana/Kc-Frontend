import React from 'react'
import { Register } from '../../Components'
import { homeObjOne}from './Data'


const SignUp = () => {
    return (
        <>
          <Register {...homeObjOne } /> 
        </>
    )
}
export default SignUp;