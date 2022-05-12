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
export const ImgWrap = styled.div`
margin-top: 100px;
`

export const Img = styled.img`
width: 90%;
float: right;
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

@media screen and (max-width: 415px) {
  width: 362px;
}

@media screen and (max-width: 376px) {
  width: 340px;
}

@media screen and (max-width: 361px) {
  width: 320px;
}

@media screen and (max-width: 281px) {
  width: 250px;
}
`

export const TicketHeader = styled.div`
color: #267832;
margin: 30px 10px 10px 10px;

@media screen and (max-width: 820px) {
  margin: 0 10px 10px 10px;
}
`

export const InfoBox = styled.div`
border: none;
opacity: 1;
margin: 20px 0 20px 0;
padding: 20px 40px;
width: 100%;
`

export const FormSquare = styled.div`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 1200px) {
 flex-direction : column;
}
`

export const Sale = styled.div`
display: flex;
flex-direction: column;
`

export const Date1 = styled.div`
display: flex;
flex-direction: column;
margin-left: 15px;
`

export const Date2 = styled.div`
display: flex;
flex-direction: column;
/* margin-left: 20px; */
`

export const Add = styled.button`
background-color: #B6D982;
color: #444;
cursor: pointer;
padding: 18px;
width: 100%;
height: 40px;
border: none;
border-radius: 6px;
text-align: left;
outline: none;
font-size: 15px;
`

export const EventNeedLinks = styled(Link)`
color: white;
@media screen and (max-width: 960px){
      width: 100%;

}
`;

export const Left = styled.div`
display: flex;
flex-direction: column;
margin-right: 30px;

@media screen and (max-width: 1025px) {
  margin: 0;
  width: 100%;
}
`

export const Button = styled.button`
background-color: #267832;
border-radius: 6px;
width: 150px;
height: 50px;
white-space: nowrap;
color: #fff;
outline:none;
border:none;
box-shadow: 0px 10px 20px #2C27381A;
cursor:pointer;


@media screen and (max-width: 960px){
  width: 450px;
  }

@media screen and (max-width: 820px) {
  width: 100%;
  }
`
export const ButtonBox = styled.div`
display: flex;

@media screen and (max-width: 960px){
      flex-direction: column;
      margin-bottom: 20px;
    }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  @media screen and (max-width: 820px) {
    margin: 0 ;
    width: 100%;
  }
`

export const Select = styled.div`
display: flex;
margin-bottom: 40px;
`

export const Choice = styled.button`
margin-right: 20px;
background-color: #fff;
border-radius: 26px;
width: 120px;
height: 40px;
white-space: nowrap;
padding: '12px 64px';
color: #7f7f7f;
font-size: '20px' ;
outline: none;
border: 1px solid #979797;
cursor: pointer;

&:hover {
  color: #fff;
  background-color: #B6D982;
  border: none;
}

@media screen and (max-width: 960px){
  width: 450px;
  }

@media screen and (max-width: 820px) {
  width: 100%;
}
`

export const FormInput = styled.input`
padding: 10px 20px;
border-radius: 6px;
outline: none;
font-size: 16px;
border: 1px solid #267832;
width: 100%;
height: 40px;
box-shadow: 0px 10px 20px #2C27381A;

&::placeholder {
  color: #7f7f7f;
  opacity: 0.5;

}

@media screen and (max-width: 820px) {
  width: 100%;
  margin: 0 0 16px 0;
}
`

export const Qty = styled.input`
padding: 10px 20px;
margin-top: 55px;
margin-left: 15px;
border-radius: 6px;
outline: none;
font-size: 16px;
border: 1px solid #267832;
width: 250px;
height: 40px;
box-shadow: 0px 10px 20px #2C27381A;

&::placeholder {
  color: #7f7f7f;
  opacity: 0.5;

}

@media screen and (max-width: 820px) {
  width: 100%;
  margin: 0 0 16px 0;
}
`

export const Fee = styled.input`
padding: 10px 20px;
margin-top: 55px;
margin-right: 15px;
border-radius: 6px;
outline: none;
font-size: 16px;
border: 1px solid #267832;
width: 250px;
height: 40px;
box-shadow: 0px 10px 20px #2C27381A;

&::placeholder {
  color: #7f7f7f;
  opacity: 0.5;

}

@media screen and (max-width: 820px) {
  width: 100%;
  margin: 0 0 16px 0;
}
`

export const DateBox = styled.div`
display: flex;

@media screen and (max-width: 820px) {
  flex-direction: column;
}
`

export const EventDate = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;

@media screen and (max-width: 1025px) {
  width: 100%;
}

@media screen and (max-width: 820px) {
  margin: 0;
}
`

export const DateInput = styled.input`
padding: 10px 20px;
border-radius: 6px;
outline: none;
border: none;
font-size: 16px;
border: 1px solid #267832;
width: 250px;
height: 40px;
box-shadow: 0px 10px 20px #2C27381A;

@media screen and (max-width: 1024px) {
  width: 100%;
}

@media screen and (max-width: 820px) {
  width: 100%;
  margin: 0 0 16px 0;
}
`

export const FormSelect = styled.select`
  
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px 10px ;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #267832;
  
  &::placeholder {
    color: #242424;
  
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

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

@media screen and (max-width: 415px) {
  width: 300px;
}

@media screen and (max-width: 281px) {
  width: 200px;
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

@media screen and (max-width: 360px) {
  transform: translate(0px, -10px);
  padding: 0 30px 0 0;
}

@media screen and (max-width: 281px) {
  transform: translate(0px, -10px);
  padding: 0 13px 0 0;
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