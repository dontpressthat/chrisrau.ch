import styled from 'styled-components';

const StyledText = styled.a`
  font-family: ${props => props.font || "'Roboto Condensed', sans-serif"};
  font-size: ${props => props.size}px;
  font-Weight: ${props => props.weight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.decoration};
  color: ${props => props.color};
  margin-left: ${props => props.indent}px;
  user-select: ${props => props.disableHighlight === true ? 'none' : null};
  &:hover {
    cursor: ${props => props.cursor};
  }

  @media only screen and (max-width: 960px) {
    font-size: ${props => props.size * 0.75}px;
  }

  @media only screen and (max-width: 640px) {
    font-size: calc(4px + ${props => props.size * 0.50}px);
  }
`

export default StyledText;