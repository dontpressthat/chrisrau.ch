import React from 'react';
import Button from './components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #e9e9e9;
`

const NavBar = () => {
  return (
    <Wrapper>
      <Button title='Home'></Button>
      <Button title='Projects'></Button>
      <Button title='About'></Button>
    </Wrapper>
  )
}

export default NavBar;