import React, { useState } from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';

const tileSize = 250;

const Container = styled.div`
  display: flex;
  flex: 2 2 ${tileSize}px;
  width: ${tileSize}px;
  height: ${tileSize}px;
  background-image: url(${props => props.image});
  background-color: ${props => props.color};
  background-size: cover;
  margin: 5px;
`

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 1280px) {
    background-color: rgba(255, 255, 255, 0.25);
  };
  @media only screen and (min-width: 1280px) {
    opacity: 0;
    transition: 0.25s ease-out;
    &:hover {
      background-color: #4a544e;
      opacity: 1;
    };
  };
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1280px) {
    color: #333333;
  };
  @media only screen and (min-width: 1280px) {
    color: lightgray;
  };
`

const Tile = ({ image, name, category }) => {

  const [showBox, setShowBox] = useState(false);

  let color = 'lightgray';
  // if (category === 'Development') {
  //   color = 'lightblue'
  // } else if (category === 'Design') {
  //   color = 'lightgreen'
  // } else if (category === 'Photography') {
  //   color = 'pink'
  // } else if (category === 'Rendering') {
  //   color = 'coral'
  // }

  return (
    <Container image={image} color={color} onMouseEnter={() => setShowBox(true)} onMouseLeave={() => setShowBox(false)}>
      <Overlay>
        <TextWrapper>
          <StyledText size={20} font='Ubuntu'>{name}</StyledText>
          <StyledText size={12} weight={300} fontStyle='italic'>{category}</StyledText>
        </TextWrapper>
      </Overlay>
    </Container>
  )
}

export default Tile;