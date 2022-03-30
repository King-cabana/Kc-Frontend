import React,{useState, useRef, useEffect} from 'react'
import boy from '../../images/boy.png'
import {
  Body,
  SideBar,
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
  DateTime
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
          </Select>
            <FormSquare>
            <Left>
            <FormInput type="textbox" placeholder="Event Name/Title" name="event" />
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
            <FormInput type="text" placeholder="Add Hashtags " name="organiser" />
            </Left>
            <Right>
            <FormSelect>
              <option>Select Event Category</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Hang out</option>
              <option>End of the party</option>
            </FormSelect>

            <RightInput type="text" placeholder="Theme/Description" name="organiser" />
            <RightInput type="text" placeholder="Participation" name="organiser" />

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


export default EventCreation
