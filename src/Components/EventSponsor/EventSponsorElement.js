import styled from 'styled-components'

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

export const EventSponsorHeader = styled.div`
text-align: center;
color: purple;
margin: 10px;
` 

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
  width:200px;
  height: 100px;
  border-radius: 5%;
  cursor: pointer;
  
`;

export const EventHeader = styled.div`
text-align: center;
color: purple;
margin: 10px;
` 

export const ButtonBox = styled.div`
display: flex;
`
// <<<<<<< HEAD
// =======

export const Skip = styled.input`
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

export const Name = styled.h2`
color: #7F7F7F;
`

export const Info = styled.div`
color: #707070C7;
`

export const PopImage = styled.img`
border-radius: 20px;
margin: 30px 0 10px 0;
width: 18vw;
height: 150px;

@media screen and (max-width: 612px) {
  width: 100%;
}
`

export const Note = styled.div`
font-size: 14px;
color: #707070C7;
`

export const PopBox = styled.div`
width: 25vw;
margin: auto;

@media screen and (max-width: 612px) {
  width: 50vw;
}
`

export const PopHead = styled.h1`
margin-top: 30px;
color: #267832;
`

export const PopButton = styled.button`
margin: 30px 0 30px 0;
background-color: #267832;
border-radius: 6px;
width: 100%;
height: 50px;
white-space: nowrap;
padding: '12px 64px';
color: #fff;
font-size: '20px' ;
outline: none;
border: none;
box-shadow: 0px 24px 48px #2C273857;
cursor: pointer;
`
// >>>>>>> 1a968c2c3b4d39bddcdfedf678828b4f12f55703
