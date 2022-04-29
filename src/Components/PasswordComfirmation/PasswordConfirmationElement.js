import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const ConfirmPasswordHeader = styled.div`
text-align: center;
color: green;
margin: 20px;
` 

export const SideBarBox = styled.div `
width: 30%;
background-color: #B6D982;
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


export const ParentBoxOfConfirmPassord = styled.div `
width: 100%;

display:flex ;

`

export const SideBarBoxImg = styled.div`
padding: 200px 125px 100px;

@media screen and (max-width: 960px){
  padding: 180px 1px 80px;
}
`
export const ConfirmPasswordLinks = styled(Link)`
color: white;
@media screen and (max-width: 960px){
      width: 100%;

}
`;



export const Button = styled.button`

background-color: green;
border-radius: 4px;
width: 40%;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  
  padding: 10px 20px;
  border-radius: 2px;
  /* margin-right: 10px 10px ; */
  margin: 20px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid green;
  width: 40%;
  
  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
