import React, { useEffect, memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .visible {
    background-image: url("${props => props.imgSrcDesktop}");
    @media(max-width: 582px) {
      background-image: url("${props => props.imgSrcMobile}");
    }
  }
  .lazyBackground {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 6;
  }
`

const CatchPhrase = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const FullScreenImage = memo((props) => {
  const { imgSrc, catchPhrases={} } = props;
  const { one, two } = catchPhrases;
  const { desktop, mobile } = imgSrc;
  let containerNode = null;

  useEffect(() => {
    if (window && containerNode) {
      containerNode.style.height = `${window.innerHeight}px`;
    }
  });

  function setRef(node) {
    if (node) {
      containerNode = node;
    }
  }

  return (
    <Container
      imgSrcDesktop={desktop}
      imgSrcMobile={mobile}
    >
      <div
        ref={setRef}
        className="lazyBackground"
      >
        {one && two && <CatchPhrase>
          <h2>{one}</h2>
          <h2>{two}</h2>
        </CatchPhrase>}
      </div>
    </Container>
  )
})

export default FullScreenImage;
