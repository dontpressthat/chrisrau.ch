import React from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';

const Container = styled.div`

`

// const Separator = styled.a`
//   font-family: 'Roboto Condensed', sans-serif;
//   font-weight: 300;
//   font-size: 20px;
//   margin-left: 10px;
//   margin-right: 10px;
//   color: #999999;
//   cursor: default;
//   user-select: none;
// `

const CategoryItem = ({ handleFilter }) => {
  return (
    <StyledText size={14} color='#333333' weight={400} cursor='crosshair' onClick={() => handleFilter('All')} disableHighlight={true}>All</StyledText>
  )
}

export default CategoryItem;