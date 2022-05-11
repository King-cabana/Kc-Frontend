import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const ParentBoxOfForgotPassword = styled.div `
width: 100%;

display:flex ;

`
export const ForgotPasswordHeader = styled.div`
text-align: left;
color: green;
margin: 10px;



` 

export const Body = styled.div`
display: flex;
height: 100%;
`

export const SideBar = styled.div`
width: 30%;
background-color: #B6D982;

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

// export const ForgotPasswordHeader = styled.div`
// margin: 20px 0 20px 0;
// align-self: flex-start;
// `

export const FPassHead = styled.h2`
color: #267832;
`

export const FPass = styled.p`
color: #707070;
opacity: 1;
`


export const ForgotPasswordLinks = styled(Link)`
color: white;
@media screen and (max-width: 960px){
      width: 100%;

}
`;



export const Button = styled.button`

background-color: #267832;
border-radius: 6px;
width: 70%;

height: 50px;
margin: 5px;
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
    background:  'blue' };

color: #fff;
font-size: '20px' ;
outline: none;
border: none;
cursor: pointer;
box-shadow: 0px 24px 48px #2C273857;


    @media screen and (max-width: 960px){
      width: 100%;
    }
`
export const ButtonBox = styled.div`
display: flex;

@media screen and (max-width: 960px){
      flex-direction: column;
    }
`


// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 20px;
//   @media screen and (max-width: 820px) {
//     flex-direction: column;
//     width: 80%;
//     }
// `
export const FormSide = styled.div`
width: 70%;
margin: 50px;

@media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }

`;

export const FormInput = styled.input`
  
  padding: 10px 20px;
  border-radius: 2px;
  margin: 15px ;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid green;
  width: 70%;
  
  
  &::placeholder {
    color: #242424;
  
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
