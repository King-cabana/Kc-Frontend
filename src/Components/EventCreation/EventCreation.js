import React,{useState, useRef, useEffect} from 'react'

import {Button, Form, FormInput, FormSelect, 
  EventHeader, ButtonBox, DisplayEndTime, FormCheckBox, 
  EventPTag, TicketLink, ImageButton, TitleImage, Body,SideBar,Menu, MenuLink, 
  MenuButton, RiDashboardFill, IoCalendar,
  EventDescription} from './EventCreationElement'

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
    // return (
    //     <div>
    //      <EventHeader>
    //      <h1> Event details </h1> 
    //      <p>Say something unique about this event.</p>
    //      </EventHeader>

    //      <Form>
    //        <EventHeader>
    //             <label><strong>Event title</strong></label>
    //        </EventHeader>
    //         <FormInput type="textbox" placeholder="Your event title" name="event" />


    //         <EventHeader><label><strong>Event description</strong></label></EventHeader>
    //         {/*
    //         <FormInput type="text" placeholder="Your event description" name="event" />
    //         */}
    //         <EventDescription type="text" placeholder="Your event description" name="event" />


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
          <Choice to="/event-ticket">Physical</Choice>
          <Choice to="/event-ticket">Virtual</Choice>
          <Choice to="/event-ticket">Both</Choice>
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
            <Choice to="/event-ticket">Single Event</Choice>
            <Choice to="/event-ticket">Recurring Event</Choice>
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

           <EventHeader>
                <h1>Location</h1>
                <p>Help attendees know where your event is going to hold</p>
           </EventHeader>
           
            <ButtonBox>
            <Button>Venue</Button>
            <Button>Online</Button>
            <Button>Will get intouch</Button>
            </ButtonBox>


            <EventHeader>
            <label><strong>Hashtag</strong></label>
        </EventHeader>
        <FormInput type="text" placeholder="Create event hashtag" name="organiser" />

            <EventHeader>
                <h1>Date and time</h1>
                <p>Help attendees know when your event is going to hold</p>
            </EventHeader>
           
            <ButtonBox>
            <TicketLink to="/event-ticket">
            <Button to="/event-ticket">
               <strong>Save/Next</strong> 
            </Button>
            </TicketLink>
            </ButtonBox>
            <EventHeader><label>Start date</label></EventHeader>
            <FormInput type="date"  placeholder="1/13/2021"/>
            <EventHeader><label>End date</label></EventHeader>
            <FormInput type="date"  placeholder="1/13/2021"/>

            <EventHeader><label>Start time</label></EventHeader>
            <FormInput type="time"  placeholder="8:00 PM"/>
            <EventHeader><label>End time</label></EventHeader>
            <FormInput type="time"  placeholder="8:00 PM"  />

            <DisplayEndTime>

                 <FormCheckBox type="checkbox"/> 
                 
                <EventPTag>Display start time</EventPTag>

                <FormCheckBox type="checkbox" />
                <EventPTag>
                Display end time
                </EventPTag>
            </DisplayEndTime>

           

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

             
            <EventHeader><label><strong>Your event image</strong></label></EventHeader>
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
          
                  

            <ButtonBox>
            <Button >
               <TicketLink to="/event-ticket">
               <label><strong>Save</strong></label>
               </TicketLink>
            </Button>
            
            </ButtonBox>
         </Form>

         
         
        
        </Main>
        </Body>
        
    )
  }

export default EventCreation;