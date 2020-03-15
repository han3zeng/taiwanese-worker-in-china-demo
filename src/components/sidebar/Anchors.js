import React, { useState, memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

const _ = {
  get: _get,
}

const Conatiner = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 5;
`;

const AnchorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    margin-bottom: 10px;
  }
`;

const AnchorWrapper = styled.div`
  padding: 0 10px;
  cursor: pointer;
`;

const AnchorMask = styled.div`
  width: 100px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  &:hover {
    > div {
      &:before {
        transform: translateX(-2px);
      }
    }
  }
`;

const Anchor = styled.div`
  width: 2px;
  height: 48px;
  background-color: ${props => props.current ? '#F5AE27' : 'white'};
  cursor: pointer;
  position: relative;
  &:before {
    display: flex;
    padding: 0 10px;
    align-items: center;
    white-space: nowrap;
    position: absolute;
    right: 0;
    height: 100%;
    background-color: #999999;
    content: '${props => props.label || ''}';
    transform: translateX(100%);
    transition-duration: 0.3s;
  }
`;

function Anchors({
  data,
  forwardSetModule,
  handleClickAnchor,
}) {
  const [ currentModuleId, setModule ] = useState(_.get(data, '0.id', null));
  forwardSetModule(setModule);

  const onClickAnchorHandler = ({
    moduleId,
    event,
  }) => {
    handleClickAnchor({
      moduleId,
      event,
    });
  };

  const AnchorContents = data.map((anchor, index) => {
    const moduleId = _.get(anchor, 'id', null);
    const label = _.get(anchor, 'label', null);
    return (
      <AnchorWrapper
        key={`anchor_${moduleId}`}
        onClick={(e) => {
          onClickAnchorHandler({
            moduleId: _.get(anchor, 'id', null),
            event: e,
          });
        }}
      >
        <AnchorMask>
          <Anchor
            label={label}
            current={moduleId === currentModuleId}
          />
        </AnchorMask>
      </AnchorWrapper>
    )
  });


  return (
    <Conatiner>
      <AnchorsContainer>
        {AnchorContents}
      </AnchorsContainer>
    </Conatiner>
  )
}

Anchors.defaultProps = {
  data: [],
}

Anchors.propTypes = {
  handleClickAnchor: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  })),
  forwardSetModule: PropTypes.func.isRequired,
}


export default memo(Anchors);
