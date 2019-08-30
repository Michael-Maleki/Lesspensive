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
        }).catch((error) => {
    });
}

onChange(e) {
    this.setState({file:e.target.files[0]});
}

render() {
    return (
        <form onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input type="file" name="myFile" onChange= {this.onChange} />
            <button type="submit">Upload</button>
        </form>
    )
}
}


export default UploadPreview;

