import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

const Title = styled.a`
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  width: 70px;
  height: 30px;
  color: #222222;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
  cursor: crosshair;
  &:hover {
    border-bottom: solid #888888 2px;
  };
`

const Button = ({ title }) => {
  const link = title === 'Me' ? '/' : `/${title.toLowerCase()}`;
  return (
    <StyledNavLink exact to={link} activeStyle={{borderBottom: 'solid #888888 2px'}}>{title}</StyledNavLink>
  )
}

export default Button;