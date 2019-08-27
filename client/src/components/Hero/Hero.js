import React from 'react';
import axios from 'axios';

import '../Hero/Hero.scss'
import hero from '../Assets/Images/Hero-edit.jpg';

class Hero extends React.Component {
	render() {
		return (
			<div className='home-box'>

				<div className='hero'><img className='hero-img' src={hero}/></div>
				
				<div className='subhead'>Lesspensive goes beyond showcasing beautiful rooms.</div>
				<div className='copy'>We analyze photographs of gorgeous interior home decor that people love and make owning that room an affordable possibility.</div>


			</div>
		);
	}
}

export default Hero;