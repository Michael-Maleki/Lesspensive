import React from 'react';
import '../Diningrooms/Diningrooms.scss'
import Diningroom1 from './Diningroom1/Diningroom1';
import Diningroom2 from './Diningroom2/Diningroom2';
import Diningroom3 from './Diningroom3/Diningroom3';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import din1 from '../Assets/Images/diningrooms/diningroom1.jpg';
import din2 from '../Assets/Images/diningrooms/diningroom2.jpg';
import din3 from '../Assets/Images/diningrooms/diningroom3.jpg';



class Diningrooms extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='diningroom-box'>
                    <div className='column-title'>Dining Rooms</div>
                    <div className='diningrooms'>
                        
                        <div className='room-block'><img src={din1} alt=''/> <Diningroom1 /> </div>
                        <div className='room-block'><img src={din2} alt=''/> <Diningroom2 /> </div>
                        <div className='room-block'><img src={din3} alt=''/> <Diningroom3 /> </div>

                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Diningrooms;