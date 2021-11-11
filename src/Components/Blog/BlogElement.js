import styled from "styled-components";
import {Link} from "react-router-dom"

export const InfoBlog = styled.div`
/* margin-bottom: 15px; */
padding-right: 15px;
padding-left: 70px;
flex: 1;
max-width: 50%;
/* flex-basis: 50%; */

@media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: column;
    justify-content: center;
}
`;

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15;
flex-wrap: wrap;
/* align-items: center; */
flex-direction: ${
({imgStart}) => (imgStart ? 'row-reverse' : 'row')
 }
`;

export const BlogLink = styled(Link)`

`
export const Heading = styled.h3`
margin-bottom: 15px;
font-size: 30px;
line-height: 1.1;
/* padding-left: 50px; */
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`  
/* max-width: 440px; */
max-width: 520px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;

@media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: column;
    justify-content: center;
}

`

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;

`