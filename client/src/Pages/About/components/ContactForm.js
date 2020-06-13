import React from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';

const Container = styled.div`
  display: ${props => props.display};
  flex-direction: ${props => props.direction};
  width: ${props => props.width};
`

const StyledInput = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  font-family: 'Roboto Condensed', sans-serif;
  /* border-width: 0px; */
`

const ContactForm = () => {
  return (
    <Container display='flex' direction='column' width='80%'>
      <Container display='flex' direction='column' width='100%'>
        <StyledInput name='name' placeholder='Name' width='50%' height='30px'></StyledInput>
        <StyledInput name='email' placeholder='Email' width='50%' height='30px'></StyledInput>
      </Container>
      <StyledInput name='subject' placeholder='Subject' width='100%' height='30px'></StyledInput>
      <StyledInput name='Message' placeholder='Message' width='100%' height='100px'></StyledInput>
    </Container>
  )
};

export default ContactForm;