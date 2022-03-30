import styled from 'styled-components'

import {Link} from 'react-router-dom'


export const TicketHeader = styled.div`
text-align: center;
color: purple;
margin: 10px;
` 

export const EventNeedLinks = styled(Link)`
color: white;
@media screen and (max-width: 960px){
      width: 100%;

}
`;



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

