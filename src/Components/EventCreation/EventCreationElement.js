import styled from 'styled-components'
import {Link} from 'react-router-dom'

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

export const Main = styled.div`
margin: 50px 0 50px 100px;
width: 70%;
height: 100%;

@media screen and (max-width: 1280px) {
  margin: 50px 0 50px 50px;
}

@media screen and (max-width: 1024px) {
  margin: 50px 0 50px 120px;
}

@media screen and (max-width: 960px) {
    width: 100%;
    margin: 50px 0 50px 200px;
}

@media screen and (max-width: 820px) {
    margin: 50px 20px 0 20px;
}
`

export const ImgWrap = styled.div`
margin-top: 100px;
`

export const Img = styled.img`
width: 90%;
float: right;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
  }
`;

export const FormSquare = styled.div`
display: flex;

@media screen and (max-width: 1024px) {
 flex-direction : column;
}
`

export const Left = styled.div`
display: flex;
flex-direction: column;
margin-right: 30px;

@media screen and (max-width: 820px) {
  margin: 0;
}
`

export const Right = styled.div`
display: flex;
flex-direction: column;
`

export const Select = styled.div`
display: flex;
margin-bottom: 20px;
`

export const Choose = styled.div`
margin-right: 50px;
`

export const Radio = styled.input`
margin-right: 10px;
box-shadow: 0px 10px 20px #2C27381A;

&::placeholder {
    color: #7F7F7F;
    opacity: 0.5;

  }
`

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 6px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #267832;
  width: 450px;
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

export const RightInput = styled.input`
padding: 10px 20px;
border-radius: 6px;
margin-bottom: 20px;
outline: none;
border: none;
font-size: 16px;
border: 1px solid #267832;
width: 300px;
box-shadow: 0px 10px 20px #2C27381A;

&::placeholder {
    color: #7F7F7F;
    opacity: 0.5;
  }

  @media screen and (max-width: 1024px) {
    width: 450px;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`

export const DateTime = styled.input`
  padding: 10px 20px;
  border-radius: 6px;
  margin-bottom: 20px;
  outline: none;
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

export const FormSelect = styled.select`
  padding: 10px 20px;
  border-radius: 6px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #267832;
  width: 300px;
  box-shadow: 0px 10px 20px #2C27381A;
  
  &::placeholder {
    color: #7F7F7F;
    opacity: 0.5;
  }

  @media screen and (max-width: 1024px) {
    width: 450px;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const EventTime = styled.div`
display: flex;
width: 100%;

@media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const EventStart = styled.div`
display: flex;
flex-direction: column;
margin-right: 20px;

@media screen and (max-width: 820px) {
    margin: 0;
  }
`

export const EventEnd = styled.div`
display: flex;
flex-direction: column;
margin-left: 20px;

@media screen and (max-width: 820px) {
    margin: 0;
  }
`

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
      width: 450px;
    }
`
export const TicketLink = styled(Link)`
color: white;
text-decoration: none;

@media screen and (max-width: 960px){
    width: 450px;
    }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`

export const Button = styled.button`
background-color: #267832;
border-radius: 6px;
width: 150px;
height: 50px;
margin-bottom: 10px;
white-space: nowrap;
padding: '12px 64px';
color: #fff;
font-size: '20px' ;
outline: none;
border: none;
box-shadow: 0px 10px 20px #2C27381A;
cursor: pointer;

  @media screen and (max-width: 960px){
    width: 450px;
    }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`

export const EventHeader = styled.div`
color: #267832;
margin: 10px;
` 

export const ButtonBox = styled.div`
display: flex;

@media screen and (max-width: 960px){
      flex-direction: column;
    }
`

export  const TitleImage = styled.img`
  width: 300px;
  height: 149px;
  margin-bottom: 20px;
  border-radius: 6px;
  box-shadow: 0px 10px 20px #2C27381A;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 450px;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

export const ImageButton = styled.button`
display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  border: 1px solid #267832;
  margin-bottom: 20px;
  background: #fff;
  width: 300px;
  height: 149px;
  border-radius: 6px;
  box-shadow: 0px 10px 20px #2C27381A;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 450px;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;
