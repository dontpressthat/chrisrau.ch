import React from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';

const tileSize = 250;

const Container = styled.div`
  display: flex;
  flex: 2 2 ${tileSize}px;
  justify-content: center;
  align-items: center;
  width: ${tileSize}px;
  height: ${tileSize}px;
  background-image: url(${props => props.image});
  background-color: ${props => props.color};
  background-size: cover;
  margin: 5px;
  &:hover {
    opacity: 0.3;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Tile = ({ image, name, category }) => {
  let color = 'gray';
  if (category === 'Development') {
    color = 'lightblue'
  } else if (category === 'Design') {
    color = 'lightgreen'
  } else if (category === 'Photography') {
    color = 'pink'
  } else if (category === 'Rendering') {
    color = 'darkseagreen'
  } 
  return (
    <Container image={image} color={color}>
      <TextWrapper>
        <StyledText>{name}</StyledText>
        <StyledText>{category}</StyledText>
      </TextWrapper>
    </Container>
  )
}

export default Tile;