import styled from 'styled-components'

import {Link} from 'react-router-dom'

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
  margin-right: 10px 10px ;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid purple;
  width: 25%;
  
  &::placeholder {
    color: #242424;
  
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const EventDescription = styled.textarea`
  
  padding: 10px 20px;

  margin-right: 10px 10px ;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid purple;
  width: 25%;
  height: 100%;
  border-radius: 5px;
  
  &::placeholder {
    color: #242424;
  
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;




export const FormSelect = styled.select`
  
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px 10px ;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid purple;
  
  &::placeholder {
    color: #242424;
  
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
export const EventLink = styled(Link)`
/* color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%; */

@media screen and (max-width: 960px){
      width: 100%;
    }
`

export const SigninLink = styled(Link)`

@media screen and (max-width: 960px){
      width: 100%;
    }
`
export const TicketLink = styled(Link)`
color: white;
@media screen and (max-width: 960px){
      width: 100%;
    }
`

export const Button = styled.button`

background-color: blue;
border-radius: 4px;
width: 150px;
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

export const EventHeader = styled.div`
text-align: center;
color: purple;
margin: 10px;
` 
export const EventPTag = styled.p`
padding-bottom: 5px;
margin: 10px;
`
export const ButtonBox = styled.div`
display: flex;

@media screen and (max-width: 960px){
      flex-direction: column;
    }
`

export const DisplayEndTime = styled.div`
display: flex;
margin: 15px;


@media screen and (max-width: 960px){
      flex-direction: column;
    
    }
`

export const FormCheckBox = styled.input`
  /* padding: 10px 20px; */
  /* border-radius: 2px; */
  margin-right: 100px 50px;
  background-color: red;

`;

export  const TitleImage = styled.img`
 width: 300px;
  height: 200px;
  /* border-radius: 50%; */
  cursor: pointer;
`;

export const ImageButton = styled.button`

display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border: none;
  background: lightpink;
  width: 300px;
  height: 200px;
  border-radius: 5%;
  cursor: pointer;
  
`;
