import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';

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
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 800px;
  height: 850px;
  padding: 2rem;
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

const Modal = ({ isShowing, hide }) => {

  isShowing ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll';

  return isShowing ? ReactDOM.createPortal(
    <React.Fragment>
      <Container>
        <Overlay onClick={hide} />
        <ModalBox>

        </ModalBox>
      </Container>
    </React.Fragment>, document.body
  ) : null;
}

export default Modal;