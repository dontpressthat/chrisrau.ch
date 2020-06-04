import React from 'react';
import styled from 'styled-components';
import Info from './components/Info';

// const Container = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   height: 100%;
// `

const Grid = styled.div`
  height: 100%;
`

const Row = styled.div`
  display: flex;
  align-items: ${(props) => props.position};
  height: 95%;
`

const Col = styled.div`
  flex: ${(props) => props.size};
  background-color: ${(props) => props.bgColor};
`

const StyledInfo = styled(Info)`
  
`

const Me = () => {
  return (
    <Grid>
      <Row position='center'>
        <Col size={2} />
        <Col size={8}>
          <StyledInfo />
        </Col>
        <Col size={2}>

        </Col>
      </Row>
    </Grid>
  )
}

export default Me;