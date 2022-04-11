import React from "react";
import { Box, CloseIcon, PopupBox } from "./PopUp.elements";
import background from '../../images/bg.png'
 
const PopUp = props => {
  return (
    <PopupBox>
      <Box style={{ backgroundImage: `url(${background})`}}>
        <CloseIcon onClick={props.handleClose}>x</CloseIcon>
        {props.content}
      </Box>
    </PopupBox>
  );
};
 
export default PopUp;