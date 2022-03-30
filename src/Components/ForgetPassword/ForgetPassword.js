import React, { useState } from 'react'
import {
  Body,
  SideBar,
  ImgWrap,
  Img,
  Button,
  ForgotPasswordHeader,
  FPassHead,
  FPass,
  Form,
  FormInput,
  FormSide
} from './ForgetPasswordElement'
import axios from 'axios'
import { withRouter } from 'react-router'
import happyToast from '../../images/Mask Group 26@2x.png'
import background from '../../images/bg.png'

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
    <Body style={{ backgroundImage: `url(${background})`}}>
      <SideBar>
                <ImgWrap>
                <Img src={happyToast} alt='Toast'/>
                </ImgWrap>
            </SideBar>
   <FormSide>
   <Form onSubmit={resetForgotPassword}>
   <ForgotPasswordHeader>
   <FPassHead>Forgot password</FPassHead>
   <FPass>Please enter email address used to register. A reset password link will be sent to you</FPass>
   </ForgotPasswordHeader>
   <FormInput type="email" placeholder="Email" value={data.email} onChange={onChange} name="email"/>
   <Button>Send Link</Button>
   </Form>
   </FormSide>
    </Body>
  )
}

export default withRouter(ForgetPassword)
// export default ForgetPassword