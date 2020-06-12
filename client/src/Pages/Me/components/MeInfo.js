import React from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';
import svg from '../../../../../public/assets/svg';

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  margin-top: ${props => props.marginTop}px;
`

const MeInfo = () => {
  return (
    <Container direction='column'>
      <StyledText size={20} weight={400} color='#666666' fontStyle='italic' decoration='underline' indent={5}>Hello, I'm</StyledText>
      <StyledText size={72} weight={500} color='#4a544e' font='Ubuntu'>Chris Rauch</StyledText>
      <div>
        <div style={{ display: 'inline-block' }}>
          <StyledText size={20} weight={500} color='#4a544e' font='Ubuntu' indent={5}>{'Full Stack Web Developer'}</StyledText>
        </div>
        <div style={{ display: 'inline-block' }}>
          <StyledText size={20} weight={500} color='#4a544e' font='Ubuntu' indent={5}>{'[ . . . and more ];'}</StyledText>
        </div>
      </div>
      <div style={{ width: '100%', maxWidth: '500px', marginLeft: '5px' }}>
        <p>
          <StyledText size={16} weight={400} color='#444444'>
            {
              `Ideation, creation, and innovation are the principles that make me. My multifaceted background in architecture, systems administration, web and graphic design, and more, has directly contributed to the skills and vision that I enjoy implementing as a full stack software engineer.`
            }
          </StyledText>
        </p>
        <StyledText size={16} weight={400} color='#444444'>
          {
            `This portfolio website is an active, in-progress front-end development project featuring fully responsive, single page application design using React on a Firebase back-end. I will have my works showcased on this website very soon, but while I continue building this site, you can view its GitHub repo `
          }
        </StyledText>
        <StyledText size={16} weight={700} color='#444444' href='https://github.com/dontpressthat/chrisrau.ch' target='_blank' cursor='crosshair'>
          {'here.'}
        </StyledText>
        <p>
          <StyledText size={16} weight={400} color='#444444' fontStyle='italic'>
            {
              ' I am currently looking for a full-stack or front-end position in the San Francisco Bay area!'
            }
          </StyledText>
        </p>
      </div>
      <Container direction='row' wrap='wrap'>{svg.code1}{svg.code2}{svg.server1}{svg.server2}{svg.construction}{svg.paintbrush}{svg.camera}{svg.computer}</Container>
    </Container>
  )
}

export default MeInfo;