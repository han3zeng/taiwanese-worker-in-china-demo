import React, {  PureComponent } from 'react';
import styled from 'styled-components';
import PlayIconSrc from '../assets/play.svg';
import { Waypoint } from 'react-waypoint';

const VideoContainer = styled.div`
  position: relative;
  cursor: pointer;
`

const VideoMaskTop = styled.div`
  height: 2px;
  width: 100%;
  position: absolute;
  background-color: #393939;
  top: 0;
  left: 0;
`;

const VideoMaskBottom = styled.div`
  height: 7px;
  width: 100%;
  position: absolute;
  background-color: #393939;
  bottom: 0;
  left: 0;
`;


const Video = styled.video`
  width: 100%;
`

const Control = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  > img {
    position: absolute;
    left: 0;
    bottom: 45px;
    height: 54px;
    width: 54px;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 30px;
  height: 54px;
  width: 54px;
  border-radius: 50%;
  background-color: #E3E3E3;
  &:after {
    content: "";
    border-top: 13px solid transparent;
    border-bottom: 13px solid transparent;
    border-left: 21px solid #8E8E8E;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const PlaybackContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 100%;
  height: 2px;
  transform: translateX(-50%);
  background-color: #B0B0B0;
  @media(max-width: 414px) {
    bottom: 16px;
  }
`

const CurrentTime = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  background-color: #F0F0F0;
  width: 100%;
  transform: scaleX(0);
  transform-origin: top left;
`


class Playback extends PureComponent {
  constructor(props) {
    super(props);
    this.duration = null
    this.setCurrentTime = this._setCurrentTime.bind(this);
    this.setDuration = this._setDuration.bind(this);
  }

  _setCurrentTime(currentTime) {
    if (currentTime) {
      this.currentTime.style.transform = `scaleX(${currentTime/this.duration})`;
    }
  }

  _setDuration(duration) {
    if (!this.duration) {
      this.duration = duration;
    }
  }

  render() {
    return (
      <PlaybackContainer>
        <CurrentTime
          ref={(node) => {
            this.currentTime = node;
          }}
        />
      </PlaybackContainer>
    );
  }
};



//  TODO: Will have compicated Video later
//  chechk on this: https://github.com/twreporter/static-fe-boilerplate/blob/master/unjust-imprisonment/src/components/video.js
// https://www.html5rocks.com/en/tutorials/video/basics/
class VideoComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    }
    this.video = null;
    this.onPlayHandler = this._onPlayHandler.bind(this);
    this.onClickVideoHandler = this._onClickVideoHandler.bind(this);
    this.onEnterHandler = this._onEnterHandler.bind(this);
    this.onLeaveHandler = this._onLeaveHandler.bind(this);
    this.onEndHandler = this._onEndHandler.bind(this);
    this.onLoadedHandler = this._onLoadedHandler.bind(this);
    this._onEnterTime = 0;
  }

  _onLoadedHandler() {
    if (this.video && this.playback) {
      this.playback.setDuration(this.video.duration);
    }
  }

  _onPlayHandler() {
    if (this.video && this.playback) {
      this.playback.setCurrentTime(this.video.currentTime);
    }
  }

  _onEndHandler() {
    this._onEnterTime = 0;
    this.setState({
      isPlaying: false,
    })
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
    this._onEnterTime = 0;
    const { isPlaying } = this.state;
    if (isPlaying) {
      this._videoHandler({
        isPlaying: false,
      })
    }
  }

  _onEnterHandler(e) {
    this._onEnterTime = Date.now();
    const { hasAutoPlay } = this.props;
    if (hasAutoPlay) {
      // prevent video from playing by rapidscroll
      setTimeout(() => {
        if (this._onEnterTime > 0) {
          this._videoHandler({
            isPlaying: true,
          })
        }
      }, 1000);
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
      videoInitialization(this.video);
      this.video.onended = this.onEndHandler;
      this.video.ontimeupdate = this.onPlayHandler;
      this.video.onloadedmetadata = this.onLoadedHandler;
    }
  }

  componentDidUpdate(prevProps) {
    const { isLanding, hasAutoPlay } = this.props;
    if (prevProps.hasAutoPlay === null && hasAutoPlay && isLanding) {
      this._videoHandler({ isPlaying: true });
    }
  }

  render() {
    const { videoSrc } = this.props;
    const { isPlaying } = this.state;
    const { mp4, webm, poster } = videoSrc;
    return (
      <Waypoint
        onEnter={this.onEnterHandler}
        onLeave={this.onLeaveHandler}
        bottomOffset="50%"
      >
        <VideoContainer
          onClick={this.onClickVideoHandler}
        >
          <VideoMaskTop />
          <Video
            ref={(node) => {
              this.video = node;
            }}
            preload="none"
            poster={poster}
            muted
            playsInline
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
          <Control>
            <VideoMaskBottom />
            {!isPlaying && (
              <img src={PlayIconSrc} alt={`video_button_${videoSrc}`}/>
            )}
            <Playback
              ref={(node) => {
                this.playback = node;
              }}
            />
          </Control>
        </VideoContainer>
      </Waypoint>
    );
  }
}

export default VideoComponent;
