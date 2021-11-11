 import React,{useState,useEffect} from 'react'
 import {Nav, 
    NavbarContainer,
     NavLogo, 
    //  NavIcon, 
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavLinks, 
     NavItemBtn, 
     NavBtnLink,
     closeMobileMenu,
     FormInput,
     NavButton,
    Form,
    LogoImg
    } from './Navbar.element'
 import { Button} from '../../globalStyles'
 import {FaBars, FaTimes} from 'react-icons/fa';
 import { IconContext} from 'react-icons/lib'
 import FirstImg from '../../../src/images/logo1.png'
 

// import {Button } from '../../globalStyles';
 //the ../../ means (outside Navbar and outside Component then Globalstyles)
  const Navbar = () => {
      const[click, setClick] = useState(false)
      const[button, setButton] = useState(true)

      const handleClick = () => setClick(!click);
      const closeMobileMenu = () => setClick(false)

      const showButton = () => {
          if(window.innerwidth <= 960){
              setButton(false)
          }else{
              setButton(true)
          }
      }
      useEffect(()=> {
          showButton()
      }, [])

      window.addEventListener('resize', showButton);
     return (
          <>
        <Nav>
        <IconContext.Provider value={{ color: '#fff'}}>
            <NavbarContainer>
           
            <LogoImg>
           <img  src={FirstImg} height={70}/>
            </LogoImg>
            <Form>
         
          <FormInput type="text" placeholder="Search event" />
          
          </Form>

           
            <NavLogo to="/" onClick={closeMobileMenu}>
             {/*<NavIcon/>*/}
            
            </NavLogo>
          
            <MobileIcon onClick={handleClick}>
            {click ? <FaTimes/> : <FaBars/>}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            
            <NavItem>
            <NavLinks to='/'>Home</NavLinks>
            </NavItem>

            <NavItem>
            <NavLinks to='/eventCreation'>Create event</NavLinks>
            </NavItem>

            <NavItem>
            <NavLinks to='/eventblog'>Blog</NavLinks>
            </NavItem>

            

            <NavItemBtn>
            {button ? (
                <NavBtnLink to="/signin">
                <Button primary>Sign in</Button>
                
                </NavBtnLink>
            ):(
                <NavBtnLink to="/sign-up">
                <Button onClick={closeMobileMenu} fontBig primary>
                SIGN UP
                </Button>
                </NavBtnLink>
            )
        }
           
            </NavItemBtn>
           
            </NavMenu>
            
            </NavbarContainer>
            </IconContext.Provider>
        </Nav>
        </>
     );
 };
 export default Navbar
 