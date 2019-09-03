import React from 'react';
import './UploadPreview.scss';
import axios from 'axios';

class UploadPreview extends React.Component {

state ={
        file: null
    };

    onFormSubmit = this.onFormSubmit.bind(this);
    onChange = this.onChange.bind(this);

onFormSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('myFile',this.state.file);
    console.log(...formData);
    console.log(this.state.file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
        
    };
    axios.post("http://localhost:1337/upload",formData,config)
        .then((response) => {
            console.log("The file is successfully uploaded");
            this.props.close();
            // window.setTimeout(()=>window.location = '/', 500)
        }).catch((error) => {
    });   
    
}

onChange(e) {
    this.setState({file:e.target.files[0]});
}

// closeModal = () => {
//     this.props.close()
// }

render() {
    console.log(this.props)
    return (
        <form className='modal-form' onSubmit={this.onFormSubmit}>
        <div className='modalbox'>
            <h1 className='modalbox__title'> Lesspensive Room Request </h1>
            <h3 className='modalbox__subhead'> Do you have a room you want us to source?</h3>
            <p className='modalbox__copy'> Upload your desired homescapes and our dedicated team will find the right pieces to make your favourite rooms come to life!  </p> 
        </div>

        <div className='uploadbox'>
            <input className='uploadbox__browse' type="file" name="myFile" onChange= {this.onChange} />
            <button className='uploadbox__submit' type="submit" >UPLOAD</button>
        </div>

        </form>
    )
}
}

export default UploadPreview;

