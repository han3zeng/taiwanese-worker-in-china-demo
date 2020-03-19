import { breakPoints } from '../config/config';

const chooseSrc = ({ desktopSrc, mobileSrc }) => {
  if (window.innerWidth <= 768 ) {
    return mobileSrc;
  }
  return desktopSrc;
}


export {
  chooseSrc,
}
