export const withPreviews = dropHandler => (accepted, rejected) => {
    const acceptedWithPreview = accepted.map(file => ({
      ...file,
      preview: URL.createObjectURL(file),
    }))
  
    dropHandler(acceptedWithPreview, rejected)
  }
  
  export const clearPreviews = files =>
    files.forEach(file => URL.revokeObjectURL(file.preview))
  