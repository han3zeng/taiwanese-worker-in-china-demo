import React, { useEffect, memo, Fragment } from 'react';
import styled from 'styled-components';
import { blockTypes } from '../../editor/text';
import FullScreenImage from '../FullScreenImage';
import Narration from '../Narration';

const Container = styled.div`
  margin: 90px auto;
  max-width: 768px;
`;

const SectionPrototype = memo(({ data }) => {
  const Content = data.map((block, index) => {
    const {
      type,
      content,
      backgroundImageSrc,
      bgCatchPhrases,
      narrationSrc,
    } = block;
    if (block.type === blockTypes.backgoundImage) {
      return (
        <FullScreenImage
          key={`${block.type}_${index}`}
          imgSrc={backgroundImageSrc}
          catchPhrases={bgCatchPhrases}
        />
      )
    }
    if (block.type === blockTypes.headerThree) {
      return (
        <h3
          key={`${block.type}_${index}`}
        >
          {content}
        </h3>
      )
    }
    if (block.type === blockTypes.paragraph) {
      return (
        <p
          key={`${block.type}_${index}`}
        >
          {content}
        </p>
      )
    }
    if (block.type === blockTypes.narration) {
      return (
        <Narration
          key={`${block.type}_${index}`}
          narrationSrc={narrationSrc}
        />
      )
    }
    return null;
  })

  return (
    <Container>
      {Content}
    </Container>
  )
});

export default SectionPrototype;