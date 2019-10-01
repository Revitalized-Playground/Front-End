import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone';
import {
  useMutation,
} from "@apollo/react-hooks";
import {
  UPLOAD_PHOTO,
} from "./graphql/mutations"; 



export default function MyDropzone() {
  const [ uploadPhoto ] = useMutation(UPLOAD_PHOTO);

  const onDrop = useCallback(acceptedFiles => {
    // console.log(acceptedFiles)
    

    const reader = new FileReader()
    
    // reader.onabort = () => console.log('file reading was aborted')
    // reader.onerror = () => console.log('file reading has failed')
    // reader.onload = async () => {
    //   const binaryStr = reader.result
    //   await uploadPhoto({ variables: { picture: binaryStr } })
    //   // console.log(binaryStr)
    // }

    acceptedFiles.forEach(file => {
      console.log(file);
      // const transcribedFile = reader.readAsBinaryString(file);
      // console.log(transcribedFile)
      uploadPhoto({ variables: { picture: file.path } })
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <h1>Drag 'n' drop some files here, or click to select files</h1>
    </div>
  )
}


