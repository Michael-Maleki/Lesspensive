import React from 'react';
import './Footer.scss'

class Footer extends React.Component {
    render() {
        return (
            <div>
                <div classname='footer'>
                    <div className='footer__divider'></div>
                    <p className='footer__copy'> While Lesspensive strives to stay true to the original photograph, some items are substituted with similar looking models to maximize affordability without sacrificing style! </p>
                    <p className='footer__copy'>Copyright © 2019 Lesspensive Inc.</p>
                </div>
            </div>
        );
    }
}

export default Footer;