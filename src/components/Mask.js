import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import MaskContent from './MaskContent';



const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  z-index: 6;
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.node = document.createElement('div');
  }

  componentDidMount() {
    this.node.className = 'hans-modal';
    document.body.appendChild(this.node);
    // this._renderPortal();
  }

  componentWillUnmount() {
    document.body.removeChild(this.node);
  }

  _renderPortal() {
    const { children } = this.props;
    return ReactDOM.createPortal(
      children,
      this.node,
    );
  }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(
      children,
      this.node,
    );
  }
}

class Mask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUp: true,
    }
    this.onConfirmHandler = this._onConfirmHandler.bind(this);
    this.onCancelHandler = this._onCancelHandler.bind(this);
  }

  _unlockScroll() {
    document.body.style.overflow = 'scroll';
    document.body.style.position = 'initial';
  }

  _lockScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
  }

  _closeMask() {
    this._unlockScroll();
    this.setState({
      showUp: false,
    });
  }

  _onConfirmHandler() {
    const { setAutoPlay } = this.props;
    setAutoPlay(true);
    this._closeMask();
  }

  _onCancelHandler() {
    const { setAutoPlay } = this.props;
    setAutoPlay(false);
    this._closeMask();
  }

  componentDidMount() {
    const { showUp } = this.state;
    if (showUp) {
      this._lockScroll();
    }
  }

  render() {
    const { showUp } = this.state;
    if (!showUp) {
      return null;
    }
    return (
      <Modal>
        <Container>
          <MaskContent
            onConfirm={this.onConfirmHandler}
            onCancel={this.onCancelHandler}
          />
        </Container>
      </Modal>
    );
  }
}

export default Mask;
