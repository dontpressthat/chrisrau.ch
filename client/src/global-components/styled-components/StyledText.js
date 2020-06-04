import styled from 'styled-components';

const StyledText = styled.a`
  font-family: ${props => props.font || "'Roboto Condensed', sans-serif"};
  font-size: ${props => props.size}px;
  font-Weight: ${props => props.weight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.decoration};
  color: ${props => props.color};
  margin-left: ${props => props.indent}px;
`

export default StyledText;