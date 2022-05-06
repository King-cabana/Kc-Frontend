import styled from 'styled-components'

import {Link} from 'react-router-dom'


export const ForgotPasswordHeader = styled.div`
text-align: center;
color: purple;
margin: 20px;

` 

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


background-color: blue;
border-radius: 4px;
width: 150px;

background-color: #267832;
border-radius: 6px;
width: 100%;

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
    background: purple;
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
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 487px;
  margin: 50px 200px 200px 200px;

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0;

  }
`;

export const FormInput = styled.input`
  
  padding: 10px 20px;

  border-radius: 2px;
  margin-right: 10px 10px ;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid purple;
  width: 25%;
  
  &::placeholder {
    color: #242424;
  border-radius: 6px;
  margin-bottom: 30px;
  outline: none;
  font-size: 21px;
  font-family: Roboto, sans-serif;
  border: none;
  font-size: 16px;
  border: 1px solid #267832;
  width: 100%;
  box-shadow: 0px 10px 20px #2C27381A;
  
  &::placeholder {
    color: #7F7F7F;
    opacity: 0.5;

  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
