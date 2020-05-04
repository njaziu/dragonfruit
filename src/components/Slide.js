
import React from "react";
import styles from '../css/slider.module.css'

const Slide = ({ position, transition, image, title, info }) => {
    return (
        <div className={styles.slidesContainer + " " + position + " " + transition}>
            <div className={styles.slidecaption}>
                <h1 className={styles.hnjetag}>{title}</h1>
                <p className={styles.paragrafi}>{info}</p>
            </div>
            <img src={image} className={styles.slideImg} alt="slide" />
        </div>
    );
};

export default Slide;
