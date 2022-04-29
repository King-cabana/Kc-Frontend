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

export const Menu = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 20px;
`

export const MenuButton = styled.button`
background: none;
color: #267832;
width: 100%;
height: 50px;
text-align: left;
padding-left: 100px;
white-space: nowrap;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;

&:hover {
  background: transparent linear-gradient(180deg, #A8C9AD 0%, #267832 100%) 0% 0% no-repeat padding-box;
  font-weight: bold;
}

@media screen and (max-width: 960px) {
  width: 0;
  display: none;
}
`

export const MenuLink = styled(Link)`
text-decoration: none;
`

export const Main = styled.div`
margin: 50px 20px 50px 20px;
width: 70%;
height: 100%;

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

export const Bar = styled.div``

export const Timeline = styled.section`
margin: 30px 0;
padding: 15px;
`

export const Line = styled.div`
background: #D4F51B;
width: 750px;
height: 4px;
border-radius: 12px;
position: relative;

@media screen and (max-width: 1280px) {
  width: 500px;
}

@media screen and (max-width: 1024px) {
  width: 400px;
}

@media screen and (max-width: 412px) {
  width: 300px;
}
`

export const InnerLine = styled.span`
position: relative;
background: #267832;
width: 2%;
height: 4px;
top: 0%;
left: 0%;
transition: 3s linear;
border-radius: 999px;
`

export const List = styled.ul`
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
list-style: none;
padding: 0;
`

export const ListNo = styled.li`
position: relative;
`

export const TimelinePoint = styled.span`
border: none;
position: absolute;
text-align: center;
justify-items: center;
border-radius: 50%;
background: white;
width: 20px;
height: 20px;
top: -40px;
left: 0;
transition: 1.5s ease;
box-shadow: 0px 3px 6px #00000029;

@media screen and (max-width: 1280px) {
  left: -100px;
}

@media screen and (max-width: 1024px) {
  left: -60px;
}

@media screen and (max-width: 412px) {
  left: 0px;
}
`

export const Action = styled.span`
opacity: 0;
transition: 1.5s;
font-size: 12px;
position: relative;
top: -60px;
left: 100%;
`

export const Steps = styled.p`
transform: translate(-20px, -10px);
opacity: 1;
padding: 0 159px 0 0;
font-size: 12px;
transition: 1.5s;

@media screen and (max-width: 1280px) {
  transform: translate(-100px, -10px);
  padding: 0 80px 0 0;
}

@media screen and (max-width: 1024px) {
  transform: translate(-60px, -10px);
  padding: 0 45px 0 0;
}

@media screen and (max-width: 412px) {
  transform: translate(0px, -10px);
  padding: 0 40px 0 0;
}
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

export const InfoBox = styled.div`
border: 1px solid #707070;
border-radius: 8px;
opacity: 1;
margin: 20px 0 20px 0;
padding: 20px 40px;
`

export const FormSquare = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 1200px) {
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

@media screen and (max-width: 412px) {
 margin-right : 30px;
}
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

  @media screen and (max-width: 1200px) {
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

  @media screen and (max-width: 1200px) {
    width: 450px;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const EventTime = styled.div`
display: flex;
width: 450px;

@media screen and (max-width: 820px) {
    flex-direction: column;
    width: 100%;
  }
`

export const EventStart = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-right: 20px;

@media screen and (max-width: 820px) {
    margin: 0;
  }
`

export const EventEnd = styled.div`
display: flex;
flex-direction: column;
width: 100%;
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
text-decoration: none;
width: 150px;
height: 50px;

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
margin-bottom: 20px;

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

  @media screen and (max-width: 1200px) {
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

  @media screen and (max-width: 1200px) {
    width: 450px;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`
