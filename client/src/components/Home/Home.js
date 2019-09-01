import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Columns from '../Columns/Columns';
import Footer from '../Footer/Footer';

class Home extends React.Component {
    render() {
        return (

            <div>
                <Header />
                <Hero />
                <Columns />
                <Footer />
            </div>
        );
    }
}

export default Home;









