import React from "react";
import Modal from 'react-modal';

class ModalComponent extends React.Component {  
  render () {
    return (<Modal 
        isOpen={this.props.showModal}
        ariaHideApp={false}>
        <button onClick={this.props.closeModal}>Close Modal</button>
        {this.props.children}
      </Modal>      
    );
  }
}

export { ModalComponent };