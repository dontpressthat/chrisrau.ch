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

const Info = () => {
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
      <div style={{ width: '100%', maxWidth: '500px', marginTop: '30px', marginLeft: '5px' }}>
        <StyledText size={16} weight={400} color='#444444'>
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt dui sed libero pretium, et lacinia tellus sagittis. Nullam pulvinar efficitur tellus commodo mollis. Pellentesque justo est, iaculis vitae lorem in, hendrerit posuere mauris. Vestibulum a urna sapien. Maecenas gravida fermentum diam, eu sodales odio mollis eget. Fusce eget nulla at risus tincidunt rhoncus. In venenatis vulputate eros, quis luctus quam aliquam nec.'
          }
        </StyledText>
      </div>
      <Container direction='row' wrap='wrap' marginTop={20}>{svg.code1}{svg.code2}{svg.server1}{svg.server2}{svg.construction}{svg.paintbrush}{svg.camera}{svg.computer}</Container>
    </Container>
  )
}

export default Info;

// Full Stack Web Developer [ . . . and more ];

// \`Full Stack Web Developer ${and more}\`;