import React, { memo } from 'react';
import styled from 'styled-components';

const minDesktop = '925px';
const maxMobile = '414px';


const Container = styled.div`
  max-width: 885px;
  margin: 45px auto;
  width: 100%;
`

const Grid = styled.div`
  display: grid;
  grid-column-gap: 32px;
  grid-row-gap: 48px;
  grid-template-columns: auto auto auto;
  width: 100%;
  justify-content: space-between;
  a {
    &:link {
      text-decoration: none;
      border: none
    }
    &:hover {
      text-decoration: none;
      border: none
    }
    &:visited {
      text-decoration: none;
      border: none
    }
  }
  @media(max-width: ${minDesktop}) {
    grid-template-columns: auto auto;
  }
  @media(max-width: ${maxMobile}) {
    grid-template-columns: auto;
  }
`

const GridItem = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 20px;
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 166px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media(max-width: ${minDesktop}) {
    grid-template-columns: auto auto;
    height: 206px;
  }
`;

const TextWrapper = styled.div`
  > div {
    margin: 10px 0;
  }
`

const Category = styled.div`
  color: white;
  font-size: 14px;
`;

const GridTitle = styled.div`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const Date = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
`

const Title = styled.h4`
  font-size: 22px;
  color: white;
  text-align: center;
  margin-bottom: 30px;
`


const Related = ({ data, title }) => {
  const gridItems = data.map((item, index) => {
    const { title, date, category, imgUrl, externalLink } = item;
    return (
      <GridItem
        key={`related_item_${title}`}
        marginBottom={index !== data.length - 1}
      >
        <a
          href={externalLink}
          alt={`link_to_${GridTitle}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImgWrapper>
            <img src={imgUrl} alt={GridTitle} />
          </ImgWrapper>
          <TextWrapper>
            <Category>{category}</Category>
            <GridTitle>{title}</GridTitle>
            <Date>{date}</Date>
          </TextWrapper>
        </a>
      </GridItem>
    )
  });

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Grid>
        {gridItems}
      </Grid>
    </Container>
  )
}

export default memo(Related);
