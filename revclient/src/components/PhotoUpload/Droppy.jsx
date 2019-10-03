import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';



export default function Droppy({images, setProjectDetails, projectDetails}) {
    
    const [ imagePreview, setImagePreview ] = useState(images);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setImagePreview(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });
  
    const thumbs = imagePreview.map(file => (
        <div className="thumb" key={file.name}>
            <div className="thumb-inner" >
                <img
                    className="thumb-img"
                    src={file.preview}
                    alt="preview"
                />
            </div>
        </div>
    ));

    useEffect(() => () => { // Make sure to revoke the data uris to avoid memory leaks
        imagePreview.forEach(file => URL.revokeObjectURL(file.preview));
    }, [imagePreview]);

    const submitImages = () => {
        setImagePreview([]);
        setProjectDetails({ ...projectDetails, images: imagePreview })
    }

    return (
        <section className="droppy-container">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Upload photos of your project</p>
            </div>
            <aside className="thumbs-container" >
                {thumbs}
            </aside>
            {imagePreview.length > 0 ? (
                <button onClick={submitImages}>Submit</button>
            ) : (
                null
            )}
        </section>
    );
}
