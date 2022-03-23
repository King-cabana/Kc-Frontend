import styled from 'styled-components'


export const InfoSec = styled.div`
color: red;
padding: 16px 0;  
/* background: ${({lightBg}) => (lightBg ? '#fff' : '#101522')} */
background: ${({lightBg}) => (lightBg ? '#e4e4e4' : '#fff')}
`;
// padding: 160px 0;  => by default

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')
 }
`;

export const InfoColumn = styled.div`

margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

animation-duration: 3s;
  animation-name: slidein;

@keyframes slidein {
  from {
    margin-right: 100%;
    width: 300%;
  }
;
  75% {
    font-size: 300%;
    margin-right: 25%;
    width: 150%;
  };

  to {
    margin-right: 0%;
    width: 100%;
  };}


@media screen and (max-width: 768){
    padding-bottom:65px;
}
`;
export const TopLine = styled.div`
color: ${({lightTopline}) => (lightTopline ? '#a9b3c1' : 'black')};
font-size: 18px;
line-height: 16px;
 
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`  
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({lightTextDesc}) => (lightTextDesc ? '#a9b3c1' : '#1c2237')}; 
`

export const ImgWrapper = styled.div`

max-width: 555px;
display: flex;
justify-content: ${({ start}) => (start ? 'flex-start' : 'flex-end')};

animation-duration: 3s;
  animation-name: slidein;

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }
;
  75% {
    font-size: 300%;
    margin-left: 25%;
    width: 150%;
  };

  to {
    margin-left: 0%;
    width: 100%;
  };}

`;


export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`