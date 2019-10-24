import React, { useState } from 'react';
import Slider from 'react-slick';

const ProjectPictures = ({ projectPhotos, carouselVal, carVal }) => {
	const [el, setEl] = useState({ holder: document.getElementsByClassName('projectImgCarousel') });
	const [view, setView] = useState(window.innerWidth);

	const [global, setGlobal] = useState({
		touchstartx: undefined,
		touchmovex: undefined,
		movex: undefined,
		index: 0,
		holderWidth: 0,
	});

	const tchStart = ev => {
		setEl({
			holder: ev.currentTarget,
			imgSlide: ev.target,
		});

		setGlobal({
			...global,
			touchstartx: ev.touches[0].pageX,
			holderWidth: ev.currentTarget.offsetWidth,
			touchmovex: ev.touches[0].pageX,
		});
	};

	const tchMove = ev => {
		setGlobal({
			...global,
			touchmovex: ev.touches[0].pageX,
		});

		el.holder.style = `transform: translateX(${-global.index * global.holderWidth +
			(global.touchmovex - global.touchstartx)}px)`;
	};

	const tchEnd = ev => {
		if (
			global.touchstartx > global.holderWidth / 2 &&
			global.touchmovex < global.holderWidth / 2 &&
			global.index !== projectPhotos.length - 1
		) {
			setGlobal({
				...global,
				index: ++global.index,
			});
		}

		if (
			global.touchstartx < global.holderWidth / 2 &&
			global.touchmovex > global.holderWidth / 2 &&
			global.index !== 0
		) {
			setGlobal({
				...global,
				index: --global.index,
			});
		}

		el.holder.style = `transform: translateX(${-global.index * global.holderWidth}px);`;
	};

	window.onresize = () => {
		setView(window.innerWidth);
		el.holder.style = `transform: translateX(${-global.index * window.innerWidth}px); transition: 0s;`;
	};

	const settings = {
		arrows: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: carouselVal ? 1 : 2,
		slidesToScroll: 1,
		swipeToSlide: true,
		// centerPadding: "400px",
		lazyLoad: 'progressive',
		className: 'carousel-card',
		responsive: [
			// {
			//     breakpoint: 1200,
			//     settings: {
			//         slidesToShow: 2,
			//         slidesToScroll: 2,
			//     }
			// },
			// {
			//     breakpoint: 600,
			//     settings: {
			//         slidesToShow: 1,
			//         slidesToScroll: 1,
			//     }
			// },
			// {
			//     breakpoint: 480,
			//     settings: {
			//         slidesToShow: 1,
			//         slidesToScroll: 1
			//     }
			// }
		],
	};
	if (view > 500) {
		return (
			<div className="projectPictureContainer-desktop">
				{projectPhotos.length > 0 && <h2>Project Photos</h2>}

				{projectPhotos.length > 0 && (
					<div onClick={carVal} className={carouselVal ? 'carousel-large-project' : 'carousel-small-project'}>
						<Slider {...settings}>
							{projectPhotos &&
								projectPhotos.map(image => (
									<section className="carousel-card-inner-project" key={image.id}>
										<div className="carousel-card-image">
											<img
												className="car-pic"
												src={image.imageUrl}
												alt={image.id}
												onClick={carVal}
											/>
										</div>
									</section>
								))}
						</Slider>
					</div>
				)}
				{/* <div className="dotsContainer">
					{projectPhotos &&
						projectPhotos.map((each, index) => (
							<span className={index === global.index ? 'dot active' : 'dot'} key={index} />
						))}
				</div> */}
			</div>
		);
	} else {
		return (
			<div className="projectPictureContainer">
				{projectPhotos.length > 0 && <h2>Project Photos</h2>}

				<div className="projectImgCarousel" onTouchStart={tchStart} onTouchMove={tchMove} onTouchEnd={tchEnd}>
					{projectPhotos.map((each, index) => (
						<img src={each} key={index} alt="slideshow" className="imgSlide" />
					))}
				</div>

				<div className="dotsContainer">
					{projectPhotos.map((each, index) => {
						const cls = index === global.index ? 'dot active' : 'dot';

						return <span className={cls} key={index} />;
					})}
				</div>
			</div>
		);
	}
};

export default ProjectPictures;
