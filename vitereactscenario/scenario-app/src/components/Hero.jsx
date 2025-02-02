import React, { useEffect } from "react";
import "./Hero.css";
import pic from '../imgs/button_start.svg';

const Hero = ({ title, description, won, lose, number, rgbColor }) => {


    return (
        <div className="cards flex flex-col text-white pt-60 hover:scale-105 transition-all duration-300">
            <div className="titlec flex text-2xl pb-15 pl-5 pt-5 ">{title}</div>
            <div className="cscenario">{description}</div>


            <div className="button w-64 h-32 absolute mt-100 ml-10 hover:scale-110 transition-all duration-300">
                <img src={pic} alt="button" />
            </div>



        </div>
    );
};

export default Hero;
