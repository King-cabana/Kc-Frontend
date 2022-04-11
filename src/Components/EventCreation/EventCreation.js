import React,{useState, useRef, useEffect} from 'react'
import boy from '../../images/boy.png'
<<<<<<< HEAD
import { RiDashboardFill } from 'react-icons/ri'
import { IoCalendar } from 'react-icons/io5'
import { FaClipboardList } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'
import { AiFillFileText } from 'react-icons/ai'
import {
  Body,
  SideBar,
  Menu,
  MenuButton,
  MenuLink,
=======
import {
  Body,
  SideBar,
>>>>>>> 47542899ceebd2b535d153be87c9affb9665137d
  Main,
  ImgWrap,
  Img,
  Button,
  Form,
  FormSquare,
  Left,
  Right,
  Select,
  Choose,
  Radio,
  FormInput,
  FormSelect,
  EventTime,
  EventStart,
  EventEnd,
  EventHeader,
  RightInput,
  ButtonBox,
  TicketLink,
  ImageButton,
  TitleImage,
  EventDescription,
<<<<<<< HEAD
  DateTime,
  Timeline,
  Line,
  InnerLine,
  List,
  ListNo,
  TimelinePoint,
  Action,
  Steps
=======
  DateTime
>>>>>>> 47542899ceebd2b535d153be87c9affb9665137d
} from './EventCreationElement'
import background from '../../images/bg.png'

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
        <Body style={{ backgroundImage: `url(${background})`}}>
          <SideBar>
<<<<<<< HEAD
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
         <h1>Event details</h1>
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
          <Select>
            <Choose><Radio type="radio" id="Physical" name="Platform" value="Physical"/><label for='Physical'>Physical</label></Choose>
            <Choose><Radio type="radio" id="Virtual" name="Platform" value="Virtual"/><label for='Virtual'>Virtual</label></Choose>
            <Choose><Radio type="radio" id="Both" name="Platform" value="Both"/><label for='Both'>Both</label></Choose>
=======
                <ImgWrap>
                <Img src={boy} alt='Boy'/>
                </ImgWrap>
            </SideBar>
         <Main>
         <EventHeader>
         <h1>Event details</h1>
         </EventHeader>
          <Form>
          <Select>
            <Choose><Radio type="radio" id="Physical" name="Platform" value="Physical"/>Physical</Choose>
            <Choose><Radio type="radio" id="Virtual" name="Platform" value="Virtual"/>Virtual</Choose>
            <Choose><Radio type="radio" id="Both" name="Platform" value="Both"/>Both</Choose>
>>>>>>> 47542899ceebd2b535d153be87c9affb9665137d
          </Select>
            <FormSquare>
            <Left>
            <FormInput type="textbox" placeholder="Event Name/Title" name="event" />
<<<<<<< HEAD
            <FormInput type="text" placeholder="Venue" name="organiser" />
            <FormInput type="link" placeholder="Link" name="organiser" />
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
            <FormInput type="text" placeholder="Event Programme " name="organiser" />
=======
            <FormInput type="text" placeholder="Venue/Link" name="organiser" />
            <EventTime>
            <EventStart>
            <EventHeader><label>Start Date/Time</label></EventHeader>
            <DateTime type="date" />
            <DateTime type="time" />
            </EventStart>
            <EventEnd>
            <EventHeader><label>End Date/Time</label></EventHeader>
            <DateTime type="date" />
            <DateTime type="time" />
            </EventEnd>
            </EventTime>
>>>>>>> 47542899ceebd2b535d153be87c9affb9665137d
            <FormInput type="text" placeholder="Add Hashtags " name="organiser" />
            </Left>
            <Right>
            <FormSelect>
<<<<<<< HEAD
              <option>Theme/Description</option>
=======
              <option>Select Event Category</option>
>>>>>>> 47542899ceebd2b535d153be87c9affb9665137d
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Hang out</option>
              <option>End of the party</option>
            </FormSelect>

<<<<<<< HEAD
            <RightInput type="text" placeholder="Participation" name="organiser" />
            <RightInput type="text" placeholder="No of attendees/guests" name="organiser" />
            <RightInput type="text" placeholder="Time Zone " name="organiser" />
=======
            <RightInput type="text" placeholder="Theme/Description" name="organiser" />
            <RightInput type="text" placeholder="Participation" name="organiser" />
>>>>>>> 47542899ceebd2b535d153be87c9affb9665137d

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
            <ButtonBox>
<<<<<<< HEAD
            <TicketLink to="/event-ticket">
            <Button to="/event-ticket">
               <strong>Save/Next</strong> 
            </Button>
            </TicketLink>
=======
            <Button >
               <TicketLink to="/event-ticket">
               <label><strong>Save</strong></label>
               </TicketLink>
            </Button>
>>>>>>> 47542899ceebd2b535d153be87c9affb9665137d
            </ButtonBox>
          </Form>
         </Main>
        </Body>
    )
}


export default EventCreation
