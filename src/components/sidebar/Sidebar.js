import React, { Fragment, memo } from 'react';
import { Waypoint } from 'react-waypoint'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Anchors from './Anchors';
import _get from 'lodash/get';
import { breakPoints } from '../../config/config';

const _ = {
  get: _get,
}

const Container = styled.div`
  position: relative;
`

const AnchorTrack = styled.aside`
  display: flex;
  align-items: flex-end;
  position: absolute;
  right: -10px;
  top: 0;
  height: 100%;
  @media (max-width: ${breakPoints.minTablet}) {
    right: -20px;
  }
`;


function Sidebar ({
  children,
  anchors,
}) {
  let modules = (() => {
    if (!children) {
      return [];
    } else if (Array.isArray(children)) {
      return children;
    } else {
      return [children];
    }
  })();
  let moduleMap = {};
  let currentModuleId = null;
  let anchorsNode = null;
  let setModule = null;


  const forwardSetModule = (fn) => {
    if (!setModule) {
      setModule = fn;
    }
  };

  const onEnterHandler = (nextModuleId) => {
    setModule(nextModuleId);
    currentModuleId = nextModuleId;
  }

  const onLeaveHandler = (onLeaveModuleId, props) => {
    const { currentPosition } = props;
    const firstModuleId = _.get(anchors, `[0].id`, null);
    const lastModuleId = _.get(anchors, `[${anchors.length - 1}].id`, null);

    if (onLeaveModuleId === firstModuleId && currentPosition === 'below') {
      setModule(null);
    } else if (onLeaveModuleId === lastModuleId && currentPosition === 'above') {
      setModule(null);
    }
  }

  const setAnchorNode = (node) => {
    if (node) {
      anchorsNode = node;
    }
  }

  const onClickAnchorHandler = ({
    moduleId,
    event,
  }) => {
    const node = moduleMap[moduleId];
    if (window && node) {
      event.preventDefault();
      // To trigger onLeave of waypoint, we need plus 1
      let target = window.pageYOffset + node.getBoundingClientRect().top;
      // node.offsetTop
      window.scrollTo({
        top: target + 1,
        behavior: 'smooth'
      });
    }
  }

  const Contents = modules.map((module, index) => {
    const moduleId = _.get(anchors, `${index}.id`, `side_bar_module_${index}`);
    return (
      <Waypoint
        key={moduleId}
        onLeave={(props) => { onLeaveHandler(moduleId, props) }}
        onEnter={() => { onEnterHandler(moduleId) }}
        fireOnRapidScroll
        topOffset={(index + 1) === modules.length ? '95%%' : '4%'}
        bottomOffset={(index + 1) === modules.length ? '4%' : '95%'}
      >
        <div
          id={moduleId}
          ref={(node) => { moduleMap[moduleId] = node }}
        >
          {module}
        </div>
      </Waypoint>
    )
  });

  return (
    <Fragment>
      <Container>
        <main>
          {Contents}
        </main>
        <AnchorTrack>
          <Anchors
            handleClickAnchor={onClickAnchorHandler}
            data={anchors}
            forwardSetModule={forwardSetModule}
          />
        </AnchorTrack>
      </Container>
    </Fragment>
  )
//   return (
//     <Fragment>
//       {Contents}
//       <Anchors
//         handleClickAnchor={onClickAnchorHandler}
//         data={anchors}
//         forwardSetModule={forwardSetModule}
//       />
//     </Fragment>
//   )
}

Sidebar.defaultProps = {
  children: [],
  anchors: [],
};

Sidebar.propTypes = {
  children: PropTypes.array,
  anchors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  })),
};

export default memo(Sidebar);
