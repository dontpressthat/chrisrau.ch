import React from 'react';
import styled from 'styled-components';
import StyledFlex from '../../global-components/styled-components/StyledFlex';
import AboutInfo from './components/AboutInfo';
import MoreInfo from './components/MoreInfo';
import ContactArea from './components/ContactArea';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
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

            <StyledFlex.Row>
              <StyledFlex.Col size={1}>
                <AboutInfo />
              </StyledFlex.Col>
              <StyledFlex.Col size={1}>
                <MoreInfo />
              </StyledFlex.Col>
            </StyledFlex.Row>
            <ContactArea />

          </Container>
        </StyledFlex.Col>
        <StyledFlex.Col size={1}>
        </StyledFlex.Col>
      </StyledFlex.Row>

    </StyledFlex.Grid>
  )
}

export default About;