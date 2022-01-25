import React from 'react';
import '../css/styles.css'

export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PFPImage: '',
            HobbiesImage: '',
            AcademicsImage: '',
            ContactImage: ''
        }
    }

    render() {
        return(
            <div name="Content">
                <div name="Image_Div">
                    <img name="PFP" src={this.PFPImage} alt="PFP by Fireplace" width="631px" height="631" />
                </div>
                <div name="Header_Content">
                    <h1>Welcome to Trim's Space!</h1>
                    <p>{process.env.REACT_APP_LANDING_PAGE_INTRO}</p>
                </div>
                <div name="Page_Thumbnails">
                    <div name="Thumbnail_Pictures">
                        <img name="Hobbies_Img" src={this.HobbiesImage} alt="Hobbies Thumbnail" width="350px" height="350px" />
                        <img name="Academics_Img" src={this.AcademicsImage} alt="Academics Thumbnail" width="350px" height="350px" />
                        <img name="Contact_Img" src={this.ContactImage} alt="Contacts Thumbnail" width="350px" height="350px" />
                    </div>
                </div>
                <div name="Page_Thumbnails">
                    <div name="Thumbnail_Pictures">
                        <a name="Hobbies_Link" href='/'>Let me Tell you About What I Like!</a>
                        <a name="Academics_Link" href='/'>Check Out What I've Learned!</a>
                        <a name="Contact_Link" href='/'>Let's Get in Touch!</a>
                    </div>
                </div>
            </div>
        )
    }
}