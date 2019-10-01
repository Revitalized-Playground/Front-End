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
    
    reader.onabort = () => console.log('file reading was aborted')
    reader.onerror = () => console.log('file reading has failed')
    reader.onload = () => {
      const binaryStr = reader.result
      console.log(binaryStr)
      // await uploadPhoto({ variables: { picture: binaryStr } })
    }

    acceptedFiles.forEach(async (file) => {
      console.log(file);
      // const transcribedFile = reader.readAsBinaryString(file);
      // console.log(transcribedFile)
      await uploadPhoto({ variables: { picture: file } })
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


