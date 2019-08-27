import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import '../Diningrooms/Diningrooms.scss'
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
                        <div className='room-block'><img src={din1} alt='' /></div>
                        <div className='room-block'><img src={din1} alt='' /></div>
                        <div className='room-block'><img src={din1} alt='' /></div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Diningrooms;