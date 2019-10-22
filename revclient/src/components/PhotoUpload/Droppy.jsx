import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaTimes } from 'react-icons/fa';

const Droppy = props => {
	const [featuredImage, setFeaturedImage] = useState();
	const { images, setProjectDetails, projectDetails } = props;

	const [imagePreview, setImagePreview] = useState(images);

	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: acceptedFiles => {
			setImagePreview([
				...imagePreview,
				...acceptedFiles.map(file =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					}),
				),
			]);
		},
	});

	const removeThumb = thumbToRemove => {
		const newImagePreview = imagePreview.filter(image => image.lastModified !== thumbToRemove.lastModified);
		setImagePreview(newImagePreview);
	};

	const setFeaturedImagePreview = i => {
		setFeaturedImage(i + 1);
		setProjectDetails({ ...projectDetails, featuredImage: imagePreview[i].name });
	};

	const thumbs = imagePreview.map((image, i) => (
		<div className={`thumb`} key={i} onClick={() => setFeaturedImagePreview(i)}>
			<FaTimes className="thumb-delete" onClick={() => removeThumb(image)} />
			<img
				className={`thumb-img ${featuredImage && featuredImage === i + 1 && `featuredPreview`}`}
				src={image.preview}
				alt="preview"
			/>
		</div>
	));

	useEffect(() => {
		setProjectDetails({ ...projectDetails, images: imagePreview });
	}, [imagePreview]);

	return (
		<section className="droppy-container">
			<div {...getRootProps({ className: 'dropzone' })}>
				<input {...getInputProps()} />
				<p>Upload project photos</p>
			</div>
			<aside className="thumbs-container">{thumbs}</aside>
		</section>
	);
};

export default Droppy;
