import React from 'react';
import HumanIcon from './HumanIcon';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #393939;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > div {
    &:nth-child(2) {
      margin: 24px 0;
    }
  }
`;

const Humans = styled.div`
  display: flex;
  justify-content: center;
  > div {
    &:nth-child(2) {
      margin: 0 24px;
    }
  }
`;


const Buttons = styled.div`
  display: flex;
  justify-content: center;
  > div {
    &:first-child {
      margin-right: 24px;
    }
  }
`

const Button = styled.div`
  color: white;
  padding: 7px 51px;
  border: 1px solid white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 18px;
  cursor: pointer;
`

const Text = styled.div`
  text-align: center;
  font-size: 22px;
  line-height: 35px;
`;


const MaskContent = ({ onConfirm, onCancel }) => {


  return (
    <Container>
      <Humans>
        <HumanIcon />
        <HumanIcon />
        <HumanIcon />
      </Humans>
      <Text>內文包含「台人心內話」影音，<br />是否自動播放？</Text>
      <Buttons>
        <Button onClick={onConfirm}>是</Button>
        <Button onClick={onCancel}>否</Button>
      </Buttons>
    </Container>
  )
}

export default MaskContent;
