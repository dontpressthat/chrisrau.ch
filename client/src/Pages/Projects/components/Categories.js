import React from 'react';
import styled from 'styled-components';
import StyledText from '../../../global-components/styled-components/StyledText';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Categories = ({ handleFilter, projects }) => {

  const uniqueItems = (elem, i, arr) => arr.indexOf(elem) === i;
  const categories = projects.map(project => project.category).filter(
    uniqueItems
  );

  let count = 0;

  const categoryItems = categories.map(item => {
    count++;
    return count < categories.length ?
      <Wrapper key={count}>
        <StyledText
          size={14}
          color='#333333'
          weight={400}
          cursor='crosshair'
          onClick={() => handleFilter(item)}
          disableHighlight={true}
          key={item}>
          {item}
        </StyledText>
        <div style={{ margin: '5px' }}>
          <StyledText
            size={20}
            color='#999999'
            weight={300}
            cursor='default'
            disableHighlight={true}>
            /
        </StyledText>
        </div>
      </Wrapper>

      :

      <StyledText
        size={14}
        color='#333333'
        weight={400}
        cursor='crosshair'
        onClick={() => handleFilter(item)}
        disableHighlight={true}
        key={item}>
        {item}
      </StyledText>
  });


  return (
    <Container>
      {categoryItems}
    </Container>
  )
}

export default Categories;