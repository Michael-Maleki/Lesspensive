import React from 'react';
import { Link } from 'react-router-dom';
import '../Bedrooms/Bedrooms.scss';
import Header from '../Header/Header';
import BedModal1 from './bedModal1/BedModal1';
import bed1 from '../Assets/Images/bedrooms/bedroom1.jpg';
import bed2 from '../Assets/Images/bedrooms/bedroom2.jpg';

class Bedrooms extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bedroom-box'>
                    <div className='column-title'>Bedrooms</div>
                    <div className='bedrooms'>

                        <div className='room-block'><img src={bed1} alt=''/><BedModal1 className='bed1modal1'/></div>
                        
                        <div className='room-block'><img src={bed2} alt='' /></div>
                        <div className='room-block'><img src={bed1} alt='' /></div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Bedrooms;