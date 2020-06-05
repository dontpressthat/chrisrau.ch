import React from 'react';
import styled from 'styled-components';
import StyledFlex from '../../global-components/styled-components/StyledFlex';
import Tile from './components/Tile';
import Categories from './components/Categories';

const TileGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`

const handleFilter = (category) => {
  console.log(category);
}

const Projects = () => {
  return (
    <StyledFlex.Grid>

      <StyledFlex.Row position=''>

        <StyledFlex.Col size={1} />

        <StyledFlex.Col size={4}>
          <Categories handleFilter={handleFilter} />
          <TileGrid>
            <Tile name='Project Name 1' image='/assets/images/1.jpg' category='Development' />
            <Tile name='Project Name 2' image='/assets/images/1.jpg' category='Architecture' />
            <Tile name='Project Name 3' image='/assets/images/1.jpg' category='Architecture' />
            <Tile name='Project Name 4' image='/assets/images/1.jpg' category='Design' />
            <Tile />
            <Tile />
          </TileGrid>
        </StyledFlex.Col>

        <StyledFlex.Col size={1}>

        </StyledFlex.Col>

      </StyledFlex.Row>
      
    </StyledFlex.Grid>
  )
}

export default Projects;