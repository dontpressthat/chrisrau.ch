import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';
import ProjectInfo from './ProjectInfo';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

const ModalBox = styled.div`
  z-index: 1050;
  background: #f0f0f0;
  position: relative;
  margin: 5.5rem auto;
  border-radius: 3px;
  @media only screen and (max-width: 800px) {
    height: max-content;
    padding: 10px;
    width: 85vw;
    margin: 1.5rem auto;
  };
  @media only screen and (min-width: 800px) {
    height: max-content;
    width: 75vw;
    max-width: 1080px;
    padding: 30px;
    margin: 5.5rem auto;
  };
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`

const Modal = ({ info, isShowing, hide }) => {

  isShowing ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto';

  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <Container>
        <Overlay onClick={hide} />
        <ModalBox>
          <ProjectInfo info={info} hide={hide} />
        </ModalBox>
      </Container>
    </React.Fragment>, document.body
  ) : null;
}

export default Modal;