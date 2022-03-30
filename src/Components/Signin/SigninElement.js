import styled from 'styled-components';
import {Link} from 'react-router-dom';
import pics from  '../../images/bg.png'

export const ParentBoxOfSignIn = styled.div `
width: 100%;

display:flex ;

`

export const CheckBox = styled.div`
 padding-left:215px;
align-self: flex-start ;

@media screen and (max-width: 768px) {
    /* flex-direction: column; */
   
    align-self: flex-start ;
    padding:2px;
  }

`

export const IconAndPassLinkParentBox = styled.div `
width: 100%;
color: green;
/* display:flex ; */
`

export const PassLinktext = styled.div `
float: left;
color: green ;
`

export const IconBox = styled.div `
/* margin: 10px */
float:right ;
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



export const SignInHeader = styled.div`
text-align: center;
color: green ;
margin: 10px;
` 

export const FormBox = styled.div`
width: 70%;
padding-left:50px;
color: green;
margin: 40px;

@media screen and (max-width: 768px) {
    flex-direction: column;
    /* width: 80%; */
    padding:2px;
  }
`

export const SideBarBox = styled.div `
width: 30%;
background-color: #B6D982;
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

export const SideBarBoxImg = styled.div`
padding: 200px 125px 100px;

@media screen and (max-width: 960px){
  padding: 180px 1px 80px;
}
`
export const FormInput = styled.input`
  
  padding: 10px 20px;
  border-radius: 2px;
  margin: 15px ;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid green;
  
  &::placeholder {
    color: #242424;
  
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const RegisterLink = styled(Link)`

@media screen and (max-width: 760px){
      width: 100%;
    }
`

export const SigninLink = styled(Link)`

@media screen and (max-width: 960px){
      width: 100%;
    }

`

export const Button = styled.button`
background-color: green;
border-radius: 4px;
width: 150px;
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