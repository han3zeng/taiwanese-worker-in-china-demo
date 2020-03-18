import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import { breakPoints } from './config/config';
import Components from './components/sections/SectionFactory';
import Landing from './components/Landing';
import Sidebar from './components/sidebar/Sidebar';
import People from './components/People.js';
import Related from './components/Related.js';
import Footer from './components/Footer';

import {
  relatedData,
  people,
  anchors,
} from './editor/text.js';
import Mask from './components/Mask';


const Layout = styled.div`
  padding: 0 40px 0 40px;
`;

const FooterLayout = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const theme = {
  backgroundColor: '#393939',
  navBarBackgroundColor: '#FFFDFC',
  fontFamily: '"Noto Sans TC", sans-serif',
};

const ContentWrapper = styled.div`
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
    color: white;
    font-family: ${props => props.theme.fontFamily};
    margin: 0;
    overflow-x: hidden;
    width: 100%;
    h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 69px;
      color: #F0D500;
      text-align: left;
      @media (max-width: ${breakPoints.maxTabelt}) {
        font-size: 40px;
        line-height: 57px;
        text-align: center;
      }
    }
    h2 {
      font-weight: 400;
      font-size: 36px;
      line-height: 51px;
      color: white;
      text-align: left;
      @media (max-width: ${breakPoints.maxTabelt}) {
        font-size: 30px;
        line-height: 44px;
        text-align: center;
      }
    }
    h3 {
      font-weight: 700;
      font-size: 28px;
      line-height: 45px;
      color: white;
      text-align: left;
      @media (max-width: ${breakPoints.maxTabelt}) {
        font-size: 24px;
        line-height: 38px;
        text-align: center;
      }
    }
    p {
      line-height: 1.6em;
      font-size: 18px;
      margin: 40px 0;
    }
    a {
      &:link {
        color: white;
        text-decoration: none;
        transition: 0.3s;
      }
      &:hover {
        color: white;
        transition: 0.3s;
      }
      &:visited {
        color: white;
      }
    }
    p {
      @media (max-width: 768px) {
        margin: 1.7em 0;
      }
    }
  }
`;



function App() {
  const [ hasAutoPlay, setAutoPlayState ] = useState(null);
  let videos = [];

  function setAutoPlay(autoPlayState) {
    setAutoPlayState(autoPlayState);
    videos.forEach((video) => {
      video.pause();
      video.muted = false;
    })
  }

  function videoInitialization (videoNode) {
    if (videoNode) {
      videos.push(videoNode);
    }
  }

  function renderSections({
    hasAutoPlay
  }) {
    return Components.map((Component, index) => (
      <Component
        key={`section_component_${index}`}
        hasAutoPlay={hasAutoPlay}
        videoInitialization={videoInitialization}
      />
    ));
  }

  return (
    <ThemeProvider
      theme={theme}
    >
      <Mask
        setAutoPlay={setAutoPlay}
      />
      <Navbar />
      <Layout>
        <ContentWrapper>
          <Landing
            hasAutoPlay={hasAutoPlay}
            videoInitialization={videoInitialization}
          />
          <Sidebar
            anchors={anchors}
          >
            {renderSections({ hasAutoPlay })}
          </Sidebar>
        </ContentWrapper>
        <FooterLayout>
          <People
            data={people}
          />
          <Related
            data={relatedData}
            title="延伸閱讀"
          />
        </FooterLayout>
        <Footer />
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
