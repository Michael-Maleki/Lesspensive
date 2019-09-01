import React from 'react';
import { Link } from 'react-router-dom'

import '../Hero/Hero.scss'
import Gallery from '../Gallery/Gallery';
import hero from '../Assets/Images/Hero2.jpg';

class Hero extends React.Component {
	render() {
		return (
			<div className='home-box'>

				<div className='hero'><img className='hero-img' src={hero} alt='' /></div>

				<div className='subhead'>Lesspensive goes beyond showcasing beautiful rooms.</div>
				<div className='copy'>We analyze photographs of gorgeous interior home decor that people love and make owning that room an affordable possibility.</div>

				<Gallery />

			</div>
		);
	}
}

export default Hero;