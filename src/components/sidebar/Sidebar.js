import React, { Fragment, memo } from 'react';
import { Waypoint } from 'react-waypoint'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Anchors from './Anchors';
import _get from 'lodash/get';

const _ = {
  get: _get,
}


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
  let firstModuleId = null;


  const forwardSetModule = (fn) => {
    if (!setModule) {
      setModule = fn;
    }
  };

  const onEnterHandler = (nextModuleId) => {
    setModule(nextModuleId);
    currentModuleId = nextModuleId;
  }

  const onLeaveHandler = (onLeaveModuleId) => {
    if (onLeaveModuleId === firstModuleId) {
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
      window.scrollTo({
        top: node.offsetTop + 1,
        behavior: 'smooth'
      });
    }
  }

  const Contents = modules.map((module, index) => {
    const moduleId = _.get(anchors, `${index}.id`, `side_bar_module_${index}`);
    if (index === 0) {
      firstModuleId = moduleId;
    }
    return (
      <Waypoint
        key={moduleId}
        onLeave={() => { onLeaveHandler(moduleId) }}
        onEnter={() => { onEnterHandler(moduleId) }}
        fireOnRapidScroll
        topOffset="4%"
        bottomOffset={(index + 1) === modules.length ? '50%' : '95%'}
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
      <Anchors
        handleClickAnchor={onClickAnchorHandler}
        data={anchors}
        forwardSetModule={forwardSetModule}
      />
      {Contents}
    </Fragment>
  )
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
