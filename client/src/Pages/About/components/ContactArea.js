import React from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';
import ContactForm from './ContactForm';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  margin-top: ${props => props.marginTop}px;
  /* background-color: #4a544e; */
  height: 420px;
`

const ContactArea = () => {
  return (
    <Container>
      <ContactForm />
    </Container>
  )
};

export default ContactArea;