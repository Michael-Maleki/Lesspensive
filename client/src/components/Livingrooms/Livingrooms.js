import React from 'react';
import { Link } from 'react-router-dom'
import '../Livingrooms/Livingrooms.scss'
import Header from '../Header/Header';
import lv1 from '../Assets/Images/livingrooms/livingroom1.jpg';


class Livingrooms extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='livingroom-box'>
                    <div className='column-title'>Living Rooms</div>
                    <div className='livingrooms'>

                        <div className='room-block'><img src={lv1} alt='' /></div>
                        <div className='room-block'><img src={lv1} alt='' /></div>
                        <div className='room-block'><img src={lv1} alt='' /></div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Livingrooms;