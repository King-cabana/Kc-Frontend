// import React from 'react'
import {  FormInput, Form, Button, EventSponsorHeader,
    TitleImage, ImageButton, EventHeader, ButtonBox } from './EventSponsorElement'
import React,{useState, useRef, useEffect} from 'react'
const EventSponsor = () => {

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
        <Form>
        
        <EventSponsorHeader>
        <h1>Add your sponsor </h1>
        </EventSponsorHeader>

        <EventSponsorHeader>Sponsor name</EventSponsorHeader>
        <FormInput type="textbox" placeholder="Sponsor name" name="event"/>
        <EventSponsorHeader>Sponsor Logo</EventSponsorHeader>



        {preview ? (
   
            <TitleImage src={preview} alt={"preview"} style={{ objectFit: "cover" }} />
           
            
           ) : (
            
           <ImageButton
              onClick={(event) => {
                 event.preventDefault();
                 fileInputRef.current.click();
               }}
             >
               Add sponsor logo
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
        <Button>Save</Button>
        <Button>Skip sponsor</Button>
        </ButtonBox>
        </Form>
        </div>
    )
}

export default EventSponsor
