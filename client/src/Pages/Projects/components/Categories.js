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

const Categories = ({ handleFilter, projects, active }) => {

  const uniqueItems = (elem, i, arr) => arr.indexOf(elem) === i;
  const categories = projects.map(project => project.category).filter(uniqueItems);

  let count = 0;

  const categoryItems = categories.map(item => {
    count++;

    return count < categories.length ?
      <Wrapper key={count}>
        <StyledText
          size={14}
          color={item === active ? '#4a544e' : '#333333'}
          weight={item === active ? 600 : 400}
          fontStyle={item === active ? 'italic' : null}
          hoverStyle='italic'
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
        color={item === active ? '#4a544e' : '#333333'}
        weight={active === item ? 600 : 400}
        fontStyle={item === active ? 'italic' : null}
        hoverStyle='italic'
        cursor='crosshair'
        onClick={() => handleFilter(item)}
        disableHighlight={true}
        key={item}>
        {item}
      </StyledText>
  });


  return (
    <Container>
      <StyledText
        size={14}
        color={'All' === active ? '#4a544e' : '#333333'}
        weight={active === 'All' ? 600 : 400}
        fontStyle={'All' === active ? 'italic' : null}
        hoverStyle='italic'
        cursor='crosshair'
        onClick={() => handleFilter('All')}
        disableHighlight={true}>
        All
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
      {categoryItems}
    </Container>
  )
}

export default Categories;