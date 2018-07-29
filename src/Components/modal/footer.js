import React from 'react';
import { Button } from 'antd';
import './index.less';


export default class Footer extends React.PureComponent {
  render() {
    const {
      footer, onOk, onCancel,
      okText,
      cancelText } = this.props;
    if (footer) { // 有自定义footer
      return <div className="my-modal-footer">
          {footer}
      </div>
    } else if (footer === null) { // footer为null时，不显示footer
      return null;
    } else { // 其他情况下显示为默认footer
      return (
        <div className="my-modal-footer">
          <Button onClick={onCancel}>{ cancelText }</Button>
          <Button type="primary" onClick={onOk} className="my-ok-btn">{ okText }</Button>
        </div>
      )
    }
  }
}