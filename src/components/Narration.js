import React, { memo } from 'react';
import styled from 'styled-components';
import Video from './Video';

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
  line-height: 27px;
`;

const NarrationContainer = styled.div`
  max-width: 576px;
  margin: 0 auto;
`;

const Narration = ({ videoSrc, videoInitialization, hasAutoPlay }) => {
  const { videoTitlle } = videoSrc;
  return (
    <NarrationContainer>
      <TitleSection>
        <Header>{videoTitlle}</Header>
      </TitleSection>
      <Video
        videoSrc={videoSrc}
        hasAutoPlay={hasAutoPlay}
        videoInitialization={videoInitialization}
      />
    </NarrationContainer>
  );
}

export default memo(Narration);
