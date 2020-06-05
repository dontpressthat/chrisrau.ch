import React, { useState } from 'react';
import styled from 'styled-components';
import StyledFlex from '../../global-components/styled-components/StyledFlex';
import Tile from './components/Tile';
import Categories from './components/Categories';
import projectList from './projectList';

const TileGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`

const Projects = () => {

  const [activeCategory, setActiveCategory] = useState('All');

  const handleFilter = (category) => {
    setActiveCategory(category);
  }

  const ProjectItems = ({ projects, showCategory }) => (
    projects.filter(
      ({ category }) =>
        showCategory === category || showCategory === 'All'
    ).map(({ category, name, image }) => (
      <Tile
        key={`ProjectItems-${name}`}
        category={category}
        name={name}
        image={image}
      />
    ))
  );

  return (
    <StyledFlex.Grid>
      <StyledFlex.Row position=''>
        <StyledFlex.Col size={1} />
        <StyledFlex.Col size={4}>
          <Categories handleFilter={handleFilter} projects={projectList} />
          <TileGrid>
            <ProjectItems projects={projectList} showCategory={activeCategory} />
          </TileGrid>
        </StyledFlex.Col>
        <StyledFlex.Col size={1}>
        </StyledFlex.Col>
      </StyledFlex.Row>
    </StyledFlex.Grid>
  )
}

export default Projects;