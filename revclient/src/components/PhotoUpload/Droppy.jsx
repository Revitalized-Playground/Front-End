import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { MdCancel } from "react-icons/md";



const Droppy = props => {
    const { images, setProjectDetails, projectDetails } = props;
    
    const [ imagePreview, setImagePreview ] = useState(images);
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setImagePreview(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });
    
    const removeThumb = thumbToRemove => {
        const newImagePreview = imagePreview.filter(image => image.lastModified !== thumbToRemove.lastModified)
        setImagePreview(newImagePreview)
    }
    
    const thumbs = imagePreview.map(image => (
        <div className="thumb" key={image.lastModified}>
            <div className="thumb-inner" >
                <MdCancel 
                    className="thumb-inner-cancel"
                    onClick={removeThumb(image)}
                />
                <img
                    className="thumb-img"
                    src={image.preview}
                    alt="preview"
                />
            </div>
        </div>
    ));
    console.log("these are the thumbs in create project wiz", thumbs, imagePreview);

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

export default Droppy
