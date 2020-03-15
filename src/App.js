import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import { breakPoints } from './config/config';
import SectoinFactory from './components/sections/SectionFactory';
import Landing from './components/Landing';

const Layout = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px 0 20px;
`;

const theme = {
  backgroundColor: '#393939',
  navBarBackgroundColor: '#FFFDFC',
  fontFamily: '"Noto Sans TC", sans-serif',
};


const ContentWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
    color: white;
    font-family: ${props => props.theme.fontFamily};
    margin: 0;
    overflow-x: hidden;
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
        border-bottom: 1px solid transparent;
        transition: 0.3s;
      }
      &:hover {
        color: white;
        border-bottom: 1px solid #b3b3b3;
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

const people = ['卓冠齊、吳亭霓、簡毅慧、曾芯敏、曾涵郁'];

function App() {
  return (
    <ThemeProvider
      theme={theme}
    >
      <Navbar />
      <Landing />
      <Layout>
        <ContentWrapper>
          <SectoinFactory />
        </ContentWrapper>
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
