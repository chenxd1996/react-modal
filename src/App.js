import React, { Component } from 'react';
import Modal from './Components/modal';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
  state = {
    modalVisible: false,
  }
  showModal = () => {
    this.setState({
      modalVisible: true,
    });
  }
  closeModal = () => {
    this.setState({
      modalVisible: false,
    });
  }
  render() {
    const { modalVisible } = this.state;
    const { showModal, closeModal } = this; 
    return (
      <div className="App">
        <Modal 
          visible={modalVisible}
          onOk={closeModal}
          onCancel={closeModal}
        >
          <div>这是内容。。。</div>
        </Modal>
        <div className="button-container">
          <Button type="primary" onClick={showModal}>显示modal</Button>        
        </div>
      </div>
    );
  }
}

export default App;
