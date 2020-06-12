import styled from 'styled-components';

const StyledFlex = {
  Grid: styled.div`
    height: 100%;
  `,
  Row: styled.div`
    display: flex;
    align-items: ${(props) => props.position};
    height: ${(props) => props.height};
  `,
  Col: styled.div`
    flex: ${(props) => props.size};
    background-color: ${(props) => props.bgColor};
  `
}

export default StyledFlex;