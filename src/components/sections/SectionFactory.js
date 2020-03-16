import React, { memo, Fragment } from 'react';
import SectionPrototype from './SectionPrototype';
import { contentSectionOne, contentSectionTwo, contentSectionThree, contentSectionFour } from '../../editor/text';

const SectionOne = () => {
  return (
    <SectionPrototype
      data={contentSectionOne}
    />
  );
}

const SectionTwo = () => {
  return (
    <SectionPrototype
      data={contentSectionTwo}
    />
  );
}

const SectionThree = () => {
  return (
    <SectionPrototype
      data={contentSectionThree}
    />
  );
}

const SectionFour = () => {
  return (
    <SectionPrototype
      data={contentSectionFour}
    />
  );
}

export {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
};
