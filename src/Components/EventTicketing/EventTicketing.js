import React, { useState, useEffect } from "react";

import { TicketHeader, ButtonBox, Button, Form, FormInput,FormSelect, EventNeedLinks } from './EventTicketingElement'

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
        <div>
            <TicketHeader>
                <h1>Create your event ticket</h1>
            </TicketHeader>

           <Form>
           <ButtonBox>
           <Button>Paid</Button>
           <Button>Free</Button>
           <Button>Donation</Button>
           </ButtonBox>
           <TicketHeader>Ticket name</TicketHeader>
           <FormInput type="textbox" placeholder="General ticket" name="ticket" />

           

           <TicketHeader>Availability quantity</TicketHeader>
           <FormInput type="textbox" placeholder="20" name="qty" />
          

           <TicketHeader>Ticket price</TicketHeader>
           <FormInput type="textbox" placeholder="$0.00" name="qty" />

           <TicketHeader><label>Start date</label></TicketHeader>
           <FormInput type="date"  placeholder="1/13/2021"/>
           <TicketHeader><label>End date</label></TicketHeader>
           <FormInput type="date"  placeholder="1/13/2021"/>
           <TicketHeader><label>Start time</label></TicketHeader>
           <FormInput type="time"  placeholder="1/13/2021"/>
           <TicketHeader><label>End time</label></TicketHeader>
           <FormInput type="time"  placeholder="1/13/2021"/>

            
           <TicketHeader><label><strong>When are ticket available</strong></label></TicketHeader>
           <FormSelect>
                <option>Date & time</option>
                <option>Available till second to the last day of event</option>
                <option>When sales ends for</option>
                
               

            </FormSelect>
          
            <ButtonBox>
            <Button>
            <EventNeedLinks to="/eventNeed">
            <label><strong>Save</strong></label>
            </EventNeedLinks>
            </Button>
            </ButtonBox>
            
           </Form>
          
        </div>
    )
}

export default EventTicketing
