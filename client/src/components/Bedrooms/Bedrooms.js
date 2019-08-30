import React from 'react';
import { Link } from 'react-router-dom';
import '../Bedrooms/Bedrooms.scss';
import Header from '../Header/Header';
import Bedroom1a from './Bedroom1a/Bedroom1a';
import Bedroom1b from './Bedroom2/Bedroom2';
import Bedroom1c from './Bedroom3/Bedroom3';
import bed1 from '../Assets/Images/bedrooms/bedroom1-edit.jpg';
import bed2 from '../Assets/Images/bedrooms/bedroom2.jpg';
// import bed3 from '../Assets/Images/bedrooms/bedroom3.jpg';

class Bedrooms extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='bedroom-box'>
                    <div className='column-title'>Bedrooms</div>
                    <div className='bedrooms'>

                        <div className='room-block'><img src={bed1} alt=''/>
                        <Bedroom1a />
                        {/* <Bedroom1b />
                        <Bedroom1c /> */}
                        </div>
                        
                        <div className='room-block'><img src={bed2} alt='' /></div>
                        <div className='room-block'><img src={bed1} alt='' /></div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Bedrooms;