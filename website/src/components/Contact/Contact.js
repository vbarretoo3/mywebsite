import React, { useState, useRef } from 'react';
import { Alert } from 'react-bootstrap';


export default function Contact() {
  const [reply, setReply] = useState("")
  const [error, setError] = useState("")
  const nameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const messageRef = useRef()

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      setError('')
      setReply('')
      await JSON.stringify(nameRef.current.value, lastNameRef.current.value, emailRef.current.value, phoneRef.current.value, messageRef.current.value)
      setReply('Your form was submitted successfully')
    } catch {
      setError('Something went wrong with your form submission')
    }
  }

  return (
    <>
      <h3>Contact</h3>
      <br/>
      <form onSubmit={handleSubmit}>
        {error && <Alert variant='danger'>{error}</Alert>}
        {reply && <Alert variant='success'>{reply}</Alert>}
        <ul class="form-style-1" id='form'>
          <li>
            <label>Full Name <span class="required">*</span></label>
            <input ref={nameRef} type="text" name="field1" class="field-divided" placeholder="First" /> <input ref={lastNameRef} type="text" name="field2" class="field-divided" placeholder="Last" />
          </li>
          <li>
            <label>Email & Phone (only one field required) <span class="required">*</span></label>
            <input ref={emailRef} type="text" name="field3" class="field-divided" placeholder="Email" /> <input ref={phoneRef} type="text" name="field4" class="field-divided" placeholder="Phone" />
          </li>
          <li>
              <label>Your Message <span class="required">*</span></label>
              <textarea ref={messageRef} name="field5" id="field5" class="field-long field-textarea"></textarea>
          </li>
          <li>
              <input type="submit" value="Submit" />
          </li>
        </ul>
      </form>
    </>
  )
}
