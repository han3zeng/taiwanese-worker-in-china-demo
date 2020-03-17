import React, { useEffect, memo, Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import HumanIcon from './HumanIcon';
import PlayIconSrc from '../assets/play.png';
import PauseIconSrc from '../assets/pause.png';
import { Waypoint } from 'react-waypoint'


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

const NarrationContainer = styled.div`
  max-width: 576px;
  margin: 0 auto;
`;

const VideoContainer = styled.div`
  position: relative;
  cursor: pointer;
`

const Video = styled.video`
  width: 100%;
`

const Button = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

//  TODO: Will have compicated Video later
//  chechk on this: https://github.com/twreporter/static-fe-boilerplate/blob/master/unjust-imprisonment/src/components/video.js
// https://www.html5rocks.com/en/tutorials/video/basics/
class Narration extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    }
    this.video = null;
    this.onClickVideoHandler = this._onClickVideoHandler.bind(this);
    this.onEnterHandler = this._onEnterHandler.bind(this);
    this.onLeaveHandler = this._onLeaveHandler.bind(this);
  }

  _videoHandler({
    isPlaying,
  }) {
    if (isPlaying) {
      this.video.play()
        .then(() => {
          this.setState({
            isPlaying: true,
          })
        })
        .catch((e) => {
          console.log('e: ', e);
        })
    } else {
      this.video.pause();
      this.setState({
        isPlaying: false,
      })
    }
  }

  _onLeaveHandler(e) {
    const { hasAutoPlay } = this.props;
    if (hasAutoPlay) {
      this._videoHandler({
        isPlaying: false,
      })
    }
  }

  _onEnterHandler(e) {
    const { hasAutoPlay } = this.props;
    if (hasAutoPlay) {
      this._videoHandler({
        isPlaying: true,
      })
    }
  }

  _onClickVideoHandler(e) {
    const { isPlaying: currentPlayingStatus } = this.state;
    if (!currentPlayingStatus) {
      this._videoHandler({
        isPlaying: true,
      })
    } else {
      this._videoHandler({
        isPlaying: false,
      })
    }
  }

  componentDidMount() {
    const { videoInitialization } = this.props;
    if (this.video) {
      console.log('didmount')
      videoInitialization(this.video);
    }
  }

  render() {
    const { narrationSrc } = this.props;
    const { isPlaying } = this.state;
    const { mp4, webm, poster } = narrationSrc;
    return (
      <NarrationContainer>
        <TitleSection>
          <HumanIcon />
          <Header>台人內心話</Header>
        </TitleSection>
        <Waypoint
          onEnter={this.onEnterHandler}
          onLeave={this.onLeaveHandler}
          bottomOffset="50%"
        >
          <VideoContainer
            onClick={this.onClickVideoHandler}
          >
            <Video
              ref={(node) => {
                this.video = node;
              }}
              preload="none"
              poster={poster}
              autoplay
              muted
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
            {!isPlaying && <Button src={PlayIconSrc} />}
          </VideoContainer>
        </Waypoint>
      </NarrationContainer>
    );
  }
}

export default Narration;
