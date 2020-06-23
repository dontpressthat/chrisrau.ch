import React, { useState } from 'react';
import styled from 'styled-components';
import StyledFlex from '../../global-components/styled-components/StyledFlex';
import Tile from './components/Tile';
import Categories from './components/Categories';
import projectList from './projectList';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TileGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  @media only screen and (max-width: 600px) {
    width: 260px;
  };
  @media only screen and (min-width: 600px) and (max-width: 1080px) {
    width: 520px;
  };
  @media only screen and (min-width: 900px) {
    width: 780px;
  };
`

const CenterContainer = styled.div`
`

const Projects = ({ handlePopup }) => {

  const [activeCategory, setActiveCategory] = useState('All');

  const handleFilter = (category) => {
    setActiveCategory(category);
  }

  const ProjectItems = ({ projects, showCategory }) => (
    projects.filter(
      ({ category }) =>
        showCategory === category || showCategory === 'All'
    ).map(({ category, name, image, description, github, date }) => (
      <Tile
        key={`ProjectItems-${name}`}
        info={
          {
            name: name,
            image: image,
            category: category,
            description: description,
            github: github,
            date: date
          }
        }
        handleClick={handlePopup}
      />
    ))
  );

  return (
    <Container>
      <Helmet>
        <title>My Projects</title>
      </Helmet>
      <Categories handleFilter={handleFilter} projects={projectList} active={activeCategory} />
      <CenterContainer>
        <TileGrid>
          <ProjectItems projects={projectList} showCategory={activeCategory} />
        </TileGrid>
      </CenterContainer>
    </Container>
  )
}

export default Projects;
