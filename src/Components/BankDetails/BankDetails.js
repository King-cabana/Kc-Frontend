import React from 'react'
import { BankDetailsHeader , Form, FormInput, ButtonBox, Button, EventSponsorLinks} from './BankDetailsComponent'

const BankDetails = () => {
  return (
    <div>
    <Form>
    <BankDetailsHeader>
    <h1>Your bank details</h1>
    </BankDetailsHeader>
    <BankDetailsHeader>Bank name</BankDetailsHeader>
    <FormInput type="textbox" placeholder="Your bank name" name="name"/>
    <BankDetailsHeader>Account name</BankDetailsHeader>
    <FormInput type="textbox" placeholder="Your bank account name" name="accountName"/>
    <BankDetailsHeader>Account number</BankDetailsHeader>
    <FormInput type="textbox" placeholder="Your bank account number" name="accountNumber"/>


    <ButtonBox>
       

        <Button>
        <EventSponsorLinks to ="/eventSponsor">
        <label><strong>Continue</strong></label>
       
        </EventSponsorLinks>
        </Button>
        </ButtonBox>
    </Form>
    </div>
    
  )
}

export default BankDetails

