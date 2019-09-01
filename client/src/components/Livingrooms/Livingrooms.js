import React from 'react';
import { Link } from 'react-router-dom';
import '../Livingrooms/Livingrooms.scss';
import Header from '../Header/Header';
import Livingroom1 from './Livingroom1/Livingroom1';
import Livingroom2 from './Livingroom2/Livingroom2';
import Livingroom3 from './Livingroom3/Livingroom3';
import lv1 from '../Assets/Images/livingrooms/livingroom1.jpg';


class Livingrooms extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='livingroom-box'>
                    <div className='column-title'>Living Rooms</div>
                    <div className='livingrooms'>

                        <div className='room-block'><img src={lv1} alt=''/> <Livingroom1 /> </div>
                        <div className='room-block'><img src={lv1} alt=''/> <Livingroom2 /> </div>
                        <div className='room-block'><img src={lv1} alt=''/> <Livingroom3 /> </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Livingrooms;