import React from 'react';
import Info from './components/Info';
import StyledFlex from '../../global-components/styled-components/StyledFlex';


const Me = () => {
  return (
    <StyledFlex.Grid>

      <StyledFlex.Row position='center'>

        <StyledFlex.Col size={1} />

        <StyledFlex.Col size={4}>
          <Info />
        </StyledFlex.Col>

        <StyledFlex.Col size={1}>

        </StyledFlex.Col>

      </StyledFlex.Row>

    </StyledFlex.Grid>
  )
}

export default Me;