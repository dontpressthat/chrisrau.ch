import React, { useState } from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

const Separator = styled.a`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 300;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  color: #999999;
  cursor: default;
  user-select: none;
`

const Categories = ({ handleFilter }) => {
  let count = 0;
  let categoryList = [
    { name: 'All' },
    { name: 'Development' },
    { name: 'Design' },
    { name: 'Photography' },
    { name: 'Rendering' }
  ];

  const [categories, setCategories] = useState(categoryList);

  const categoryItems = categories.map(category => {
    return <StyledText
      size={14}
      color='#333333'
      weight={400}
      cursor='crosshair'
      onClick={() => handleFilter(category.name)}
      disableHighlight={true}
      key={category.name}>
      {category.name}
    </StyledText>
  });


  return (
    <Container>
      {categoryItems}
    </Container>
  )
}

export default Categories;