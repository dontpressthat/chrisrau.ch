import React, { useState } from 'react';
import NavBar from './global-components/NavBar';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Me from './Pages/Me';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Modal from './Pages/Projects/components/Modal';
import useModal from './hooks/useModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  max-width: 1280px;
  height: 100%;
  min-height: 700px;
  min-width: 300px;
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

const App = () => {
  const year = new Date().getFullYear();

  const { isShowing, toggle } = useModal();

  const handlePopup = () => {
    toggle();
  };

  return (
    <React.Fragment>
      <Container>
        <Router>
          <NavBar />
          <MainContent>
            <Switch>
              <Route exact component={Me} path="/" />
              <Route exact render={() => <Projects handlePopup={handlePopup} />} path="/Projects" />
              <Route exact component={About} path="/About" />
            </Switch>
          </MainContent>
        </Router>
        <Copyright>{`© ${year} - Chris Rauch`}</Copyright>
      </Container>
      <Modal isShowing={isShowing} hide={toggle}></Modal>
    </React.Fragment>
  )
}

export default App; 