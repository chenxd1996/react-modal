import React from 'react';
import './index.less';
import { Icon } from 'antd';

export default class Header extends React.PureComponent {
  render() {
    const { closable, title, onCancel } = this.props;
    return (
      <div className="my-modal-header">
        <span className="my-modal-title">{ title }</span>
        {
          closable && (
            <span className="my-modal-close-x" onClick={onCancel}>
              <Icon type="close" />
            </span> 
          )
        }
      </div>
    )
  }
}