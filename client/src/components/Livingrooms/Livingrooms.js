import React from 'react';
import '../Livingrooms/Livingrooms.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Livingroom1 from './Livingroom1/Livingroom1';
import Livingroom2 from './Livingroom2/Livingroom2';
import Livingroom3 from './Livingroom3/Livingroom3';
import lv1 from '../Assets/Images/livingrooms/livingroom1.jpg';
import lv2 from '../Assets/Images/livingrooms/livingroom2.jpg';
import lv3 from '../Assets/Images/livingrooms/livingroom3.jpg';


class Livingrooms extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='livingroom-box'>
                    <div className='column-title'>Living Rooms</div>
                    <div className='livingrooms'>

                        <div className='room-block'><img src={lv1} alt='' /> <Livingroom1 /> </div>
                        <div className='room-block'><img src={lv2} alt='' /> <Livingroom2 /> </div>
                        <div className='room-block'><img src={lv3} alt='' /> <Livingroom3 /> </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Livingrooms;