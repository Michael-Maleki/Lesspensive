import React from 'react';
import UploadPreview from './UploadPreview/UploadPreview';
import Header from '../Header/Header';

class Requests extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <UploadPreview />
            </div>
        );
    }
}

export default Requests;