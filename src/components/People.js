import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 25px 0;
  border-top: 2px solid #6F6F6F;
  border-bottom: 2px solid #6F6F6F;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    line-height: 29px;
    font-size: 18px;
  }
`;

const People = ({ data }) => {
  const Content = data.map((person, index) => {
    return (
      <div key={`member_${person.name}`}>{`${person.title}｜${person.name}`}</div>
    )
  });
  return (
    <Container>
      {Content}
    </Container>
  )
};

export default People;
