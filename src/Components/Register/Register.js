import React from 'react'
import Signin from '../Signin/Signin'
import { Form, RegisterLink , Button} from './RegisterElement'
import {  SigninLink } from './RegisterElement'
import { FormInput } from './RegisterElement'

const Register = () => {
    return (
        <div>
        <Form>
            <label>First name</label>
            <FormInput type="text" placeholder="Your first name" />
            <label>Last Name</label>
            <FormInput type="text" placeholder="Your last name" />
            <label>Email</label>
            <FormInput type="email" placeholder="Your email" />
            <label>Password</label>
            <FormInput type="password" placeholder="Your password " />
            <RegisterLink  to="/register">
            <Button to="/register" >Register</Button>
            </RegisterLink>
          
            <p>Log in if you have register</p>
            <SigninLink to="/signin">
            <Button to="/signin">Signin</Button>
            </SigninLink>
        </Form>
            
        </div>
    )
}

export default Register
