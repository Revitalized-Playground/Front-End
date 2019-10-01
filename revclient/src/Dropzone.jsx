
import React, { useState, useEffect, useCallback } from 'react';
import Dropzone from 'react-dropzone';
// import { withPreviews, clearPreviews } from './with-previews';

import Nav from "./components/Layout/Nav";

const Droppy = ({
    field: { name },
    form: { setFieldValue },
    ...props,
}) => {
    

    return (
        <>
            <Nav />
            <Dropzone 
                onDrop={(file) => {
                    setFieldValue(name, file)
                }}
                accept="image/*"
                multiple={false}
            >
                <h1>Try Dropping some shit here</h1>

            </Dropzone>
        </>
    )
}


export default Droppy
