import React, { useState } from 'react'

export default function TestDB() {
    require('dotenv').config();
    const reader = new FileReader();
    const fileByteArray = [];

    const [ImageTitle, setImageTitle] = useState('');
    const [ImageContent, setImageContent] = useState(null);
    const fileInput = React.createRef();

    var faunadb = require('faunadb'),
    q = faunadb.query

    var client = new faunadb.Client({
        secret: process.env.REACT_APP_FAUNA_ADMIN_KEY,
        domain: 'db.fauna.com',
        port: 443,
        scheme: 'https',
    })

    const handleImageTitleChange = (e) => {
        setImageTitle(e.target.value);
    }

    const handleImageUpload = (e) => {
        /* setImageContent(e.target.files[0]); */
        e.preventDefault();

        reader.readAsArrayBuffer(e.target.files[0]);
        reader.onloadend = (evt) => {
            if (evt.target.readyState === FileReader.DONE) {
                const arrayBuffer = evt.target.result,
                  array = new Uint8Array(arrayBuffer);
                for (const a of array) {
                  fileByteArray.push(a);
                }
                console.log(fileByteArray)
            }
        }
    }

    const handleSubmit = (e) => {
        handleUpload()

        e.preventDefault();
    }

    const handleUpload = () => {
        /* let file = ImageContent;

        var dataPayload = new FormData();
        dataPayload.append("ImageTitle", ImageTitle);
        dataPayload.append("ImageContent", file, file.name);

        console.log(dataPayload) */

        let data = {
            ImageTitle: ImageTitle,
            ImageContent: fileByteArray
        }

        client.query(
            q.Create(
                q.Collection('test'),
                {data: data}
            )
        )
        .then(function(res) {
            console.log(res.ref);
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    const resetAttachments = () => {
        fileInput.current.value = '';
        setImageContent(null);
    }

    /* var CreateP = client.query(
        q.Create(
            q.Collection('test'),
            {data: {testField: 'testValue'}}
        )
    )

    CreateP.then(function(response) {
        console.log(response.ref);
    })
        .catch((err) => console.error(err)); */

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="imageTitle">Image Title</label>
                <input type="text" className="form-control" id="imageTitle" value={ImageTitle} onChange={handleImageTitleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image</label>
                <input type="file" className="form-control-file" id="image" ref={fileInput} onChange={handleImageUpload}/>
            </div>
            <button type="submit" className="btn btn-primary">Upload</button>
            <button type="button" className="btn btn-primary" name="reset-btn" onClick={resetAttachments}>Reset Attachments</button>
        </form>
    )
}