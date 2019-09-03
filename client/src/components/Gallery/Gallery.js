import React from 'react';
import { Link } from 'react-router-dom'
import bed1 from '../Assets/Images/bedrooms/bedroom-1.jpg';
import bed2 from '../Assets/Images/bedrooms/bedroom-2.jpg';
import bed3 from '../Assets/Images/bedrooms/bedroom3.jpg';
import liv1 from '../Assets/Images/livingrooms/livingroom1.jpg';
import liv2 from '../Assets/Images/livingrooms/livingroom2.jpg';
import liv3 from '../Assets/Images/livingrooms/livingroom3.jpg';
import din1 from '../Assets/Images/diningrooms/diningroom1.jpg';
import din2 from '../Assets/Images/diningrooms/diningroom2.jpg';
import din3 from '../Assets/Images/diningrooms/diningroom3.jpg';


import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import "./Gallery.scss";
 
class Gallery extends React.Component {
  state = {
    galleryItems: [
      {img:bed1, link: '/bedrooms'}, 
      {img:liv1, link: '/living-rooms'},  
      {img:din1, link: '/dining-rooms'},  
      {img:bed2, link: '/bedrooms'},  
      {img:liv2, link: '/living-rooms'}, 
      {img:din2, link: '/dining-rooms'}, 
      {img:bed3, link: '/bedrooms'}, 
      {img:liv3, link: '/living-rooms'}, 
      {img:din3, link: '/dining-rooms'}, 
    ].map((i) => (<Link to={i.link} className='gallery' key={i}><img className='gallery__item' src={i.img} alt=''/></Link>)),
  }
 
  responsive = {
    0: { items: 1 },
    1024: { items: 6 },
  }
 
  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }
 
  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }
 
  render() {
    return (
      <AliceCarousel
        items={this.state.galleryItems}
        responsive={this.responsive}
        autoPlayInterval={2200}
        autoPlayDirection="ltl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseDragEnabled={false}
        playButtonEnabled={false}
        disableAutoPlayOnAction={false}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    )
  }
}

export default Gallery;