// import React from 'react'
import {
  FormInput,
  Form,
  Button,
  EventSponsorHeader,
  TitleImage,
  ImageButton,
  EventHeader,
  ButtonBox,
  Skip,
  Note,
  Name,
  Info,
  PopImage,
  PopBox,
  PopHead,
  PopButton
} from './EventSponsorElement'
import PopUp from './PopUp';
import React, {useState, useRef, useEffect} from 'react'
import Banner from '../../images/Banner.png'
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

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


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
        <Skip type='button' value="Skip Sponsor" onClick={togglePopup} />
        </ButtonBox>
        </Form>

        {isOpen && <PopUp
  content={
  <PopBox>
    <PopHead>Preview</PopHead>
    <Note>Ensure that every detail is captured correctly and accurately</Note>
    <PopImage src={Banner} alt="Event Banner" />
    <Name>TECH UNITE AFRICA</Name>
    <Info>
    <p>Wed, Mar 16</p>
    <p>9:00 AM</p>
    <p>Muson Centre • Lagos, LA</p>
    <p>Invite from: Jan 8 - Feb 23</p>
    <p>Expected guest: 74</p>
    <p>Fee: Free </p>
    </Info>
    <PopButton>Create Event</PopButton>
  </PopBox>}
  handleClose={togglePopup}
/>}

</div>
)
}
export default EventSponsor