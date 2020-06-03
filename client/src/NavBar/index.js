import React from 'react';
import Button from './components/Button';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const NavBar = () => {
  return (
    <Wrapper>
        <Button title='Home'/>
        <Button title='Projects'/>
        <Button title='About'/>
    </Wrapper>
  )
}

export default NavBar;