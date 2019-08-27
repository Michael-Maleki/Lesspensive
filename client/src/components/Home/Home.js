import React from 'react';
import Hero from '../Hero/Hero';
import Header from '../Header/Header';
import Columns from '../Columns/Columns';

class Home extends React.Component {
    render() {
        return (

            <div>
                <Header />
                <Hero />
                <Columns />
            </div>
        );
    }
}

export default Home;









