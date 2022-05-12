
import React,{useState} from 'react'
import axios from 'axios'
// import Signin from '../Signin/Signin'
import { withRouter } from 'react-router'
import { Form, RegisterLink , Button, ParentBoxOfSignIn,SideBarBox, 
  SideBarBoxImg,FormBox, SignInHeader, IconBox, IconContainer, CheckBox, BelowBox, BelowBoxSignIn, BelowBoxForgotPassword } from './RegisterElement'
import {  SigninLink } from './RegisterElement'
import SideBarPics from  '../../images/SideImg.png'
import Google from  '../../images/Google.png'
import FB from  '../../images/FB.png'
import Apple from  '../../images/Apple.jpg'

// import React from 'react'
import Signin from '../Signin/Signin'
import happyToast from '../../images/Mask Group 26@2x.png'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { GrFacebook } from 'react-icons/gr'
import {
    Body,
    FormHeader,
    FormDesc,
    Socials,
    SocialIconLink,
    SocialIconLin,
    
    FormInput,
    ImgWrap,
    Img,
    // RegisterLink,
    // Button,
    SideBar,
    FormSide,
    Input,
    Check,
    Log,
    Span
} from './RegisterElement'

import background from '../../images/bg.png'

// <<<<<<< HEAD
const Register = (props) => {

  const [data, setData] = useState({ firstName: '', lastName: '', email: '', password: '', phoneNumber: ''})
  const apiUrl = "http://localhost:8080/eventuser/create";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    // debugger;  
    // const data1 = { firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password };
    axios.post(apiUrl, data)
      .then((result) => {
        // debugger;  

        console.log(result.data);
        if (result.data.Status === 'Invalid')
          alert('Invalid User');
        else
          props.history.push('/signin');
          // return props.history.push('<Signin/>')
        //  return this.history.push(<Signin/>)
         
      })
  }
  const onChange = (e) => {
    e.persist();  
    // debugger;  
    setData({ ...data, [e.target.name]: e.target.value });
  }

    return (
        <div  style={{ backgroundImage: `url(${background})`}}>
        <ParentBoxOfSignIn>
        {(window.innerWidth > 768)?
          <SideBarBox>
          <SideBarBoxImg>
          <img src={SideBarPics} alt={""} height={260}  width={260} />
          </SideBarBoxImg>
          
          </SideBarBox>:null
      }

      <FormBox>

      <SignInHeader>
      <h1>Sign Up</h1>
      
      <IconBox>
      <IconContainer><p> Register with</p></IconContainer>
      <IconContainer> <img src={Google} alt={""} height={30}  width={30} /></IconContainer>
      <IconContainer> <img src={FB} alt={""} height={30}  width={30} /></IconContainer>
      <IconContainer><img src={Apple} alt={""} height={30}  width={30} /></IconContainer>
      </IconBox>
      
      </SignInHeader>
      <Form onSubmit={handleSubmit}>
   
      <FormInput type="text" name="firstName" onChange={onChange} value={data.firstName} id="firstName" placeholder="Your first name" />
      
      
      <FormInput type="text" name="lastName" onChange={onChange} placeholder="Your last name"  
      value={data.lastName}  id="lastName"/>
      
          
      
      <FormInput type="email" name="email" onChange={onChange} value={data.email} 
       id="email" placeholder="Email"  />

      
      <FormInput type="text" name="phoneNumber" onChange={onChange} value={data.phoneNumber} 
       id="phone" placeholder="phone"  />
      
      
              
      
      <FormInput type="password"  placeholder="Your password " onChange={onChange} name="password"
      value={data.password} id ="password"  />

     {/*
       <RegisterLink  to="/register">
      <Button to="/register" >Register</Button>
      </RegisterLink>
  
  */}

  <CheckBox>
  <FormInput type="checkbox"/>Remember me
  </CheckBox>
  <Button type="submit">Register</Button>
 

  <RegisterLink>
 
  </RegisterLink>
    {/*
   <p>Log in if you have register</p>
      <SigninLink to="/signin">
      <Button to="/signin">Signin</Button>
      </SigninLink>
  */}
     
  </Form>
  
      <BelowBox>
        <BelowBoxSignIn><p>Already have an account?<strong><a href='/signin'>Sign in</a></strong></p></BelowBoxSignIn>
        <BelowBoxForgotPassword></BelowBoxForgotPassword>
        <BelowBoxForgotPassword></BelowBoxForgotPassword>
        <BelowBoxForgotPassword></BelowBoxForgotPassword>
        <BelowBoxForgotPassword></BelowBoxForgotPassword>
         
        <BelowBoxForgotPassword><p><strong><a href='/forgetPassword'>Forgot password</a></strong></p></BelowBoxForgotPassword>
       
        </BelowBox>
      </FormBox>

      
     
        </ParentBoxOfSignIn>
        
        
        
        </div>




  



    )
}

export default  withRouter(Register)
