import React from 'react';
import ReactTooltip from 'react-tooltip';
import './Bedroom1.scss';

import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class Bedroom1 extends React.Component {

  render() {
    return (
      <div>
  <form action='https://www.wayfair.ca/bed-bath/pdp/house-of-hampton-germain-reversible-comforter-set-c001381891.html?piid=1990426873' target='_blank'>
    <ReactTooltip html={true} type='dark' effect="solid"/>
      <button className='bed1-button1' type='submit'  data-tip="
        <div class='hover-box' style='display:flex; width:27vw; height:10vw;'>
          <img class='picture' style='margin-right:3%; margin-left:-2%; border-radius:3px; height:100%; width: 100%;' src='https://secure.img1-fg.wfcdn.com/im/00036442/resize-h800-w800%5Ecompr-r85/3496/34968010/Germain+Reversible+Comforter+Set.jpg' />
          <div style='display:flex; flex-direction:column; '>
            <div style='font-size:150%; font-weight: 600; line-height:1.3; margin-bottom: 3%;'> Germain Reversible Comforter Set </div>
            <div style='font-size:130%; font-weight: 400; line-height:1; margin-bottom: 3%;'> CAD $140.91 </div>
            <div style='font-size:90%; font-weight: 200; line-height:1.3; margin-bottom: 3%;'> Master suite in need of a makeover? Give your restful retreat a refresh and the whole room a focal point with this stylish comforter. Aside from just the comforter, this set also includes two shams, three decorative pillows, and a bed skirt for a new look to your ensemble. Though its two tones are neutral, this set stands out with pin tucks and a chevron motif on the underside. Plus, it's crafted from machine-washable polyester. </div>
          </div>
        </div>
      "></button>   
  </form>

  <form action='https://www.wayfair.com/furniture/pdx/fleur-de-lis-living-pattonsburg-platform-bed-w001360090.html?piid=1535377735%2C1535377734' target='_blank'>
    <ReactTooltip html={true} type='dark' effect="solid"/>
      <button className='bed1-button2' type='submit'  data-tip="
        <div class='hover-box' style='display:flex; width:27vw; height:10vw;'>
          <img class='picture' style='margin-right:3%; margin-left:-2%; border-radius:3px; height:100%; width: 100%;' src='https://secure.img1-fg.wfcdn.com/im/44032183/resize-h505-w505%5Ecompr-r85/2615/26157698/Pattonsburg+Platform+Bed.jpg' />
          <div style='display:flex; flex-direction:column; '>
            <div style='font-size:150%; font-weight: 600; line-height:1.3; margin-bottom: 3%;'> White Pattonsburg Platform Bed </div>
            <div style='font-size:130%; font-weight: 400; line-height:1; margin-bottom: 3%;'> CAD $114.99 </div>
            <div style='font-size:90%; font-weight: 200; line-height:1.3; margin-bottom: 3%;'> Sweet dreams start with a good bed: and if you’re still looking for the right one, this piece is here to help. Crafted from steel, it features a platform design with scrolled detailing on its included head and footboards, exuding country cottage appeal in your arrangement. After assembly, its included slat kit and center support legs cradle any compatible mattress (not included) with ease. Plus, it comes backed by a one-year warranty. </div>
          </div>
        </div>
      "></button>   
  </form>

  <form action="https://www.overstock.com/Home-Garden/Costway-White-Vanity-Wood-Makeup-Dressing-Table-Stool-Set-bathroom-With-Mirror-3-Drawer/16794580/product.html?recset=0614c2f8-ff04-44f0-8893-20f7ddda7fb3&refccid=ZN2NP7MNRUIKO52LAJEDGZRHGU&recalg=872,873,839&recidx=6" target='_blank'>
    <ReactTooltip html={true} type='dark' effect="solid"/>
      <button className='bed1-button3' type='submit'  data-tip="
        <div class='hover-box' style='display:flex; width:27vw; height:10vw;'>
          <img class='picture' style='margin-right:3%; margin-left:-2%; border-radius:3px; height:100%; width: 100%;' src='https://ak1.ostkcdn.com/images/products/is/images/direct/d89e646745f4951331e43191ad3a693b8aef12d0/Costway-White-Vanity-Wood-Makeup-Dressing-Table-Stool-Set-bathroom-With-Mirror-%2B-3-Drawer.jpg' />
          <div style='display:flex; flex-direction:column; '>
            <div style='font-size:150%; font-weight: 600; line-height:1.3; margin-bottom: 3%;'> Costway White Vanity Wood Makeup Dressing Table Stool Set bathroom With Mirror + 3 Drawer </div>
            <div style='font-size:130%; font-weight: 400; line-height:1; margin-bottom: 3%;'> CAD $191.53 </div>
            <div style='font-size:90%; font-weight: 200; line-height:1.3; margin-bottom: 3%;'> Our white vanity makeup table and stool set is the preference for every girl. Made of thick MDF panel and pine wood leg, this dressing furniture set is sturdy and durable enough to serve you a long time. Features with 2 small and 1 big drawers, it can provide enough space for storing your jewelry and ornaments.  </div>
          </div>
        </div>
      "></button>   
  </form>
      </div>
    );
  }
}

export default Bedroom1;