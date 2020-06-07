import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
`

const StyledSvg = styled.svg`
  fill: #4a544e;
  &:hover {
    fill: #888888;
  }
`

const svg = {
  code1: <Container><StyledSvg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 -2 24 24"><path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" /></StyledSvg></Container>,

  code2: <Container><StyledSvg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 -1 24 24"><path d="M23 10.826v2.349c-1.562 0-3 1.312-3 2.857 0 2.181 1.281 5.968-6 5.968v-2.002c4.917 0 3.966-1.6 3.966-3.967 0-2.094 1.211-3.5 2.278-4.031-1.067-.531-2.278-1.438-2.278-3.312 0-2.372.94-4.692-3.966-4.686v-2.002c7.285 0 6 4.506 6 6.688 0 1.544 1.438 2.138 3 2.138zm-19-2.138c0-2.182-1.285-6.688 6-6.688v2.002c-4.906-.007-3.966 2.313-3.966 4.686 0 1.875-1.211 2.781-2.278 3.312 1.067.531 2.278 1.938 2.278 4.031 0 2.367-.951 3.967 3.966 3.967v2.002c-7.281 0-6-3.787-6-5.969 0-1.545-1.438-2.857-3-2.857v-2.349c1.562.001 3-.593 3-2.137z" /></StyledSvg></Container>,

  server1: <Container><StyledSvg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 -2 24 24"><path d="M24 21v-6h-18v6h18zm-3-4c.553 0 1 .448 1 1s-.447 1-1 1c-.552 0-1-.448-1-1s.448-1 1-1zm-7.806 0h1.275l-.864 2h-1.274l.863-2zm-2.141 0h1.275l-.863 2h-1.275l.863-2zm-2.19 0h1.275l-.863 2h-1.275l.863-2zm-4.863.941c-2.253-.29-4-2.194-4-4.524 0-2.252 1.626-4.121 3.767-4.506.177-3.294 2.895-5.911 6.233-5.911s6.056 2.617 6.233 5.911c2.005.361 3.541 2.029 3.729 4.089h-1.991c-.279-2.105-2.674-2.333-3.65-2.401.117-1.958-.555-5.599-4.321-5.599-4.438 0-4.359 4.75-4.321 5.599-.945-.037-3.679.341-3.679 2.818 0 1.223.856 2.245 2 2.511v2.013z" /></StyledSvg></Container>,

  server2: <Container><StyledSvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M23 17h-22v7h22v-7zm-20 5l.863-3h1.275l-.863 3h-1.275zm2.066 0l.863-3h1.275l-.863 3h-1.275zm2.067 0l.863-3h1.275l-.864 3h-1.274zm2.066 0l.863-3h1.274l-.863 3h-1.274zm3.341 0h-1.274l.863-3h1.275l-.864 3zm7.46-.5c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm1-19.5v11h-18v-11h18zm2-2h-22v15h22v-15zm-13 7.5l-2.563-2.5-.771.751 1.794 1.749-1.794 1.749.771.751 2.563-2.5zm7 1.5h-5v1h5v-1z" /></StyledSvg></Container>,

  construction: <Container><StyledSvg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 23h-20c-2.208 0-4-1.792-4-4v-15.694c.313-1.071 1.285-2.306 3-2.306 1.855 0 2.769 1.342 2.995 2.312l.005 1.688h18v18zm-2-16h-16v11s-.595-1-1.922-1c-1.104 0-2.078.896-2.078 2s.896 2 2 2h18v-14zm-2 12h-12v-10h12v10zm-8-9h-3v8h10v-4h-2v3h-1v-3h-3v3h-1v-7zm-8-6.339c-.233-.921-1.807-.917-2 0v11.997c.408-.421 1.383-.724 2-.658v-11.339zm9 6.339v3h6v-3h-6z" /></StyledSvg></Container>,

  paintbrush: <Container><StyledSvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 1 24 24"><path d="M15.07 12.528l-1.68-1.4c.497-2.361.502-3.016 2.035-4.448 1.938-1.811 7.512-6.525 7.512-6.525.129-.108.271-.155.409-.155.342 0 .654.294.654.647 0 .104-.027.214-.088.322 0 0-3.418 6.509-4.846 8.748-1.127 1.771-1.769 1.896-3.996 2.811zm-1.043 1.301l-1.839-1.535c-4.084.043-2.717 4.559-6.696 4.559l-.49-.021c1.048 1.459 2.706 2.168 4.318 2.168 2.551 0 4.988-1.778 4.707-5.171zm3.973-.39v8.561h-16v-12h9.582c.154-.754.296-1.396.517-2h-12.099v16h20v-12.176c-.641.772-1.272 1.24-2 1.615z" /></StyledSvg></Container>,

  camera: <Container><StyledSvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M18 5l-2-3h-8l-2 3h-6v17h24v-17h-6zm4 7h-4.079c.581 3.754-2.312 7-5.921 7-3.612 0-6.501-3.248-5.921-7h-4.079v-5h5.07l2-3h5.859l2 3h5.071v5zm-10-3c-2.243 0-4 1.73-4 3.939 0 2.239 1.794 4.061 4 4.061s4-1.822 4-4.061c0-2.209-1.757-3.939-4-3.939zm-.436 3.555c-.632.503-1.461.5-1.852-.006-.39-.506-.194-1.324.438-1.827.632-.502 1.461-.499 1.851.007.391.505.195 1.323-.437 1.826z" /></StyledSvg></Container>,

  computer: <Container><StyledSvg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M0 0v19h24v-19h-24zm22 17h-20v-15h20v15zm-6.599 4l2.599 3h-12l2.599-3h6.802zm-6.401-16l6 4.674-2.538.427 1.538 3.095-1.571.804-1.546-3.157-1.883 1.759v-7.602z" /></StyledSvg></Container>
}

export default svg;