import React, { useState } from 'react'
import { Button, ConfirmPasswordHeader, Form, FormBox,SideBarBoxImg, FormInput, ParentBoxOfConfirmPassord, SideBarBox } from './PasswordConfirmationElement'
import axios from 'axios'
import { withRouter } from 'react-router'
import SideBarPics from  '../../images/SideImg.png'
import Google from  '../../images/Google.png'
import FB from  '../../images/FB.png'
import Apple from  '../../images/Apple.jpg'

const PasswordConfirmation = (props) => {

  const [data, setData] = useState({ password:'', confirmPassword:'' });
    const apiUrl = "http://localhost:8080/eventuser/reset-password";
    
    
    const updatePassword = (e) => {
        e.preventDefault();
        // debugger;   
        const userData = { password: data.password, confirmPassword: data.confirmPassword };
        axios.post(apiUrl, userData)

        .then((result) => {
          if(result.password === result.confirmPassword){alert('password has been reset')}
           
        })
    };
    const onChange = (e) => {
        e.persist();
        // debugger;    
        setData({ ...data, [e.target.name]: e.target.value });
    }

  return (
    <div>
    <ParentBoxOfConfirmPassord>
    {(window.innerWidth > 768)?
      <SideBarBox>
      <SideBarBoxImg>
      <img src={SideBarPics} alt={""} height={250}  width={250} />
      </SideBarBoxImg>
      
      </SideBarBox>:null
  }
          <FormBox>
          <Form onSubmit={updatePassword}>
    <ConfirmPasswordHeader>
    <h1>Reset Password</h1>
    <p>Please enter new password in fields below</p>
    </ConfirmPasswordHeader>
     
    <FormInput type="password" placeholder="New password" name="password" onChange={onChange}/>
   
    <FormInput type="password" placeholder="Confirm new password" name="confirmpassword"  onChange={onChange}/>
 
    <Button>
    <strong>Reset Password</strong>
    </Button>
    </Form>
 
          </FormBox>
    </ParentBoxOfConfirmPassord>
       </div>
  )
}

export default PasswordConfirmation