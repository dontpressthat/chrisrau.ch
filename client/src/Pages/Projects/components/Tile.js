import React, {useState} from 'react';
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
  const [hidden, setHidden] = useState(false);

  return (
    <Container image={image}>
      <TextWrapper>
        <StyledText>{name}</StyledText>
        <StyledText>{category}</StyledText>
      </TextWrapper>
    </Container>
  )
}

export default Tile;