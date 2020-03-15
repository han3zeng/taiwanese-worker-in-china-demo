import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Head = styled.div`
  background-color: white;
  width: 12px;
  height: 12px;
  border-radius: 50%;
`

const Body = styled.div`
  background-color: white;
  height: 31px;
  width: 12px;
  border-top-right-radius: 50%;
  border-top-left-radius: 10px;
`

const HumanIcon = () => (
  <Container>
    <Head />
    <Body />
  </Container>
);

export default HumanIcon;
