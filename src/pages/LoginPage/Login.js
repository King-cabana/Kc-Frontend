import React from 'react'
import {Form, InfoContainer, Input, SuperContainer, InfoContainerTwo} from './LoginElement'
import {Button} from '../../globalStyles'
import pics from  '../../images/event2.jpg'
import pic1 from  '../../images/event4.jpg'
import pic2 from  '../../images/event5.jpg'
import pic3 from  '../../images/event6.jpg'

const Login = () => {
    return (
        <div>
        <SuperContainer>
       
       <InfoContainerTwo><img src={pics} width="100%" height="100%"/></InfoContainerTwo>
       <InfoContainerTwo><img src={pic1} width="100%" height="100%"/></InfoContainerTwo>
       <InfoContainerTwo><img src={pic2} width="100%" height="100%"/></InfoContainerTwo>
       <InfoContainerTwo><img src={pic3} width="100%" height="100%"/></InfoContainerTwo>
       <InfoContainerTwo><img src={pics} width="100%" height="100%"/></InfoContainerTwo>
       <InfoContainerTwo><img src={pic1} width="100%" height="100%"/></InfoContainerTwo>
       
        </SuperContainer>
            
        </div>
    )
}

export default Login

