import React, { memo } from 'react';
import styled from 'styled-components';
import { blockTypes } from '../../editor/text';
import FullScreenImage from '../FullScreenImage';
import Narration from '../Narration';

const Container = styled.div`
  margin: 90px auto;
  max-width: 768px;
`;

const SectionPrototype = memo(({ data, hasAutoPlay, videoInitialization, forwardRef }) => {
  function createMarkup(content) {
    return {__html: `${content}`};
  }
  const Content = data.map((block, index) => {
    const {
      content,
      backgroundImageSrc,
      bgCatchPhrases,
      videoSrc,
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
          dangerouslySetInnerHTML={createMarkup(content)}
        />
      )
    }
    if (block.type === blockTypes.narration) {
      return (
        <Narration
          key={`${block.type}_${index}`}
          videoSrc={videoSrc}
          hasAutoPlay={hasAutoPlay}
          videoInitialization={videoInitialization}
        />
      )
    }
    return null;
  })

  return (
    <Container
      ref={(node) => {
        if (forwardRef && node) {
          forwardRef(node);
        }
      }}
    >
      {Content}
    </Container>
  )
});

export default SectionPrototype;
