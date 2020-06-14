import React, { useState } from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';

const Container = styled.div`
  display: ${props => props.display};
  flex-direction: ${props => props.direction};
  width: ${props => props.width};
  margin: ${props => props.margin} 0;
`

const StyledInput = styled.input`
  display: ${props => props.display};
  width: ${props => props.width};
  height: ${props => props.height};
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
  border: solid 1px #999999;
  box-sizing: border-box;
  background-color: #fff;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
`

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  font-family: 'Roboto Condensed', sans-serif;
  border: solid 1px #999999;
  resize: none;
  font-size: 18px;
  box-sizing: border-box;
  background-color: #fff;
`

const StyledSubmit = styled.button`
  width: 100px;
  height: 40px;
  background-color: #4a544e;
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 18px;
`

const ContactForm = () => {

  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    Email.send({
      SecureToken: '9943eb0a-a23c-45b7-8cc3-82ec388ae2de',
      To: 'chris@chrisrau.ch',
      From: 'chris@chrisrau.ch',
      Subject: `${state.subject}`,
      Body: `${state.message}`
    }).then(
      message => alert(message)
    ).then(
      () => setState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    )
  }

  return (
    <Container display='flex' direction='column' width='100%'>
      <StyledText size={42} weight={500} color='#4a544e' font='Ubuntu'>Send a message</StyledText>
      <form onSubmit={handleSubmit}>
        <Container display='flex' direction='row' margin='10px'>
          <StyledInput height='40px' width='50%' value={state.name} name='name' placeholder='NAME' onChange={handleChange} marginRight='5px' required />
          <StyledInput height='40px' width='50%' value={state.email} name='email' placeholder='EMAIL' onChange={handleChange} marginLeft='5px' type='email' required />
        </Container>
        <Container margin='10px'>
          <StyledInput height='40px' width='100%' value={state.subject} name='subject' placeholder='SUBJECT' onChange={handleChange} required />
        </Container>
        <Container margin='10px'>
          <StyledTextArea value={state.message} name='message' placeholder='MESSAGE' onChange={handleChange} required />
        </Container>
        <StyledSubmit type="submit" value="Submit">SEND</StyledSubmit>
      </form>
    </Container>
  )
};

export default ContactForm;