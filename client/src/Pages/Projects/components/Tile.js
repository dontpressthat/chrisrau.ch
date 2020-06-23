import React from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';

const tileSize = 250;

const Container = styled.div`
  display: flex;
  /* flex: 2 2 ${tileSize}px; */
  width: ${tileSize}px;
  /* max-width: 250px; */
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
  @media only screen and (max-width: 1400px) {
    background-color: rgba(255, 255, 255, 0.15);
    transition: 0.5s;
    &:hover {
      cursor: crosshair;
    };
  };
  @media only screen and (min-width: 1400px) {
    opacity: 0;
    transition: 0.25s ease-out;
    &:hover {
      background-color: #4a544e;
      opacity: 1;
      cursor: crosshair;
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


const Tile = ({ info, handleClick }) => {

  return (
    <Container image={info.image} onClick={() => handleClick(info)}>
      <Overlay>
        <TextWrapper>
          <StyledText size={20} color='white' font='Ubuntu'>{info.name}</StyledText>
          <div>
            <StyledText size={12} color='lightgray' weight={300} fontStyle='italic'>{info.category}</StyledText>
          </div>
        </TextWrapper>
      </Overlay>
    </Container>
  )
}

export default Tile;