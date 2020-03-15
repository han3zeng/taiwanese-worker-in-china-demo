/*global FB*/
import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../assets/header_share_fb.svg';
import lineIcon from '../assets/header_share_line.svg';


const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const target = 'https://newmedia.pts.org.tw/sub-chinaoutbreak-3-/';

const CustomizedLink = styled.a`
  display: contents;
`

const LineShare = () => {
  return (
    <Button>
      <CustomizedLink
        href={`https://social-plugins.line.me/lineit/share?url=${target}`}
        target="_blank"
        rel="noopener noreferer"
      >
        <img src={lineIcon} alt="line_share_button" />
      </CustomizedLink>
    </Button>
  )
}

const FacebookShare = () => {
  const fbShareHandler = () => {
    FB.ui({
      display: 'popup',
      method: 'share',
      href: `${target}`,
    }, function(response){});
  }

  return (
    <Button onClick={fbShareHandler}>
      <img src={facebookIcon} alt="facebook_share_button" />
    </Button>
  );
}

export {
  FacebookShare,
  LineShare,
}
