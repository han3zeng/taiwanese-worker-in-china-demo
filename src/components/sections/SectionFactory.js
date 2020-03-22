import React from 'react';
import SectionPrototype from './SectionPrototype';
import { contentSections } from '../../editor/text';

const Components = contentSections.map((content) => {
  return ({ hasAutoPlay, videoInitialization }) => (
    <SectionPrototype
      data={content}
      hasAutoPlay={hasAutoPlay}
      videoInitialization={videoInitialization}
    />
  );
})

export default Components;
