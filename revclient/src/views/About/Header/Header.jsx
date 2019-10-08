import React from 'react'

import Hero2 from '../../../assets/AboutPage/Hero2.png';

const Header = () => {
  return (
    <>
      <div className="about-header">
        <img
          src="https://res.cloudinary.com/revitalize/image/upload/v1570037035/about%20page/Hero_Images1_k5qnxo.svg"
          alt="" 
          className="img1" />
        <h1>Who We Are</h1>
        <img
          src={Hero2}
          alt=""
          className="img2" />
      </div>
    </>
  )
}

export default Header
