import React, { useState, memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

const _ = {
  get: _get,
}

const Conatiner = styled.div`
  position: sticky;
  z-index: 5;
  padding-bottom: 90px;
  bottom: 30px;
`;

const AnchorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  > div {
    margin-bottom: 10px;
  }
`;

const AnchorWrapper = styled.div`
  cursor: pointer;
`;

const AnchorMask = styled.div`
  width: 90px;
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
  transition: background-color 0.3s linear;
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

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  > img {
    width: 100%;
  }
  right: 0;
  bottom: 0;
  transform: translate(50%, 120%);
`

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

  const Icon = () => {
    const module = data.find((entity, index) => entity.id === currentModuleId)
    if (module) {
      return (
        <IconWrapper>
          <img src={_.get(module, 'iconSrc', null)} alt={`module_${currentModuleId}_icon`} />
        </IconWrapper>
      )
    }
    return null;
  }



  return (
    <Conatiner>
      <AnchorsContainer>
        {AnchorContents}
        <Icon />
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
