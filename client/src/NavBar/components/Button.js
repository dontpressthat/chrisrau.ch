import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  color: #555555;
  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  };
`

const StyledNavLink = styled(NavLink)`
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  color: #222222;
  text-decoration: none;
`

const Button = ({ title }) => {
  const link = title === 'Home' ? '/' : `/#/${title}`;
  return (
    <Wrapper>
        <StyledNavLink to={link}>{title}</StyledNavLink>
    </Wrapper>
  )
}

export default Button;