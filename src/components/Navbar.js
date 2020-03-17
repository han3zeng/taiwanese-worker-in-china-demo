import React, { useEffect, memo } from 'react';
import styled from 'styled-components';
import ptsIconSrc from '../assets/pts_logo_top_left.svg';
import { FacebookShare, LineShare } from './ShareButtons';

const height = '80px';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: ${height};
  position: fixed;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  top: 0px;
  transition-duration: 0.3s;
`;

const RightSubContainer = styled.div`
  display: flex;
  > div {
    &: first-child {
      margin-right: 24px;
    }
  }
`

const Navbar = memo(() => {
  let userScrollDown = null;
  let previousScrollY = null;
  let containerNode = null;
  const setContainerRef = (node) => {
    containerNode = node;
  }

  useEffect(() => {
    function trackScrollMovement() {
      if (previousScrollY) {
        userScrollDown = previousScrollY < window.scrollY;
      }
      previousScrollY = window.scrollY;
      if (userScrollDown && containerNode) {
        containerNode.style.transform = `translateY(-${height})`;
      } else if(!userScrollDown && containerNode) {
        containerNode.style.transform = `translateY(0)`;
      }
    }
    document.addEventListener('scroll', trackScrollMovement);
    return () => {
      document.removeEventListener('scroll', trackScrollMovement);
    }
  });

  return (
    <Container
      ref={setContainerRef}
    >
      <a
        href="https://newslab.pts.org.tw/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={ptsIconSrc}
          alt="public television service logo"
        />
      </a>
      <RightSubContainer>
        <FacebookShare />
        <LineShare />
      </RightSubContainer>
    </Container>
  );
});

export default Navbar;
