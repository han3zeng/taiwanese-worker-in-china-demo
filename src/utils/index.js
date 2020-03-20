import { breakPoints } from '../config/config';

const chooseSrc = ({ desktopSrc, mobileSrc }) => {
  if (window.innerWidth <= 768 ) {
    return mobileSrc;
  }
  return desktopSrc;
}

function throttle(fn, interval) {
  let lastExecutedTime = null;
  let executedInterval = null;
  return function decorator() {
    if (lastExecutedTime) {
      executedInterval = Date.now() - lastExecutedTime;
    }
    if (!lastExecutedTime || (lastExecutedTime && (executedInterval >= interval))) {
      fn.apply(this, arguments);
      lastExecutedTime = Date.now();
    }
  }
}


export {
  chooseSrc,
  throttle,
}
