import React from 'react';
import ReactTooltip from 'react-tooltip';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './Bedroom1a.scss'
import hero from '../../Assets/Images/Hero.jpg'
// import Plus from '../../Assets/Icons/SVG/Icon-add.svg'


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

class Bedroom1 extends React.Component {

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
        this.subtitle.style.color = '#323232';
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

          <form action='https://www.wayfair.ca/bed-bath/pdp/house-of-hampton-germain-reversible-comforter-set-c001381891.html?piid=1990426873' target='_blank'>
            <ReactTooltip html={true} type='info'/>
      <button className='modal-button1' type='submit'  data-tip="
      <div class='hover-box' style='display: flex; width: 25vw;'>
      <img class='picture' style='margin-right:3%; margin-left:-2.75%; border-radius:3px; height: 25%;' src='https://secure.img1-fg.wfcdn.com/im/00036442/resize-h800-w800%5Ecompr-r85/3496/34968010/Germain+Reversible+Comforter+Set.jpg' />
        <div class='info' style='display:flex; flex-direction:column; padding: 5% 0;'> 
          <div class=info__product' style='font-size:200%; font-weight: 600; line-height:1.3; margin-bottom: 10%;'> Germain Reversible Comforter Set </div>
          <div class='info__price' style='font-size:200%; font-weight: 500; line-height:1;'> CAD $140.91 </div> 
        </div>
      </div>
      "></button>   
        </form>

<form action='https://www.wayfair.ca/bed-bath/pdp/house-of-hampton-germain-reversible-comforter-set-c001381891.html?piid=1990426873' target='_blank'>
<ReactTooltip html={true} type='info'/>
<button className='modal-button2' type='submit'  data-tip="
  <div class='hover-box' style='display: flex; width: 25vw;'>
    <img class='picture' style='margin-right:3%; margin-left:-2.75%; border-radius:3px; height: 25%;' src='https://secure.img1-fg.wfcdn.com/im/00036442/resize-h800-w800%5Ecompr-r85/3496/34968010/Germain+Reversible+Comforter+Set.jpg' />
  <div class='info' style='display:flex; flex-direction:column;'> 
    <div class=info__product' style='font-size:200%; font-weight: 600; line-height:1.3; margin-bottom: 10%;'> Germain Reversible Comforter Set </div>
    <div class='info__price' style='font-size:200%; font-weight: 500; line-height:1;'> CAD $140.91 </div> 
  </div>

</div>
"></button>   
</form>
</div>
        );
    }
}

export default Bedroom1;