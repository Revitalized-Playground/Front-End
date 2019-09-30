import React, {useState, useEffect} from 'react'
import Slider from "react-slick";

const ProjectPictures = ({projectPhotos}) => {
    const [el, setEl] = useState({
        holder: document.getElementsByClassName('projectImgCarousel')
    });
    const [global, setGlobal] = useState({
      touchstartx: undefined,
      touchmovex: undefined,
      movex: undefined,
      index: 0,
      holderWidth: 0
    });
    
    const tchStart = ev => {
      setEl({
        holder: ev.currentTarget,
        imgSlide: ev.target
      });
  
      setGlobal({
        ...global,
        touchstartx: ev.touches[0].pageX,
        holderWidth: ev.currentTarget.offsetWidth,
        touchmovex: ev.touches[0].pageX
      });
    };
  
    const tchMove = ev => {
      setGlobal({
        ...global,
        touchmovex: ev.touches[0].pageX
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
          index: ++global.index
        });
      }
  
      if (
        global.touchstartx < global.holderWidth / 2 &&
        global.touchmovex > global.holderWidth / 2 &&
        global.index !== 0
      ) {
        setGlobal({
          ...global,
          index: --global.index
        });
      }
  
      el.holder.style = `transform: translateX(${-global.index * global.holderWidth}px);`;
    };



    const resize = () => {
        el.holder.style = `transform: translateX(${-global.index * window.innerWidth}px); transition: 0s;`;  
    }

    window.onresize = resize
  
    return (
      <div className="projectPictureContainer">
        <p className='p'>Project Photos</p>

        <div
          className="projectImgCarousel"
          onTouchStart={tchStart}
          onTouchMove={tchMove}
          onTouchEnd={tchEnd}
        >
          {projectPhotos.map((each, index) => (
              <img src={each} key={index} alt="slideshow" className="imgSlide" />
          ))}
        </div>
  
        <div className="dotsContainer">
          {projectPhotos.map((each, index) => {
            const cls = index === global.index ? "dot active" : "dot";
  
            return <span className={cls} key={index} />;
          })}
        </div>
      </div>
    );
}

export default ProjectPictures