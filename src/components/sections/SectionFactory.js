import React, { memo, Fragment } from 'react';
import SectionPrototype from './SectionPrototype';
import { contentSectionOne, contentSectionTwo, contentSectionThree } from '../../editor/text';

const SectoinFactory = memo(() => {
  return (
    <Fragment>
      <SectionPrototype
        data={contentSectionOne}
      />
      <SectionPrototype
        data={contentSectionTwo}
      />
      <SectionPrototype
        data={contentSectionThree}
      />
    </Fragment>
  )
})

export default SectoinFactory;
