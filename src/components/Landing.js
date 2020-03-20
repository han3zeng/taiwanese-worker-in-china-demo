import React, { useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import SectionPrototype from './sections/SectionPrototype';
import { contentLandingSection } from '../editor/text';
import { setup } from '../config/config';
import ArrowIcon from '../assets/header_scroll_arrow.svg';
import Video from './Video';
import { chooseSrc } from '../utils';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

const ArrowImageContainer = styled.div`
  position: absolute;
  cursor: pointer;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);

`

const ArrowContainer = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 100px;
  left: 50%;
  cursor: pointer;
  width: 33px;
  height: 65px;
  bottom: 17px;
`

const Arrow = styled.div`
  margin: 10px auto;
  position: absolute;
  animation: ${props => animation(props)};
  opacity: 0;
  top: 30px;
  transform-origin: 50% 50%;
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

// const vSrc = 'https://storage.googleapis.com/twreporter-multimedia/videos/20161215200335-b40e2785cfd721ca06d7ded5a0cb6726.mp4';

const Landing = ({
  hasAutoPlay,
  videoInitialization,
}) => {
  let videoWrapperNode = null;
  let videoNode = null;
  let articleNode = null;
  let webmSrc = chooseSrc({
    desktopSrc: `${setup.cdnUrlBase}/header-video-desktop.webm`,
    mobileSrc: `${setup.cdnUrlBase}/header-video-mobile.webm`,
  });
  let mp4Src = chooseSrc({
    desktopSrc: `${setup.cdnUrlBase}/header-video-desktop.mp4`,
    mobileSrc: `${setup.cdnUrlBase}/header-video-mobile.mp4`,
  });

  useEffect(() => {
    function throttle(fn, interval) {
      let lastExecutedTime = null;
      let executedInterval = null;
      return function decorator() {
        if (lastExecutedTime) {
          executedInterval = Date.now() - lastExecutedTime;
        }
        if (!lastExecutedTime || (lastExecutedTime && (executedInterval >= interval))) {
          fn.apply(this, arguments);
          lastExecutedTime = Date.now();
        }
      }
    }
    const resizeHandler = () => {
      if (videoNode) {
        let originalSrc = videoNode.currentSrc;
        let targetSrc = null;
        if (originalSrc.match(/\.\w*$/)[0] === '.webm') {
          targetSrc = chooseSrc({
            desktopSrc: `${setup.cdnUrlBase}/header-video-desktop.webm`,
            mobileSrc: `${setup.cdnUrlBase}/header-video-mobile.webm`,
          });
        } else {
          targetSrc = chooseSrc({
            desktopSrc: `${setup.cdnUrlBase}/header-video-desktop.mp4`,
            mobileSrc: `${setup.cdnUrlBase}/header-video-mobile.mp4`,
          });
        }
        if (videoNode.src !== targetSrc) {
          videoNode.src = targetSrc;
        }
      }
    }

    if (window && videoWrapperNode) {
      videoWrapperNode.style.height = `${window.innerHeight}px`;
    }
    // window.addEventListener('resize', resizeHandler);

    return () => {
      // window.removeEventListener('resize', resizeHandler);
    }
  });
  return (
    <Container>
      <VideoWrapper
        ref={(node) => {
          videoWrapperNode = node;
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          ref={(node) => {
            videoNode = node;
          }}
        >
          <source
            src={webmSrc}
            type="video/webm"
          />
          <source
            src={mp4Src}
            type="video/mp4"
          />
        </video>
        {/*<ArrowImageContainer>
          <img src={ArrowIcon} alt="arrow icon at landing"/>
        </ArrowImageContainer>*/}
          <ArrowContainer
            onClick={(event) => {
              if (articleNode) {
                event.preventDefault();
                // To trigger onLeave of waypoint, we need plus 1
                let marginTop = 0;
                try {
                  marginTop = +window.getComputedStyle(articleNode).marginTop.match(/\d*/)[0]
                } catch(e) {

                }
                let target = window.pageYOffset + articleNode.getBoundingClientRect().top - marginTop;
                // node.offsetTop
                window.scrollTo({
                  top: target + 1,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <Arrow
              first
            />
            <Arrow />
          </ArrowContainer>
      </VideoWrapper>
      <SectionPrototype
        forwardRef={(node) => { articleNode = node; }}
        data={contentLandingSection}
      />
    </Container>
  );
}

export default Landing;
