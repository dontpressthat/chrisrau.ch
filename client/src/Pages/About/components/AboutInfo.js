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

const AboutInfo = () => {

  return (
    <TextContainer direction='column'>
      <StyledText size={42} color='#4a544e' font='Ubuntu' weight={500}>
        A bit about me
        </StyledText>
      <StyledText size={16} color='#444444' marginTop={15}>
        I am a full stack software engineer with an architectural design and IT background and a deep passion for designing and building things.
        </StyledText>
      <StyledText size={16} color='#444444' marginTop={10}>
        From a very young age, I was always technologically and mechanically curious. One of the earliest examples I can remember dates back to the first grade, when I took a 9 volt battery, light bulb, and one of those noisy doorstops to create a switched electrical circuit. I excitedly showed my parents what I’d created and brought it to school for show and tell! After that, I would always sneak off to the garage to tinker and learn hands-on. I got into building custom PCs around 12 years old, partly to play video games that demanded above average computing power, but also just for the fun and challenge of building them. I would spend a lot of time at my local LAN center and got my first job there as a computer repair technician, and things took off from there.
        </StyledText>
      <StyledText size={16} color='#444444' marginTop={10}>
        I began noticing a trend among all my hobbies and jobs throughout the years. Whether the projects at hand revolved around computers, photography, cars, or architecture, I always found joy in building, designing, or improving upon them. I found that I would always gravitate towards jobs and responsibilities that allowed me to design, engineer, and problem solve, but the opportunities that came with work weren’t enough for me. At home, I maintain a “homelab”, which is an enterprise server and networking rack that allows me to practice in systems administration as well as provide the household with unique tech functionality. When I need to step away from a computer, sometimes I’ll wrench on my 4Runner project build, or drive it to some really remote places to camp and shoot some photos!
        </StyledText>
      <StyledText size={16} color='#444444' marginTop={10}>
        The above aside, I view software development as the most fulfilling of all. There is nothing better than dreaming up an application, building it and working through the bugs, and constantly improving upon it! There is no limit to what can be created, and that is why I became an engineer.
        </StyledText>
    </TextContainer>
  )
};

export default AboutInfo;