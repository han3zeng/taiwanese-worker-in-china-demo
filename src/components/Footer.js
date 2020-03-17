import React, { Component } from 'react';
import styled from 'styled-components';
import PTSLogo from '../assets/pts_logo_bottom.svg';


const Container = styled.div`
  margin-top: 96px;
  padding: 30px 30px 50px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: white;
  > a {
    margin-bottom: 15px;
  }
`

const Footer = ({ people }) => {
  const rightClaim = 'Public Television Service Foundation.All Rights Reserved.';
  return (
    <Container>
      <a
        href="https://news.pts.org.tw/"
        alt="Taiwan Public Television Service Icon"
        rel="noopener noreferer"
        target="_blank"
      >
        <img src={PTSLogo}  alt="PTSLogo" />
      </a>
      <div>{rightClaim}</div>
    </Container>
  );
}

export default Footer;
