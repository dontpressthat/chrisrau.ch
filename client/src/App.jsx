import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 1440px;
  height: 900px;
`

const MainContent = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  height: 100%;
`

const Copyright = styled.a`
  color: #555555;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 11px;
  font-weight: 300;
`


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: new Date().getFullYear()
    }
  }

  render() {
    const { year } = this.state;

    return (
      <Container>
        <Router>
          <NavBar />
          <MainContent>
            <Switch>
              <Route exact component={Home} path="/" />
              <Route exact component={Projects} path="/Projects" />
              <Route exact component={About} path="/About" />
            </Switch>
          </MainContent>
        </Router>
        <Copyright>{`© ${year} - Chris Rauch`}</Copyright>
      </Container>
    )
  }
}

export default App; 