import React from 'react';
import Button from './components/Button';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`

const NavBar = () => {
  return (
    <Wrapper>
        <Button title='Hello'/>
        <Button title='Projects'/>
        <Button title='About'/>
    </Wrapper>
  )
}

export default NavBar;