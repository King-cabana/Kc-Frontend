import React, { useState } from 'react'

// import { Button, ForgotPasswordHeader, Form, FormInput } from './ForgetPasswordElement'
// import axios from 'axios'
// import { withRouter } from 'react-router'

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
  FormSide,
  ParentBoxOfForgotPassword
} from './ForgetPasswordElement'

import { FormBox } from '../Signin/SigninElement'
import axios from 'axios'
import { withRouter } from 'react-router'

import background from '../../images/bg.png'
import SideBarPics from '../../images/boy.png'
import { SideBarBox, SideBarBoxImg} from '../Signin/SigninElement'


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
// <<<<<<< HEAD
    <div style={{ backgroundImage: `url(${background})`}}>
    <ParentBoxOfForgotPassword>
    {(window.innerWidth > 768)?
      <SideBarBox>
      <SideBarBoxImg>
      <img src={SideBarPics} alt={""} height={250}  width={250} />
      </SideBarBoxImg>
      
      </SideBarBox>:null
  }
        <FormSide>
        <FormBox>
        
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

        </FormBox>
        </FormSide>
  
    </ParentBoxOfForgotPassword>
       
    </div>
// =======
//     <Body style={{ backgroundImage: `url(${background})`}}>
//       <SideBar>
//                 <ImgWrap>
//                 <Img src={happyToast} alt='Toast'/>
//                 </ImgWrap>
//             </SideBar>
//    <FormSide>
//    <Form onSubmit={resetForgotPassword}>
//    <ForgotPasswordHeader>
//    <FPassHead>Forgot password</FPassHead>
//    <FPass>Please enter email address used to register. A reset password link will be sent to you</FPass>
//    </ForgotPasswordHeader>
//    <FormInput type="email" placeholder="Email" value={data.email} onChange={onChange} name="email"/>
//    <Button>Send Link</Button>
//    </Form>
//    </FormSide>
//     </Body>
// >>>>>>> 1a968c2c3b4d39bddcdfedf678828b4f12f55703
  )
}

export default withRouter(ForgetPassword)
// export default ForgetPassword