import React, { useState } from 'react';

import {Navigate} from 'react-router-dom';

import EmailComponent from './emailInput';
import ButtonComponent from './submitBtn';


// stats change area
// email validation message
// email input
// button input
export default function ActivityArea() {
  const [emailInput, setEmailInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  // email validation
  function EmailFormat(mail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);
  }

  // Button click action for email validation
  // wrong ip > different err msg for empty and non-valid input
  // right ip > no err msg, set valid email (to navigate thank you page), set email ip in session storage
  function handleBtnClick() {
    if(emailInput === "") {
      setErrorMsg('Enter your Email')
    } else if(!EmailFormat(emailInput)) {
      setErrorMsg('Valid email required');
    } else {
      setErrorMsg('');
      setValidEmail(true);
      sessionStorage.setItem("userEmail", emailInput);
    }
  }

  // for email input
  function handleEmailChange(e) {
    setEmailInput(e.target.value);
  }

  return (
    <div className='sm:mt-2'>
      {validEmail ? (
        <Navigate to = "/thankyou"/>
      ):(
        <>
          <div className='flex flex-col space-y-1'>
            <div className='flex justify-between'>
              <small className='text-DarkSlateGrey font-robotoBold'>Email address</small>
              <small className='text-Tomato font-robotoBold'>{errorMsg}</small>
            </div>
            <EmailComponent value={emailInput} onChange={handleEmailChange} />
          </div>
          <ButtonComponent onClick={handleBtnClick} />  
        </>
      )}
    </div> 
  );
}