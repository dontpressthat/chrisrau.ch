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
  @media only screen and (max-width: 1440px) {
    background-color: rgba(255, 255, 255, 0.15);
    transition: 0.5s;
  };
  @media only screen and (min-width: 1440px) {
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
  @media only screen and (max-width: 1440px) {
    background-color: #4a544e;
    padding: 10px 30px;
  };
`

const Tile = ({ image, name, category }) => {

  const [showBox, setShowBox] = useState(false);

  let color = 'lightgray';

  return (
    <Container image={image} color={color} onMouseEnter={() => setShowBox(true)} onMouseLeave={() => setShowBox(false)}>
      <Overlay>
        <TextWrapper>
          <StyledText size={20} color='white' font='Ubuntu'>{name}</StyledText>
          <div>
            <StyledText size={12} color='lightgray' weight={300} fontStyle='italic'>{category}</StyledText>
          </div>
        </TextWrapper>
      </Overlay>
    </Container>
  )
}

export default Tile;