import React from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';

const TextContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  margin-top: ${props => props.marginTop}px;
  text-align: justify;
`

const MoreInfo = () => {

  return (
    <TextContainer direction='column'>
      <StyledText size={30} color='#4a544e' font='Ubuntu' weight={500} marginTop={30}>
        Skills & Tools
        </StyledText>
      <StyledText size={20} color='#4a544e' font='Ubuntu' marginTop={15} weight={500}>
        Software Engineering:
        </StyledText>
      <StyledText size={16} color='#444444' marginTop={5}>
        JavaScript/ES6, React, React Native, React Router, Mocha/Chai, HTML, CSS/Styled Components, jQuery, Babel, Webpack, Expo, Node/NPM, Express, Axios, MySQL, MongoDB, Cassandra/CQLSH, Docker, AWS EC2/S3, Nginx, Loader.io, New Relic, Firebase, Git/GitHub, Git Bash, MVC Architecture, Service-oriented Architecture, Postman, MySQL Workbench
        </StyledText>
      <StyledText size={20} color='#4a544e' font='Ubuntu' marginTop={15} weight={500}>
        Web Design & Administration:
            </StyledText>
      <StyledText size={16} color='#444444' marginTop={5}>
        cPanel, domains/DNS, SSL security, phpMyAdmin, Wordpress, Squarespace, Wix, Custom CSS, GSuite, Office365
        </StyledText>
      <StyledText size={20} color='#4a544e' font='Ubuntu' marginTop={15} weight={500}>
        Systems & Network Administration:
            </StyledText>
      <StyledText size={16} color='#444444' marginTop={5}>
        VMware ESXi/vSphere, Windows Server, Active Directory, Ubuntu, UNIX CLI/Bash, RDP, SNMP, SSH/SFTP, Dell iDRAC/CMC, Filecloud, Nextcloud/Owncloud, Ubiquiti Unifi/EdgeOS
        </StyledText>
      <StyledText size={20} color='#4a544e' font='Ubuntu' marginTop={15} weight={500}>
        Architecture & Graphic Design:
        </StyledText>
      <StyledText size={16} color='#444444' marginTop={5}>
        Autodesk Revit/AutoCAD, SketchUp Pro/V-Ray for SketchUp, SU Podium, Lumion, Adobe Photoshop/Illustrator/Lightroom, Procreate
        </StyledText>
    </TextContainer>
  )
};

export default MoreInfo;