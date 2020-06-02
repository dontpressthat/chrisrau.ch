import React from 'react';
import styled from 'styled-components';

const Title = styled.a`
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  &:hover {
    background-color: #ffffff;
    cursor: pointer;
    ${Title} {
      font-weight: 400;
      color: #555555;
    }
  };
`

const Button = ({ title }) => {
  return (
    <Wrapper  onClick={() => alert(`Route to ${title} page right now`)}>
      <Title>{title}</Title>
    </Wrapper>
  )
}

export default Button;