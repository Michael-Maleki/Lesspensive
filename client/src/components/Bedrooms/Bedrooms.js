import React from 'react';
import '../Bedrooms/Bedrooms.scss';
import Header from '../Header/Header';
import Bedroom1 from './Bedroom1/Bedroom1';
import Bedroom2 from './Bedroom2/Bedroom2';
import Bedroom3 from './Bedroom3/Bedroom3';
import bed1 from '../Assets/Images/bedrooms/bedroom-1.jpg';
import bed2 from '../Assets/Images/bedrooms/bedroom2.jpg';
import bed3 from '../Assets/Images/bedrooms/bedroom3.jpg';

class Bedrooms extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bedroom-box'>
                    <div className='column-title'> Bedrooms </div>
                    <div className='bedrooms'>

                        <div className='room-block'><img src={bed1} alt=''/> <Bedroom1 /> </div>
                        <div className='room-block'><img src={bed2} alt=''/> <Bedroom2 /> </div>
                        <div className='room-block'><img src={bed3} alt=''/> <Bedroom3 /> </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Bedrooms;