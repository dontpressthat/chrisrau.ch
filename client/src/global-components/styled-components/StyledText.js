import styled from 'styled-components';

const StyledText = styled.a`
  font-family: ${props => props.font || "'Roboto Condensed', sans-serif"};
  font-size: ${props => props.size}px;
  font-weight: ${props => props.weight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.decoration};
  color: ${props => props.color};
  margin-left: ${props => props.indent}px;
  user-select: ${props => props.disableHighlight === true ? 'none' : null};
  outline: ${props => props.outline};
  white-space: ${props => props.whiteSpace};
  
  &:hover {
    cursor: ${props => props.cursor};
    font-style: ${props => props.hoverStyle};
  }

  @media only screen and (max-width: 900px) {
    font-size: ${props => props.size * 0.75}px;
  }

  @media only screen and (max-width: 350px) {
    font-size: calc(${props => props.size * 0.65}px);
  }
`

export default StyledText;