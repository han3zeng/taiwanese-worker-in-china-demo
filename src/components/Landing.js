import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 80px 0;
  > video {
    width: 100%;
    outline: none;
  }
`;

const arrowMovement = keyframes`
  0% {
      opacity: 0;
      top: 10px;
  }
  70% {
      opacity: 1;
  }
  100% {
      opacity: 0;
  }
`;

const animation = (props) => {
  if (props.first) {
    return css`
      ${arrowMovement} 2s  ease-in-out infinite;
    `
  } else {
    return css`
      ${arrowMovement} 2s 1s ease-in-out infinite;
    `
  }
};

const ArrowContainer = styled.div`
  position: relative;
`

const Arrow = styled.div`
  margin: 10px auto;
  position: absolute;
  animation: ${props => animation(props)};
  opacity: 0;
  left: 50%;
  top: 30px;
  transform-origin: 50% 50%;
  transform: translate3d(-50%, -50%, 0);
  &:after, &:before {
    background: #fff;
    content: '';
    display: block;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    border-radius: 60px;
  }
  &:before {
    transform: rotate(50deg) translateX(-13%);
    transform-origin: top left;
  }
  &:after {
      transform: rotate(-50deg) translateX(13%);
      transform-origin: top right;
  }
`

const vSrc = 'https://storage.googleapis.com/twreporter-multimedia/videos/20161215200335-b40e2785cfd721ca06d7ded5a0cb6726.mp4';

const Landing = () => {
  return (
    <Container>
      <video
        controls
        preload="auto"
        loop
        mute="true"
        autoPlay
      >
        <source
          src={''}
          type="video/webm"
        />
        <source
          src={vSrc}
          type="video/mp4"
        />
        Your browser does not support the video tag
      </video>
      <ArrowContainer>
        <Arrow
          first
        />
        <Arrow />
      </ArrowContainer>
    </Container>
  );
}

export default Landing;
