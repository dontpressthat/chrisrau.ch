import React from 'react';
import styled from 'styled-components';
import StyledText from '../../global-components/styled-components/StyledText';

const Container = styled.div`

`

const projectList = [
  {
    name: 'chrisrau.ch',
    category: 'Software Engineering',
    image: `/assets/images/1.jpg`,
    description:
      <Container>
        <StyledText size={16}>
          <p>
            chrisrau.ch is React single page application (SPA) built to serve as my personal portfolio website. The goal was to build a highly maintainable application tailored to the use case of showcasing my various projects and hobbies. In an effort to keep things lightweight, as well as provide a challenge, almost all app features were manually written as opposed to using readily available packages or libraries.
          </p>
          <p>
            Because numerous elements on the project page are designed to display redundant information from each project, the project names, categories, images, descriptions, and GitHub links are all referenced from one single source of truth (SSoT). This prevents the need to edit multiple files with the same information, preventing potential discrepancies and/or errors. The categories filter bar is also programmatically built and renders all unique categories found in the project data file.
          </p>
          <p>
            A large amount of attention was given to responsiveness and browser compatibility. All aspects of the website will actively respond to resizing down to a window width of just 300 pixels, and care was taken to only use widely-supported CSS properties for all core functionality. This ensures usability on all devices, whether it be mobile or desktop.
          </p>
          <p>Google's Firebase powers the backend of this application, acting as the webhost and server.</p>
        </StyledText>
        <StyledText size={20}>
          <p>
            Technologies Used:
          </p>
        </StyledText>
        <StyledText size={16}>
          <ul>
            <li>JavaScript ES6</li>
            <li>Babel</li>
            <li>Webpack</li>
            <li>React</li>
            <li>ReactDOM</li>
            <li>React Hooks</li>
            <li>React Router</li>
            <li>React Helmet</li>
            <li>SmtpJS</li>
            <li>CSS / Styled Components</li>
            <li>Node</li>
            <li>Firebase</li>
            <li>Git / GitHub</li>
          </ul>
        </StyledText>
        <StyledText size={20}>
          <p>
            Skills and Practices:
          </p>
        </StyledText>
        <StyledText size={16}>
          <ul>
            <li>Fully responsive across devices of all shapes and sizes</li>
            <li>DRY (Don't Repeat Yourself) principle
              <ul>
                <li>SSoT (Single Source of Truth) for project information referenced throughout app</li>
                <li>Component modularity / reusability</li>
                <li>Templatized Hooks and Styled Components</li>
              </ul>
            </li>
            <li>Dynamically rendered data and components</li>
            <li>Kept lightweight with minimal third-party packages</li>
            <li>Highly organized file structure / component flow</li>
          </ul>
        </StyledText>
      </Container>,
    github: 'https://github.com/dontpressthat/chrisrau.ch',
    date: 'May 2020 - Present'
  },
  {
    name: 'Project 2',
    category: 'Design',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`,
    description: ''
  },
  {
    name: 'Project 3',
    category: 'Photography',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`,
    description: ''
  },
  {
    name: 'Project 4',
    category: 'Photography',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`,
    description: ''
  },
  {
    name: 'Project 5',
    category: 'Rendering',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`,
    description: ''
  },
  {
    name: 'Project 6',
    category: 'Software Engineering',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`,
    description: ''
  },
  {
    name: 'Project 7',
    category: 'Photography',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`,
    description: ''
  },
  {
    name: 'Project 8',
    category: 'Software Engineering',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`,
    description: ''
  },
  {
    name: 'Project 9',
    category: 'Software Engineering',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`,
    description: ''
  },
  {
    name: 'Project 10',
    category: 'Design',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`,
    description: ''
  },
  {
    name: 'Project 11',
    category: 'Rendering',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`,
    description: ''
  },
  {
    name: 'Project 12',
    category: 'IT',
    image: `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/500/500`,
    description: ''
  },
];

export default projectList;