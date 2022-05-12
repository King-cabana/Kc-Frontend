import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Body = styled.div`
display: flex;
height: 100%;
`

export const SideBar = styled.div`
width: 30%;
background: #B6D982;

@media screen and (max-width: 960px) {
  width: 0;
}
`

export const ImgWrap = styled.div`
margin-top: 100px;
`

export const Img = styled.img`
width: 90%;
float: right;
`

export const FormSide = styled.div`
width: 70%;
margin: 50px;

@media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const FormHeader = styled.h2`
color: #267832;
align-self: flex-start;

@media screen and (max-width: 960px) {
  margin-bottom: 15px;
}
`

export const FormDesc = styled.p`
color: #7F7F7F;
margin-bottom: 20px;
align-self: flex-start;
display: flex;
flex-direction: row;

@media screen and (max-width: 960px) {
  margin-bottom: 50px;
}
`

export const Socials = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 80px;
margin-left: 10px;
`

export const SocialIconLink = styled.a`
font-size: 17px;
color: #4267B2;
`

export const SocialIconLin = styled.a`
font-size: 17px;
color: #696969;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 487px;
  margin: 10px 200px 10px 200px;
  /* margin:20px ; */

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }
`;

export const ParentBoxOfSignIn = styled.div `
width: 100%;

display:flex ;

`

export const SideBarBox = styled.div `
width: 30%;
background-color: #B6D982;
`

export const SideBarBoxImg = styled.div`
padding: 200px 125px 100px;

@media screen and (max-width: 960px){
  padding: 180px 1px 80px;
}
`

export const FormBox = styled.div`
/* width: 70%; */
width: 100% ;
/* padding-left:-150px; */
padding-left: 0%;
color: green;
margin: 20px;

@media screen and (max-width: 768px) {
    flex-direction: column;
    /* width: 80%; */
    padding:2px;
  }
`

export const SignInHeader = styled.div`
text-align: center;
color: green ;

/* margin: 10px; */
` 

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin: 10px ;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid green;
  
  &::placeholder {
    color: #242424;
  
  }

  @media screen and (max-width: 768px) {
    width: 50%;
    margin: 0 0 16px 0;
    float: left;
  }

  
`;

export const Log = styled.p`
color: #267832;

@media screen and (max-width: 1024px) {
    margin-top: 10px;
  }
`

export const RegisterLink = styled(Link)`
width: 100%;

@media screen and (max-width: 960px){
      width: 100%;
    }
`

export const SigninLink = styled(Link)`
text-decoration: none;

@media screen and (max-width: 960px){
      width: 100%;
    }

`

export const Input = styled.input`
background: #FFFFFF;
margin: 0;
`

export const Check = styled.div`
color: #7F7F7F;
font-size: 14px;
margin-top: 10px;
margin-bottom: 30px;
align-self: flex-start;
;
`

export const Button = styled.button`
background-color: green;
border-radius: 4px;
width: 250px;
height: 50px;
margin: 10px;
white-space: nowrap;
padding: '12px 64px';
color: #fff;
font-size: '20px' ;
outline:none;
border:none;
cursor:pointer;

&:hover{
    transition: all 0.3s ease-out;
    background: lightgreen;
  };

    @media screen and (max-width: 768px){
      width: 100%;
    }
`

export const Span = styled.span`
color: #267832;
font-weight: bold;
`

export const IconBox = styled.div `
/* margin: 10px */
float:center;
padding-left:320px ;
display:flex ;


@media screen and (max-width: 768px) {
    /* flex-direction: column; */
   
    /* align-self: flex-start ; */
    /* padding:2px; */
    float: left ;
    margin: 10px ;
  }
`

export const IconContainer = styled.div` 
margin: 5px ;
`

export const CheckBox = styled.div`
 padding-left:110px;
align-self: flex-start ;

@media screen and (max-width: 768px) {
    /* flex-direction: column; */
   
    align-self: flex-start ;
    padding:2px;
  }
`

export const BelowBox = styled.div`
display: flex;
width:100% ;
/* background-color: grey ; */
`
export const BelowBoxSignIn = styled.div`
/* float: left ; */
/* background-color: pink ; */
padding-left:5%;
`
export const BelowBoxForgotPassword = styled.div`
/* float: right ; */
/* width:40px; */
/* background-color: red ; */
padding-right: 10%;
`

