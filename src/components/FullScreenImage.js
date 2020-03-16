import React, { useEffect, memo } from 'react';
import styled from 'styled-components';


const BackgroundImage = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-image: url("${props => props.imgSrc}");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 6;
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
  let containerNode = null;

  useEffect(() => {

  });

  function setRef(node) {
    if (node) {
      containerNode = node;
    }
  }

  return (
    <BackgroundImage
      ref={setRef}
      imgSrc={imgSrc}
    >
      <CatchPhrase>
        <h2>{one}</h2>
        <h2>{two}</h2>
      </CatchPhrase>
    </BackgroundImage>
  )
})

export default FullScreenImage;
