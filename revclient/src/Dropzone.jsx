import React, { useState, useEffect, useCallback } from 'react'
import Dropzone from 'react-dropzone'
import { withPreviews, clearPreviews } from './with-previews'

const Droppy = () => {
    
    const [files, setFiles] = useState([])

    useEffect(() => () => clearPreviews(files), [files])

    const handleDrop = useCallback(accepted => {
        setFiles(files => 
            [...files, ...accepted]
        )
    })

    return (
        <>
            <Dropzone onDropAccepted={withPreviews(handleDrop)}>Drop things here</Dropzone>
            <button
                onClick={() => {
                clearPreviews(files)
                setFiles([])
                }}
            >
                Clear files and previews
            </button>
            {files.map(file => (
                <img
                    key={file.name}
                    src={file.preview}
                    style={{ maxWidth: 200, display: 'block' }}
                    alt=""
                />
            ))}
        </>
    )
}


export default Droppy
