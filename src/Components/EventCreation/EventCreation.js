import React,{useState, useRef, useEffect} from 'react'

import {Button, Form, FormInput, FormSelect, 
  EventHeader, ButtonBox, DisplayEndTime, FormCheckBox, 
  EventPTag, TicketLink, ImageButton, TitleImage, EventDescription} from './EventCreationElement'

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
        <div>
         <EventHeader>
         <h1> Event details </h1> 
         <p>Say something unique about this event.</p>
         </EventHeader>

         <Form>
           <EventHeader>
                <label><strong>Event title</strong></label>
           </EventHeader>
            <FormInput type="textbox" placeholder="Your event title" name="event" />

            <EventHeader>
                <label><strong>Organiser</strong></label>
            </EventHeader>
            <FormInput type="text" placeholder="Event organiser" name="organiser" />

            <EventHeader><label><strong>Event description</strong></label></EventHeader>
            {/*
            <FormInput type="text" placeholder="Your event description" name="event" />
            */}
            <EventDescription type="text" placeholder="Your event description" name="event" />

            <EventHeader><label><strong>Event category</strong></label></EventHeader>
            <FormSelect>
                <option>Wedding</option>
                <option>Birthday</option>
                <option>Hang out</option>
                <option>End of the party</option>

            </FormSelect>

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
            <Button>Single event</Button>
            <Button>Reorcurring event</Button>
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
         
        </div>
    )
}


export default EventCreation
