import React, { useState, useEffect } from "react";
import boy from '../../images/boy.png'
import { RiDashboardFill } from 'react-icons/ri'
import { IoCalendar } from 'react-icons/io5'
import { FaClipboardList } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { AiFillFileText } from 'react-icons/ai'

import { DateBox, Fee, TicketLink, Left, Choice, EventDate, Qty, DateInput, Sale, Date1, Date2, Timeline, Line, InnerLine, List, ListNo, TimelinePoint, Steps, TicketHeader, Add, SideBar, ImgWrap, Img, Menu, MenuButton, MenuLink, Select, ButtonBox, Button, Form, FormInput,FormSelect, EventNeedLinks, Main, Body, InfoBox, FormSquare } from './EventTicketingElement'
import background from '../../images/bg.png'
import { Back } from "../EventCreation/EventCreationElement";

const EventTicketing = () => {
    const [image, setImage] = useState();
	
	// const [preview, setPreview] = useState();
	useEffect(() => {
		if (image) {
		  const reader = new FileReader();
		  reader.onloadend = () => {
			// setPreview(reader.result );
      setImage(reader.result );
		  };
		  reader.readAsDataURL(image);
		} else {
		  // setPreview(null)
      setImage(null)
		}
	  }, [image]);
	
	// const reader = new FileReader();
	
	// const fileInputRef = useRef();

    return (
        <Body style={{ backgroundImage: `url(${background})` }}>
          <SideBar>
            <Menu>
            <MenuLink to="/event-ticket">
            <MenuButton to="/event-ticket">
              <RiDashboardFill /> Dashboard
            </MenuButton>
            </MenuLink>
            <MenuLink to="/event-ticket">
            <MenuButton to="/event-ticket">
              <IoCalendar /> Event Creation
            </MenuButton>
            </MenuLink>
            <MenuLink to="/event-ticket">
            <MenuButton to="/event-ticket">
              <FaClipboardList /> Vendor Management
            </MenuButton>
            </MenuLink>
            <MenuLink to="/event-ticket">
            <MenuButton to="/event-ticket">
              <GiReceiveMoney /> Sponsorship
            </MenuButton>
            </MenuLink>
            <MenuLink to="/event-ticket">
            <MenuButton to="/event-ticket">
              <AiFillFileText /> Reports
            </MenuButton>
            </MenuLink>
            </Menu>
            <ImgWrap>
                <Img src={boy} alt='Boy'/>
            </ImgWrap>
        </SideBar>
        <Main>
        <TicketHeader>
            <h1>Ticket Management</h1>
          <Timeline>
            <Line>
                <InnerLine></InnerLine>
            </Line>
            <List>
                <ListNo>
                    <TimelinePoint>1</TimelinePoint>
                    <Steps>Basic Info</Steps>
                </ListNo>
                <ListNo>
                    <TimelinePoint>2</TimelinePoint>
                    <Steps>Ticket Management</Steps>
                </ListNo>
                <ListNo>
                    <TimelinePoint>3</TimelinePoint>
                    <Steps>Guest Management</Steps>
                </ListNo>
                <ListNo>
                    <TimelinePoint>4</TimelinePoint>
                    <Steps>Preview</Steps>
                </ListNo>
              </List>
         </Timeline>
        </TicketHeader>

           <Form>
           <InfoBox>
           <FormSquare>
           <Left>
            <Select>
              <Choice to="/event-ticket">Free</Choice>
              <Choice to="/event-ticket">Paid</Choice>
            </Select>
            <Sale>
            <FormInput type="textbox" placeholder="Ticket Name/Title" name="ticket" />
            <DateBox>
              <Fee type="textbox" placeholder="Ticket Fee" name="fee" />
            <Qty type="textbox" placeholder="Quantity Available" name="qty" />
            </DateBox>
            </Sale>
           </Left>

           <EventDate>
           <TicketHeader><label>Start Date/Time</label></TicketHeader>
           <DateInput type="datetime-local" />
           <TicketHeader><label>End Date/Time</label></TicketHeader>
           <DateInput type="datetime-local"  />
           </EventDate>
           </FormSquare>
           </InfoBox>
          
           <ButtonBox>
             <Back to="/event-ticket">
               <strong>Previous/Back</strong> 
             </Back>
            <TicketLink to="/eventNeed">
            <Button to="/eventNeed">
               <strong>Save/Next</strong> 
            </Button>
            </TicketLink>
            </ButtonBox>
              
             
           </Form>  
        </Main>  
        </Body>
    )
}

export default EventTicketing
