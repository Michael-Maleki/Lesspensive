import React from 'react';
import bed1 from '../Assets/Images/bedrooms/bedroom-1.jpg';
import bed2 from '../Assets/Images/bedrooms/bedroom-2.jpg';
import bed3 from '../Assets/Images/bedrooms/bedroom3.jpg';
// import din1 from 'Assets/Images/bedrooms/diningroom1.jpg';
// import din2 from 'Assets/Images/bedrooms/diningroom2.jpg';
// import din3 from 'Assets/Images/bedrooms/diningroom3.jpg';
// import liv1 from 'Assets/Images/bedrooms/livingroom1.jpg';
// import liv2 from 'Assets/Images/bedrooms/livingroom2.jpg';
// import liv3 from 'Assets/Images/bedrooms/livingroom3.jpg';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Gallery.scss";
 
class Gallery extends React.Component {
  state = {
    galleryItems: [
      {img:bed1}, 
      {img:bed1}, 
      {img:bed1}, 
      {img:bed2}, 
      {img:bed1}, 
      {img:bed1},
      {img:bed3},
      {img:bed1},
      {img:bed1}
    ].map((i) => (<div className='gallery' key={i}><img className='gallery__item' src={i.img} alt=''/></div>)),
  }
 
  responsive = {
    0: { items: 1 },
    1024: { items: 3 },
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
        autoPlayInterval={2000}
        autoPlayDirection="ltl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={false}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      />
    )
  }
}

export default Gallery;