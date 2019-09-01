import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../Assets/Logo/Lesspensive.png';
import './Header.scss';
import Modal from 'react-modal';
import UploadPreview from '../Requests/UploadPreview/UploadPreview';

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

class Header extends React.Component {

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
    // ref={subtitle => this.subtitle = subtitle} // ---- put this in a div tag to control color if necessary.
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleChange(checked) {
    this.setState({ checked });
}


  render() {
    return (
      <div>
        <a name="home"></a>
        <div className='logo'><img className='logo__image' src={logo} alt=''></img></div>

        <div className='nav'>
          <Link className='nav__items' to='/'><div className='nav__items'>HOME</div></Link>
          <Link className='nav__items' to='bedrooms'><div className='nav__items'>BEDROOMS</div></Link>
          <Link className='nav__items' to='living-rooms'><div className='nav__items'>LIVING ROOMS</div></Link>
          <Link className='nav__items' to='dining-rooms'><div className='nav__items'>DINING ROOMS</div></Link>
          <div className='nav__items' onClick={this.openModal}>REQUEST</div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Room Request"
          >

        <UploadPreview />

          </Modal>
        </div>

      </div>
    );
  }
}

export default Header;