import React,{useState, useRef, useEffect} from 'react'
import boy from '../../images/boy.png'
import { RiDashboardFill } from 'react-icons/ri'
import { IoCalendar } from 'react-icons/io5'
import { FaClipboardList } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { AiFillFileText } from 'react-icons/ai'
import {
  Body, SideBar, Menu, MenuButton, MenuLink,
  Main, ImgWrap, Img, Button, Form, InfoBox, FormSquare,
  Left, Right, Select, Choose, Radio, FormInput,
  FormSelect, EventTime, EventStart, EventEnd,
  EventHeader, RightInput, ButtonBox, TicketLink,
  ImageButton, TitleImage, EventDescription, DateTime,
  Bar, Timeline, Line, InnerLine, List, ListNo,
  TimelinePoint, Action, Steps
} from './EventCreationElement'
// import background from '../../images/bg.png'

const EventCreation = () => {

  const [image, setImage] = useState();
  
	const [preview, setPreview] = useState();
	useEffect(() => {
		if (image) {
		  const reader = new FileReader();
		  reader.onloadend = () => {
			setPreview(reader.result );
		  };
		  reader.readAsDataURL(image);
		} else {
		  setPreview(null)
		}
	  }, [image]);
	
	// const reader = new FileReader();
	
	const fileInputRef = useRef();




    return (
        <Body>
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
         <EventHeader>
         <h2>Event details</h2>
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
         </EventHeader>
          <Form>
          <InfoBox>
          <EventHeader>
          <h2>Basic Information</h2>
          </EventHeader>
            <FormSquare>
            <Left>
            <FormInput type="text" placeholder="Event Name/Title" name="event" />
            <FormInput type="text" placeholder="Event Organizer" name="event" />
            <FormInput type="text" placeholder="Add Hashtags" name="event" />
            </Left>
            <Right>
            <FormSelect>
              <option>Theme/Description</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Hang out</option>
              <option>End of the party</option>
            </FormSelect>
            <RightInput type="text" placeholder="No. of attendees/guests" name="event" />
            <RightInput type="text" placeholder="Event Programme/Highlights" name="event" />
            </Right>
            </FormSquare>
          </InfoBox>
          <InfoBox>
          <EventHeader>
          <h2>Location</h2>
          </EventHeader>
          <FormSquare>
          <Left>
          <Select>
            <Choose><Radio type="radio" id="Physical" name="Platform" value="Physical"/><label for='Physical'>Physical</label></Choose>
            <Choose><Radio type="radio" id="Virtual" name="Platform" value="Virtual"/><label for='Virtual'>Virtual</label></Choose>
            <Choose><Radio type="radio" id="Both" name="Platform" value="Both"/><label for='Both'>Both</label></Choose>
          </Select>
            <FormInput type="link" placeholder="Online Link" name="organiser" />
            <FormInput type="text" placeholder="Physical Address" name="organiser" />
          </Left>
          <Right>
              {/*asdf*/}
            {preview ? (
              
              <TitleImage src={preview} alt={"preview"} style={{ objectFit: "cover" }} />
              
              ) : (
              
              <ImageButton
                onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                  }}
                >
                  Add event Image
              </ImageButton>
              )}

            <FormInput input type="file" style={{ display: "none" }}  ref={fileInputRef} 
            accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file && file.type.substr(0, 5) === "image") {
                      setImage(file);
                    } else {
                      setImage(null);
                    }
                  }} />
          </Right>
          </FormSquare>
          </InfoBox>
            

          <InfoBox>
          <EventHeader>
          <h2>Date</h2>
          </EventHeader>
          <FormSquare>
          <Left>
            <Select>
            <Choose><Radio type="radio" id="single" name="Platform" value="single"/><label for='single'>Single Event</label></Choose>
            <Choose><Radio type="radio" id="recurring" name="Platform" value="recurring"/><label for='recurring'>Recurring Event</label></Choose>
            </Select>
            <EventTime>
            <EventStart>
            <EventHeader><label>Start Date</label></EventHeader>
            <DateTime type="date" />
            <EventHeader><label>End Date</label></EventHeader>
            <DateTime type="date" />
            </EventStart>
            <EventEnd>
            <EventHeader><label>Start Time</label></EventHeader>
            <DateTime type="time" />
            <EventHeader><label>End Time</label></EventHeader>
            <DateTime type="time" />
            </EventEnd>
            </EventTime>
          </Left>
          <Right>
            <RightInput type="text" placeholder="Time Zone " name="organiser" />
          </Right>  
          </FormSquare>  
          </InfoBox>

            <ButtonBox>
            <TicketLink to="/event-ticket">
            <Button to="/event-ticket">
               <strong>Save/Next</strong> 
            </Button>
            </TicketLink>
            </ButtonBox>
          </Form>
         </Main>
        </Body>
    )
  }
export default EventCreation;