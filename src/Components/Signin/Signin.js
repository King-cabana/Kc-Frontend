import React, { useState } from 'react'
import axios from 'axios'
import { RegisterLink } from '../Register/RegisterElement'
import { Form, FormInput, SigninLink, Button, SignInHeader,ParentBoxOfSignIn, FormBox, SideBarBox, SideBarBoxImg, IconAndPassLinkParentBox, PassLinktext, IconBox, IconContainer, CheckBox } from './SigninElement'
import { withRouter } from 'react-router'
import pics from  '../../images/bg.png'
import SideBarPics from  '../../images/SideImg.png'
import Google from  '../../images/Google.png'
import FB from  '../../images/FB.png'
import Apple from  '../../images/Apple.jpg'

const Signin = (props) => {
    const [data, setData] = useState({ email: '', password: '' });
    const apiUrl = "http://localhost:8080/login";

    const Login = (e) => {
        e.preventDefault();
        // debugger;   
        const userData = { email: data.email, password: data.password };
        axios.post(apiUrl, userData)

        .then((result) => {
            if (result.status === 200  ) {
                localStorage.setItem('data', JSON.stringify(result.data.data));
                props.history.push('/dashboard')
                console.log("Data",result)
            }

            else {
                alert('Invalid User');
            }
        })
    };

    const onChange = (e) => {
        e.persist();
        // debugger;    
        setData({ ...data, [e.target.name]: e.target.value });
    }

    return (
        <div style={{ backgroundImage: `url(${pics})` }}>
        <ParentBoxOfSignIn>
        {(window.innerWidth > 768)?
            <SideBarBox>
            <SideBarBoxImg>
            <img src={SideBarPics} alt={""} height={250}  width={250} />
            </SideBarBoxImg>
            
            </SideBarBox>:null
        }
            <FormBox>
            <SignInHeader>
                <h1>Sign in</h1>
                <p>Log in to manage your account</p>
            </SignInHeader>
         
            
            <Form onSubmit={Login} >
                
                
                <FormInput type="email" placeholder="Email " id="email" required
                    onChange={onChange} name="email" value={data.email}
                />

             
                <FormInput type="password" placeholder="Password" id="password" required
                    value={data.password} onChange={onChange} name="password"
                />

                <CheckBox>
                <FormInput type="checkbox"/>Remember me
                </CheckBox>
               
               
                <Button type="submit">Sign in</Button>

                



            </Form>
            <IconAndPassLinkParentBox>
            <PassLinktext>
            <p >Don't have an account?  <a href='/register'  ><strong >Signup here</strong></a> </p>
            <p> <a href='/forgetPassword'><strong>Forgot password</strong></a></p>
            </PassLinktext>

           
            <IconBox>
            <IconContainer> <img src={Google} alt={""} height={30}  width={30} /></IconContainer>
            <IconContainer> <img src={FB} alt={""} height={30}  width={30} /></IconContainer>
            <IconContainer><img src={Apple} alt={""} height={30}  width={30} /></IconContainer>
            </IconBox>
            
            </IconAndPassLinkParentBox>
           
           
           
            </FormBox>
            
        </ParentBoxOfSignIn>
            
        </div>
    )
}

export default withRouter(Signin)


