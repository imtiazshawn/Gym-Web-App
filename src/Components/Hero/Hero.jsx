import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';


function Hero() {

    const transition = {type: 'spring', duration: '3'};
    const mobile = window.innerWidth <=768 ? true : false;
  return (
    <div className="hero" id='home'>


            {/* Blur For Hero Section */}

        <div className="blur hero-blur"></div>


             {/* Left Side of the Hero Section */}


        <div className="left-h">

            {/* Header */}

            <Header/>


            {/* The Best Ad */}

            <div className="the-best-ad">
                <motion.div
                    initial={{left: mobile ? "165px" : "238px"}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                 ></motion.div>
                <span>the best fitness club in the town</span>
            </div>


            {/* The Hero Heading */}

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>
                        In here we will help you to shape and build your ideal live up your life to fullest
                    </span>
                </div>
            </div>


            {/* Figures */}

            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix='+'/>
                    </span>
                    <span>expert coaches</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={978} start={800} delay='4' preFix='+'/>
                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter end={50} start={0} delay='4' preFix='+'/>
                    </span>
                    <span>fitness programs</span>
                </div>
            </div>


            {/* Hero Buttons */}

            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>





            {/* Right side of the Hero Section */}


        <div className="right-h">


            {/* Right side button */}

            <button className='btn'>Join Now</button>


            {/* Heart Rate */}

            <motion.div 
                initial={{right: '-1rem'}}
                whileInView={{right: '4rem'}}
                transition={transition}
                className="heart-rate">
                <img src={heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>


            {/* Hero images */}

            <img src={hero_image} className="hero-image" />
            <motion.img
             initial={{right: '11rem'}}
             whileInView={{right: '20rem'}}
             transition={transition}
             src={hero_image_back} className="hero-image-back" />


            {/* Calories */}

            <motion.div 
                initial={{right: '37rem'}}
                whileInView={{right: '28rem'}}
                transition={transition}
                className="calories">
                <img src={calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Hero;