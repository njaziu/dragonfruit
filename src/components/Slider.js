import React, { Component } from "react";
import Slideshow from "./Slideshow";
import styles from '../css/slider.module.css'
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";

const slides = [slide1, slide2, slide3, slide4];

class Slider extends Component {
    render() {
        return (
            <div className={styles.sliderContainer}>
                <div className={styles.mainClass}>
                    <Slideshow slides={slides}/>
                </div>
            </div>
        );
    }
}

export default Slider;
