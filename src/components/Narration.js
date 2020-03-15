import React, { useEffect, memo, Fragment } from 'react';
import styled from 'styled-components';
import HumanIcon from './HumanIcon';

const TitleSection = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  > div {
    &: first-child {
      margin-right: 15px;
    }
  }
  margin-bottom: 32px;
`;

const Header = styled.div`
  font-weight: 500;
  font-size: 22px;
  line-height: 22px;
`;

const VideoContainer = styled.div`
  max-width: 576px;
  margin: 0 auto;
  width: 100%;
`;

const Video = styled.video`
  width: 100%;
`

//  TODO: Will have compicated Video later
//  chechk on this: https://github.com/twreporter/static-fe-boilerplate/blob/master/unjust-imprisonment/src/components/video.js
// https://www.html5rocks.com/en/tutorials/video/basics/
const Narration = ({ narrationSrc }) => {
  const { mp4, webm } = narrationSrc;
  return (
    <VideoContainer>
      <TitleSection>
        <HumanIcon />
        <Header>台人內心話</Header>
      </TitleSection>
      <Video
        controls="controls"
        preload="none"
      >
        <source
          src={webm}
          type="video/webm"
        />
        <source
          src={mp4}
          type="video/mp4"
        />
        Your browser does not support the video tag
      </Video>
    </VideoContainer>
  );
}

export default Narration;
