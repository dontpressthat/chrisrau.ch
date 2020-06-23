import React from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';
import svg from '../../../../../public/assets/svg';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: max-content;
`

const TextContainer = styled.div`
  text-align: justify;
  @media only screen and (max-width: 800px) {
    width: 100%;
  };
  @media only screen and (min-width: 800px) {
    width: 45%;
  };
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media only screen and (max-width: 800px) {
    margin-bottom: 10px;
  };
  @media only screen and (min-width: 800px) {
    margin-bottom: 30px;
  };
`

const ImageContainer = styled.div`
  max-width: 800px;
  @media only screen and (max-width: 800px) {
    height: max-content;
    width: 100%;
  };
  @media only screen and (min-width: 800px) {
    height: max-content;
    width: 50%;
  };
`

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const LinkSvg = styled.a`
  &:hover {
    cursor: crosshair;
  }
`

const Close = styled.div`
  height: max-content;
  &:hover {
    cursor: crosshair;
  }
`

const ButtonContainer = styled.div`
  @media only screen and (max-width: 800px) {
    margin: 10px 0;
  };
  @media only screen and (min-width: 800px) {
    margin: 30px 0;
  };
`

const ProjectInfo = ({ info, hide }) => {

  const { image, name, category, description, github, date } = info;

  const githubButton = <LinkSvg href={github} target='_blank'>{svg.github}</LinkSvg>

  return (
    <Container>
      <Header>
        <TitleContainer>
          <StyledText size={30} color='#4a544e' font='Ubuntu'>
            {name}
          </StyledText>
          <StyledText size={14} color='#4a544e' indent={2} weight={300}>
            {date ? date : null}
          </StyledText>
        </TitleContainer>
        <Close onClick={hide}>
          {svg.xClose}
        </Close>
      </Header>
      <TextContainer>
        <StyledText size={16} color='#444444'>
          {description}
        </StyledText>
        <ButtonContainer>
          {github ? githubButton : null}
        </ButtonContainer>
      </TextContainer>
      <ImageContainer>
        <StyledImg src={image}></StyledImg>
      </ImageContainer>
    </Container>
  )
}

export default ProjectInfo;