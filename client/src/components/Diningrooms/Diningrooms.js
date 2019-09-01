import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../Diningrooms/Diningrooms.scss'
import Diningroom1 from './Diningroom1/Diningroom1';
import Diningroom2 from './Diningroom2/Diningroom2';
import Diningroom3 from './Diningroom3/Diningroom3';
import Header from '../Header/Header';
import din1 from '../Assets/Images/diningrooms/diningroom1.jpg';



class Diningrooms extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='diningroom-box'>
                    <div className='column-title'>Dining Rooms</div>
                    <div className='diningrooms'>
                        
                        <div className='room-block'><img src={din1} alt=''/> <Diningroom1 /> </div>
                        <div className='room-block'><img src={din1} alt=''/> <Diningroom2 /> </div>
                        <div className='room-block'><img src={din1} alt=''/> <Diningroom3 /> </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Diningrooms;