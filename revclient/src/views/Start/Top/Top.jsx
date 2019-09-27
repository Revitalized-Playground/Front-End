import React from 'react';

const Top = () => {
    return (
        <div className="topContainer">
            <div className="title">
                <p>What is your role</p>
                <p className="questionMark">?</p>    
            </div>
            <div className="roles">
                <div className="role">
                    <div className="bar color-cerulean"></div>
                    <p>Avionics</p>
                </div>
                <div className="role">
                    <div className="bar color-pikachu"></div>
                    <p>Construction</p>
                </div>
                <div className="role">
                    <div className="bar color-erudite-purple"></div>
                    <p>Interior Design</p>
                </div>
                <div className="role">
                    <div className="bar color-mutant-turtle"></div>
                    <p>Welding</p>
                </div>
                <div className="role">
                    <div className="bar color-ruby-enchantment"></div>
                    <p>Wind Energy</p>
                </div>
            </div>
        </div>
    );
};

export default Top;