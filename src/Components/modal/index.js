import React from 'react';
import PropTypes from 'prop-types';
import Footer from './footer';
import Header from './header';
import classNames from 'classnames';
import './index.less';

const defaultOkText = '确认';
const defaultCancelText = '取消';
const defaultTitle = '默认标题';

class Modal extends React.PureComponent {
  handleModalClick = () => {
    const { maskClosable, onCancel } = this.props;
    if (maskClosable) {
      onCancel();
    }
  }
  render() {
    const { 
      children,
      bodyStyle,
      cancelText,
      closable = true,
      footer,
      style,
      title,
      visible,
      width,
      wrapClassName,
      zIndex,
      okText,
      onCancel,
      onOk,
      mask,
      maskStyle,
      okButtonProps,
      cancelButtonProps,
    } = this.props;

    const wrapClassNames = classNames('my-modal-wrapper', wrapClassName);

    const modalStyle = visible ? { width, marginTop: '10%', visibility: 'visible', transform: 'scale(1, 1)', ...style } 
      : { width,  marginTop: 0, transform: 'scale(0, 0)', ...style } ;

    const _maskStyle = visible ? { visibility: 'visible', ...maskStyle } : maskStyle;
    const containerStyle = visible ? { zIndex } : { zIndex: -1 };
    
    return (<div className="my-modal-container"
      style={containerStyle}
      >
      <div className={wrapClassNames}>
        { mask && <div className="my-modal-mask" style={_maskStyle} onClick={this.handleModalClick} />}
        <div className="my-modal" style={modalStyle}>
          <Header 
            title={title}
            closable={closable}
            onCancel={onCancel} />
          <div className="my-modal-body" style={bodyStyle}>
            { children }
          </div>
          <Footer
            onOk={onOk}
            onCancel={onCancel}
            cancelText={cancelText}
            okText={okText}
            footer={footer}
            okButtonProps={okButtonProps}
            cancelButtonProps={cancelButtonProps}
          />
        </div>
      </div> 
    </div>);
  }
}

Modal.propTypes = {
  bodyStyle: PropTypes.object,
  cancelText: PropTypes.string,
  closable: PropTypes.bool,
  footer: PropTypes.element,
  style: PropTypes.object,
  title: PropTypes.string,
  visible: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wrapClassName: PropTypes.object,
  zIndex: PropTypes.number,
  okText: PropTypes.string,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  mask: PropTypes.bool,
  maskClosable: PropTypes.bool,
  okButtonProps: PropTypes.object,
  cancelButtonProps: PropTypes.object,
  destroyOnClose: PropTypes.bool,
  maskStyle: PropTypes.object,
}

Modal.defaultProps = {
  cancelText: defaultCancelText,
  okText: defaultOkText,
  closable: true,
  title: defaultTitle,
  width: '40%',
  zIndex: 1000,
  mask: true,
  maskClosable: true,
  destroyOnClose: false,
}

export default Modal;