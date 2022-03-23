import React, { useState } from 'react'
import { Button, ForgotPasswordHeader, Form, FormInput } from './ForgetPasswordElement'
import axios from 'axios'
import { withRouter } from 'react-router'

const ForgetPassword = (props) => {


  const [data, setData] = useState({ email: '' });
const apiUrl = "http://localhost:8080/eventuser/reset-password"

const resetForgotPassword = (e) => {
    e.preventDefault();
    // debugger;   
    const userData = { email: data.email };
    axios.post(apiUrl, userData)

    .then((result) => {
     
        console.log(result)
    })
};

const onChange = (e) => {
    e.persist();
    // debugger;    
    setData({ ...data, [e.target.name]: e.target.value });
}


  return (
    <div>
   <Form onSubmit={resetForgotPassword}>
   <ForgotPasswordHeader>
   <h1>Forget password</h1>
   <p>We will be sending a reset password link to your email</p>
   </ForgotPasswordHeader>
    
   <FormInput type="email" placeholder="Your email" 
   value={data.email} onChange={onChange} name="email"/>

 

   <Button>
   <strong>Send</strong>
   </Button>
   </Form>
    </div>
  )
}

export default withRouter(ForgetPassword)
// export default ForgetPassword