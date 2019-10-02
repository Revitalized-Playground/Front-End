import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';



export default function Droppy() {
    const [ files, setFiles ] = useState([]);
    
    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });
  
    const thumbs = files.map(file => (
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

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section className="droppy-container">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Upload photos of your project</p>
            </div>
            <aside className="thumbs-container" >
                {thumbs}
            </aside>
        </section>
    );
}
