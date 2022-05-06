
import React,{useState} from 'react'
import axios from 'axios'
// import Signin from '../Signin/Signin'
import { withRouter } from 'react-router'
import { Form, RegisterLink , Button} from './RegisterElement'
import {  SigninLink } from './RegisterElement'

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
// import { SigninLink } from './RegisterElement'
// >>>>>>> 1a968c2c3b4d39bddcdfedf678828b4f12f55703
// import { FormInput } from './RegisterElement'
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
        <Form onSubmit={handleSubmit}>
            <label>First name</label>
            <FormInput type="text" name="firstName" onChange={onChange} value={data.firstName} id="firstName" placeholder="Your first name" />
            
            <label>Last Name</label>
            <FormInput type="text" name="lastName" onChange={onChange} placeholder="Your last name"  
            value={data.lastName}  id="lastName"/>
            
                
            <label>Email</label>
            <FormInput type="email" name="email" onChange={onChange} value={data.email} 
             id="email" placeholder="Email"  />

            <label>Phone number</label>
            <FormInput type="text" name="phoneNumber" onChange={onChange} value={data.phoneNumber} 
             id="phone" placeholder="phone"  />
            
            
                    
            <label>Password</label>
            <FormInput type="password"  placeholder="Your password " onChange={onChange} name="password"
            value={data.password} id ="password"  />

           {/*
             <RegisterLink  to="/register">
            <Button to="/register" >Register</Button>
            </RegisterLink>
        
        */}
        <Button type="submit">Register</Button>

        <RegisterLink>
       
        </RegisterLink>
          
            <p>Log in if you have register</p>
            <SigninLink to="/signin">
            <Button to="/signin">Signin</Button>
            </SigninLink>
        </Form>
            
        </div>
// =======


// >>>>>>> 1a968c2c3b4d39bddcdfedf678828b4f12f55703
// function Register ({
// }) {
//     return (
//         <Body style={{ backgroundImage: `url(${background})`}}>
//             <SideBar>
//                 <ImgWrap>
//                 <Img src={happyToast} alt='Toast'/>
//                 </ImgWrap>
//             </SideBar>
//             <FormSide >
//             <Form>
//             <FormHeader>Sign Up</FormHeader>
//             <FormDesc>Register with
//             <Socials>
//             <SocialIconLink href="/" target="_blank"
//             aria-label="Google">
//             <FcGoogle/>
//             </SocialIconLink>
//             <SocialIconLink href="/" target="_blank"
//             aria-label="Facebook">
//             <GrFacebook/>
//             </SocialIconLink>
//             <SocialIconLin href="/" target="_blank"
//             aria-label="Apple">
//             <FaApple/>
//             </SocialIconLin>
//             </Socials>
//             </FormDesc>
//             <FormInput type="text" placeholder="First Name" required />
//             <FormInput type="text" placeholder="Last Name" required />
//             <FormInput type="email" placeholder="Email" required />
//             <FormInput type="password" placeholder="Password " required />
//             <Check>
//             <Input type="checkbox" id="Agree" name="Agree" value="Agree" required /> I agree to the terms and conditions
//             </Check>
//             <RegisterLink  to="/register">
//             <Button to="/register" >Sign up</Button>
//             </RegisterLink>
//             </Form>
//             <Log>
//             Already have an account?<SigninLink to="/signin"><Span to="/signin"> Sign in</Span></SigninLink>
//             </Log>
//             </FormSide>
//     </Body>
  



    )
}

export default  withRouter(Register)
