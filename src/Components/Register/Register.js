import React,{useState} from 'react'
import axios from 'axios'
// import Signin from '../Signin/Signin'
import { withRouter } from 'react-router'
import { Form, RegisterLink , Button} from './RegisterElement'
import {  SigninLink } from './RegisterElement'
import { FormInput } from './RegisterElement'

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
        <div>
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
    )
}

export default  withRouter(Register)
