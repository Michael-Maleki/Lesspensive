import React from 'react';
import { Link } from 'react-router-dom'
import '../Columns/Columns.scss'
import bed1 from '../Assets/Images/bedrooms/bedroom-1.jpg';
import lv1 from '../Assets/Images/livingrooms/livingroom1.jpg';
import din1 from '../Assets/Images/diningrooms/diningroom1.jpg';
import dots from '../Assets/Icons/SVG/more.svg';

class Columns extends React.Component {
	render() {
		return (
			<div className='columns-box'>

				<div className='columns'>

					<div className='columns__bedrooms'>
						<div className='column-title'>Bedrooms</div>
						<div className='room-block'><img className='room-block__bed-image' src={bed1} alt=''/></div>
						<Link className='more' to='bedrooms'><img className='dotdotdot' src={dots} alt=''/>More</Link>
					</div>

					{/* <div className='v-divider'></div> */}

					<div className='columns__livingrooms'>
						<div className='column-title'>Living Rooms</div>
						<div className='room-block'><img className='room-block__living-image' src={lv1} alt=''/></div>
						<Link className='more' to='living-rooms'><img className='dotdotdot' src={dots} alt=''/>More</Link>
						
					</div>

					{/* <div className='v-divider'></div> */}

					<div className='columns__diningrooms'>
						<div className='column-title'>Dining Rooms</div>
						<div className='room-block'><img className='room-block__dining-image' src={din1} alt=''/></div>
						<Link className='more' to='dining-rooms'><img className='dotdotdot' src={dots} alt=''/>More</Link>
					</div>
					
					

				</div>
				<div className='backtotop'><a className='toplink' href="#home">BACK TO TOP</a></div>
				
			</div>
		);
	}
}

export default Columns;