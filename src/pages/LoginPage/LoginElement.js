import styled from 'styled-components'

export const SuperContainer = styled.div`
display:flex;
flex-wrap:wrap;

justify-content:space-around;
align-content:center;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction:column;
}

`

export const InfoContainer = styled.div`
display:flex;

justify-content:center;
width: 30%;
background-color: green;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction:column;
    width: 80%;
   align-items:center;
    }

`
export const InfoContainerTwo = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
width: 30%;
background-color: green;
margin: 10px;


@media screen and (max-width: 960px){
    display: flex;
    flex-direction:column;
    width:80%;}

`






