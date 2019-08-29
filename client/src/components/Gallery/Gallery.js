import React from 'react';
import hero from '../Assets/Images/Hero-edit.jpg';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Gallery.scss";
 
class Gallery extends React.Component {
  state = {
    galleryItems: [
      {img:hero}, 
      {img:hero}, 
      {img:hero}, 
      {img:hero}, 
      {img:hero}, 
      {img:hero}
    ].map((i) => (<div className='gallery' key={i}><img className='gallery__item' src={i.img}/></div>)),
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