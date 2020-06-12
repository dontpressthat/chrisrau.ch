import React from 'react';
import MeInfo from './components/MeInfo';
import StyledFlex from '../../global-components/styled-components/StyledFlex';


const Me = () => {
  return (
    <StyledFlex.Grid>
      <StyledFlex.Row position='center' height='100%'>
        <StyledFlex.Col size={1} />
        <StyledFlex.Col size={4}>
          <MeInfo />
        </StyledFlex.Col>
        <StyledFlex.Col size={1}>
        </StyledFlex.Col>
      </StyledFlex.Row>
    </StyledFlex.Grid>
  )
}

export default Me;