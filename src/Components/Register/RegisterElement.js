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
  margin: 50px 200px 50px 200px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 6px;
  width: 100%;
  outline: none;
  font-size: 21px;
  font-family: Roboto, sans-serif;
  border: 1px solid #267832;
  margin-bottom: 10px;
  box-shadow: 0px 10px 20px #2C27381A;
  
  &::placeholder {
    color: #7F7F7F;
    opacity: 0.5;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    height: 70px;
    margin: 0 0 16px 0;
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
background-color: #267832;
border-radius: 6px;
box-shadow: 0px 24px 48px #2C273857;
width: 100%;
height: 50px;
white-space: nowrap;
padding: '12px 64px';
color: #fff;
font-size: '20px' ;
outline:none;
border:none;
cursor:pointer;

@media screen and (max-width: 960px){
  width: 100%;
}
`

export const Span = styled.span`
color: #267832;
font-weight: bold;
`