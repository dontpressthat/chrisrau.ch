import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const Body = styled.div`
  width: 1280px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Body>
        <NavBar />
      </Body>
    )
  }
}

export default App;