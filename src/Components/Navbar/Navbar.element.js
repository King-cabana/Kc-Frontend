import styled from 'styled-components'
import { Container} from '../../globalStyles'
import FirstImg from '../../../src/images/svg2.svg'

// import {FaMagento} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export const Nav = styled.nav`
background: #fff;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0px;
z-index:999;
`

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`
export const NavLogo = styled(Link)`

color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;

`
export const NavIcon = styled(FirstImg)`

margin-right: 0.5rem;
`
export const MobileIcon = styled.div`
display: none;
padding-top: 15px;
/* @media screen and (max-width:960px){ */
@media screen and (max-width:768px){
    display:block;
    position: absolute;
    background-color:green;
    float: center;
    top: 0;
    right: 0;
    transform: tanslate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
export const  NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
font-size: 15px;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 90vh;
    position: absolute;
    top: 60.2px;
    
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity:1;
    transition: all 0.5s ease;
    /* background: #101522; */
    background: purple;
    
}
`
export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover{
    border-bottom: 2px solid #4b59f7;
}
@media screen and (max-width:960px){
    width: 100%;
    
    &:hover{
        border:none;
    }

}
`

export const NavLinks = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;


@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover{
        color: #4b59f7;
        transition: all 0.3s ease;
    }
}
`;
export const NavItemBtn = styled.li`
display: flex;
@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
}
`
export const NavBtnLink = styled(Link)`
display: flex;
justify-content: space-around;

align-items: center;
text-decoration: none;
padding-bottom: 25px ;
height: 60%;
width: 80%;
border: none;
outline: none; 
margin-top: 20px ;
color: green;

@media screen and(max-width:960px){
   
  }
`
export const closeMobileMenu = styled.div`

`
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: left;
  padding-top: 8px;
  height: 60px;
 
  margin: 6px;
 
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
    margin: 15px;

  }
`;

export const FormInput = styled.input`
  
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px 10px ;
  outline: none;
  border: none;
  width: 100%;
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

export const NavButton = styled.button`

border-radius: 4px;
background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB')};
white-space: nowrap;
padding: ${({big})=> (big ? '12px 64px' : '10px 20px')};

margin-bottom: 50px;
/* padding-top: 10px; */
color: #fff;
font-size: ${({ fontBig})=> (fontBig ? '20px' : '16px')};
outline:none;
border:none;
cursor:pointer;


&:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? '#0467FB' : '#4B59F7')};

    @media screen and (max-width: 960px){
      width: 100%;
      padding-bottom: 50px;
    }
}
`

export const LogoImg = styled.div`
margin-top:5px;
display: flex

`

export const FormSelect = styled.select`
  
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px 10px ;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid purple;
  
  &::placeholder {
    color: #242424
  }
  `