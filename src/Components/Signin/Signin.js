import React from 'react'
import { RegisterLink } from '../Register/RegisterElement'
import { Form, FormInput, SigninLink, Button } from './SigninElement'

const Signin = () => {
    return (
        <div>
            <Form>
                <label>Email</label>
                <FormInput type="email" placeholder="Your email " name="email"/>
                <label>Password</label>
                <FormInput type="password" placeholder="Your password" name="password"/>

                <SigninLink to="/signin">
                <Button>Sign in</Button>
                </SigninLink>

                <p>Please register if you haven't done so </p>
                <RegisterLink to="/register">
                <Button  to="/register">register</Button>
                </RegisterLink>

                
            </Form>
        </div>
    )
}

export default Signin


