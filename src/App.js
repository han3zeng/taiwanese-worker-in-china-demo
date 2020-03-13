import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const Layout = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px 0 20px;
`;

const theme = {
  navBarBackgroundColor: '#FFFDFC',
  fontFamily: '"Noto Sans TC", sans-serif',
};


const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F8F5F8;
    color: #424242;
    font-family: ${props => props.theme.fontFamily};
    width: 100%;
    overflow-x: hidden;
    a {
      &:link {
        color: #424242;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: 0.3s;
      }
      &:hover {
        color: #424242;
        border-bottom: 1px solid #b3b3b3;
        transition: 0.3s;
      }
      &:visited {
        color: #424242;
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
      <Layout>
        <div>test</div>
      </Layout>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
