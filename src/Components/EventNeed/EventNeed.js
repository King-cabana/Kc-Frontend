import React from 'react'
import { Button, EventNeedHeader, Form, FormInput, ButtonBox, BankDetailsLinks } from './EventNeedElement'

const EventNeed = () => {
    return (
        <div>

        <Form>
        <EventNeedHeader>
        <h1>List your event needs</h1>
        </EventNeedHeader>

        <EventNeedHeader>Your Event need</EventNeedHeader>
        <FormInput type="textbox" placeholder="Type your event need" name="event"/>
        <EventNeedHeader>Cost of this need</EventNeedHeader>
        <FormInput type="textbox" placeholder="#0.00" name="cost"/>
        <ButtonBox>
        <Button>
        <BankDetailsLinks>
        <label><strong>Save needs</strong></label>
       
        </BankDetailsLinks>
        </Button>

        <Button>
        <BankDetailsLinks to ="/bankDetails">
        <label><strong>Continue</strong></label>
       
        </BankDetailsLinks>
        </Button>
        </ButtonBox>
       
        </Form>
            
        </div>
    )
}

export default EventNeed
