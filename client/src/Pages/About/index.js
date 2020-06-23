import React from 'react';
import styled from 'styled-components';
import StyledFlex from '../../global-components/styled-components/StyledFlex';
import AboutInfo from './components/AboutInfo';
import MoreInfo from './components/MoreInfo';
import ContactArea from './components/ContactArea';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${props => props.marginTop}px;
`

const About = () => {
  return (
    <StyledFlex.Grid>
      <Helmet>
        <title>About Me</title>
      </Helmet>
      <StyledFlex.Row>
        <StyledFlex.Col size={1} />
        <StyledFlex.Col size={4}>

            <Container>
              <AboutInfo />
              <MoreInfo />
            </Container>

            <ContactArea />

        </StyledFlex.Col>
        <StyledFlex.Col size={1} />
      </StyledFlex.Row>

    </StyledFlex.Grid>
  )
}

export default About;