import React from 'react';
import HelloInfo from './components/HelloInfo';
import StyledFlex from '../../global-components/styled-components/StyledFlex';
import { Helmet } from 'react-helmet';


const Hello = () => {
  return (
    <StyledFlex.Grid>
      <Helmet>
        <title>Chris Rauch's Portfolio</title>
      </Helmet>
      <StyledFlex.Row position='center' height='100%'>
        <StyledFlex.Col size={1} />
        <StyledFlex.Col size={4}>
          <HelloInfo />
        </StyledFlex.Col>
        <StyledFlex.Col size={1}>
        </StyledFlex.Col>
      </StyledFlex.Row>
    </StyledFlex.Grid>
  )
}

export default Hello;