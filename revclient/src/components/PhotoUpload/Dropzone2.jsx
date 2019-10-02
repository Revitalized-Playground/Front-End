// import React, { useCallback, useState } from 'react'
// import Dropzone, { useDropzone } from 'react-dropzone';
// // import {
// //   useMutation,
// // } from "@apollo/react-hooks";
// // import {
// //   UPLOAD_PHOTO,
// // } from "./graphql/mutations"; 


// export default function MyDropzone() {
//   // const [ uploadPhoto ] = useMutation(UPLOAD_PHOTO);

//   // const onDrop = useCallback(acceptedFiles => {
//   //   const reader = new FileReader();
//   //   reader.onabort = () => console.log('file reading was aborted');
//   //   reader.onerror = () => console.log('file reading has failed');
//   //   reader.onload = () => {
//   //     console.log(reader.result)
//   //   };

//   //   acceptedFiles.forEach(async (file) => {
//   //     // await uploadPhoto({ variables: { picture: file } })
//   //   });
    
//   // }, []);

//   // const {
//   //   getRootProps, 
//   //   getInputProps, 
//   //   // isDragActive,
//   // } = useDropzone({onDrop});

//   const [state, setState] = useState({ files: [] })

//   const onDropWithPreview = (files) => {
//     setState({
//       files: state.files.concat(files),
//     });
//   }


//   console.log(state)
  
//   return (
//     <>
//       <Dropzone 
//         accept="image/*"
//         onDrop={onDropWithPreview}
//       >
//         {({getRootProps, getInputProps}) => (
//           <div {...getRootProps()}>
//             <input {...getInputProps()} />
//             <h1>Drag 'n' drop some STUFF here, or click to select files</h1>
//           </div>
//         )}
//       </Dropzone>
//       {state.files.length > 0 &&
//         <>
//           <h3>Previews</h3>
//           {state.files.map((file, index) => (
//             <React.Fragment key={Math.random()}>
//               <img
//                 alt="Preview"
//                 src={file.path}
//                 style={previewStyle}
//               />
//             </React.Fragment>
//           ))}
//         </>
//       }
//     </>
//   )
// }



// const previewStyle = {
//   display: 'inline',
//   width: 100,
//   height: 100,
// }
