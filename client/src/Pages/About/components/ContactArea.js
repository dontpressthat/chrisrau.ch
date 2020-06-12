import React from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  margin-top: ${props => props.marginTop}px;
  background-color: gray;
  height: 420px;
`

const ContactArea = () => {
  return (
    <Container>
      <StyledText>
        Hello
      </StyledText>
    </Container>
  )
};

export default ContactArea;