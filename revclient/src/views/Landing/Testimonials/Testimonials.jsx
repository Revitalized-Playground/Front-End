import React from 'react';

import lucas from "../../../assets/LandingPage/Lucassona.png";
import maleescha from "../../../assets/LandingPage/Mechalasona.png";

const Testimonials = () => {
    return (
        <section className="testimonials">
            <img src={lucas} alt="Lucas" />
            <p>
            Hear what our students, experts,
            <br /> and supporters are raving about...
            </p>
            <img
            src={maleescha}
            alt="Maleescha"
            />
        </section>
    );
};

export default Testimonials;