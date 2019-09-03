import React from 'react';
import ReactTooltip from 'react-tooltip';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import '../Requests/UploadPreview/UploadPreview';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class HeaderModal extends React.Component {

    constructor() {
        super();
    
        this.state = {
          modalIsOpen: false,
          checked: false
        };
    
        this.handleChange = this.handleChange.bind(this);
    
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
    
      ariaHideApp= false
    
      openModal() {
        this.setState({ modalIsOpen: true });
      }
    
      afterOpenModal() {
        // this.subtitle.style.color = '#323232';
      }
    
      closeModal = () => {
        this.setState({ modalIsOpen: false });
      }
    
      handleChange(checked) {
        this.setState({ checked });
    }


    render() {

      return (


      <div>
        <button onClick={this.openModal} ></button>   
          <Modal 
            close={this.closeModal}
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Room Request"
          >
              
        <UploadPreview close={this.props.close}/>

          </Modal>
        </div>
        );
    }
}

export default HeaderModal; 