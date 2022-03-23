import React from 'react'
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
    Form,
    ImgWrap,
    Img,
    RegisterLink,
    Button,
    SideBar,
    FormSide,
    Input,
    Check,
    Log,
    Span
} from './RegisterElement'
import { SigninLink } from './RegisterElement'
import { FormInput } from './RegisterElement'
import background from '../../images/bg.png'

function Register () {
    return (
       
        <Body style={{ backgroundImage: `url(${background})`}}>
            <SideBar>
                <ImgWrap>
                <Img src={happyToast} alt='Toast'/>
                </ImgWrap>
            </SideBar>
            <FormSide >
            <Form>
            <FormHeader>Sign Up</FormHeader>
            <FormDesc>Register with
            <Socials>
            <SocialIconLink href="/" target="_blank"
            aria-label="Google">
            <FcGoogle/>
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank"
            aria-label="Facebook">
            <GrFacebook/>
            </SocialIconLink>
            <SocialIconLin href="/" target="_blank"
            aria-label="Apple">
            <FaApple/>
            </SocialIconLin>
            </Socials>
            </FormDesc>
            <FormInput type="text" placeholder="First Name" required />
            <FormInput type="text" placeholder="Last Name" required />
            <FormInput type="email" placeholder="Email" required />
            <FormInput type="password" placeholder="Password " required />
            <Check>
            <Input type="checkbox" id="Agree" name="Agree" value="Agree" required /> I agree to the terms and conditions
            </Check>
            <RegisterLink  to="/register">
            <Button to="/register" >Sign up</Button>
            </RegisterLink>
        </Form>
        <Log>
        Already have an account?<SigninLink to="/signin"><Span to="/signin"> Sign in</Span></SigninLink>
        </Log>
            </FormSide>
            </Body>
    )
}

export default Register
