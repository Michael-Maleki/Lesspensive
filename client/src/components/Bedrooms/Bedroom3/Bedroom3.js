import React from 'react';
import ReactTooltip from 'react-tooltip';
import './Bedroom3.scss';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class Bedroom3 extends React.Component {

  render() {
    return (
      <div>
  <form action='https://www.amazon.ca/Thomasville-Bouvier-4-Piece-Comforter-Queen/dp/B00IK58MM0' target='_blank'>
    <ReactTooltip html={true} type='dark' effect="solid"/>
      <button className='bed3-button1' type='submit'  data-tip="
        <div class='hover-box' style='display:flex; width:27vw; height:10vw;'>
          <img class='picture' style='margin-right:3%; margin-left:-2%; border-radius:3px; height:100%; width: 100%;' src='https://secure.img1-fg.wfcdn.com/im/77468997/resize-h800-w800%5Ecompr-r85/6605/66051424/Tammara+4+Piece+Comforter+Set.jpg' />
          <div style='display:flex; flex-direction:column; '>
            <div style='font-size:150%; font-weight: 600; line-height:1.3; margin-bottom: 3%;'> Thomasville Bouvier 4-Piece Comforter Set </div>
            <div style='font-size:130%; font-weight: 400; line-height:1; margin-bottom: 3%;'> CAD $367.70 </div>
            <div style='font-size:90%; font-weight: 200; line-height:1.3; margin-bottom: 3%;'> Decorate your master suite or guest room with Bouvier; a stylish and fashionable Toile bedding ensemble. An exclusive design by Thomasville, the Bouvier Comforter Set features scenes from a herders album that are sketched in Black on a Ivory ground cotton duck. The coordinating bed skirt is a melange of delicate leaves scattered on a textured ground.  </div>
          </div>
        </div>
      "></button>   
  </form>

  <form action='https://www.overstock.com/Home-Garden/Kensington-Handmade-Solid-Taupe-Light-Gray-Area-Rug-2x3/16105996/product.html?kwds=logrono%20taupe%20rug%202x3&refccid=O4Q3GRFCOYC3JUSOBIKJ3DUFAU&rfmt=&searchidx=10' target='_blank'>
    <ReactTooltip html={true} type='dark' effect="solid"/>
      <button className='bed3-button2' type='submit'  data-tip="
        <div class='hover-box' style='display:flex; width:27vw; height:10vw;'>
          <img class='picture' style='margin-right:3%; margin-left:-2%; border-radius:3px; height:100%; width: 100%;' src='https://ak1.ostkcdn.com/images/products/16105996/Kensington-Handmade-Solid-Taupe-Area-Rug-2-X-3-4f82cd62-4501-429b-8491-c5b6ce84f73f.jpg' />
          <div style='display:flex; flex-direction:column; '>
            <div style='font-size:150%; font-weight: 600; line-height:1.3; margin-bottom: 3%;'> Kensington Handmade Solid Taupe/ Light Gray Area Rug </div>
            <div style='font-size:130%; font-weight: 400; line-height:1; margin-bottom: 3%;'> CAD $114.00 </div>
            <div style='font-size:90%; font-weight: 200; line-height:1.3; margin-bottom: 3%;'> The tweed-inspired pattern of this contemporary area rug offers understated visual texture, while the hand-tufted wool and viscose blend makes for a lustrous feel underfoot. A duo-tone design of warm taupe and light gray creates a sophisticated statement on this soft layer. </div>
          </div>
        </div>
      "></button>   
  </form>

  <form action="https://www.amazon.ca/APOLLO-Music-Alabaster-Statue-Sculpture/dp/B01N1L34I8/ref=sr_1_182?s=kitchen&ie=UTF8&qid=1521336862&sr=1-182&keywords=head+sculpture" target='_blank'>
    <ReactTooltip html={true} type='dark' effect="solid"/>
      <button className='bed3-button3' type='submit'  data-tip="
        <div class='hover-box' style='display:flex; width:27vw; height:10vw;'>
          <img class='picture' style='margin-right:3%; margin-left:-2%; border-radius:3px; height:100%; width: 100%;' src='https://images-na.ssl-images-amazon.com/images/I/61cCN7FD6wL._SL1500_.jpg' />
          <div style='display:flex; flex-direction:column; '>
            <div style='font-size:150%; font-weight: 600; line-height:1.3; margin-bottom: 3%;'> Apollo God of Music & Light Alabaster Bust Head Statue Sculpture </div>
            <div style='font-size:130%; font-weight: 400; line-height:1; margin-bottom: 3%;'> CAD $39.09 </div>
            <div style='font-size:90%; font-weight: 200; line-height:1.3; margin-bottom: 3%;'> Apollo was the son of Zeus and Leto, twin brother of Artemis. He was the god of music, and he is often depicted playing a golden lyre. He was also known as the Archer, far shooting with a silver bow; the god of healing, giving the science of medicine to man; the god of light; and the god of truth. One of Apollo's most important daily tasks was to harness his four-horse chariot, in order to move the Sun across the sky.  </div>
          </div>
        </div>
      "></button>   
  </form>
      </div>
    );
  }
}

export default Bedroom3;