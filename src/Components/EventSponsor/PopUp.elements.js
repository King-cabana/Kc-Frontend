import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const PopupBox = styled.div`
position: fixed;
background: transparent linear-gradient(180deg, #D4F51B 0%, #267832 100%) 0% 0% no-repeat padding-box;
opacity: 1;
width: 100%;
height: 100vh;
top: 0;
left: 0;
`
export const Box = styled.div`
position: relative;
width: 70%;
margin: 0 auto;
height: auto;
max-height: 75vh;
margin-top: calc(100vh - 85vh);
background: #fff;
border-radius: 4px;
padding: 20px;
border: none;
border-radius: 31px;
overflow: auto;
`
export const CloseIcon = styled.span`
content: 'x';
cursor: pointer;
position: fixed;
left: calc(16%);
top: calc(100vh - 83vh);
background: #fff;
color: #267832;
width: 25px;
height: 25px;
border-radius: 50%;
line-height: 20px;
text-align: center;
border: none;
font-size: 20px;
`