import React from "react";
import styles from '../css/slider.module.css'

const Spacer = ({ w, h }) => {
    if (w) {
        return <div style={{ width: w }} className={styles.fullH} />;
    } else if (h) {
        return <div style={{ height: h }} className={styles.fullW} />;
    }
};

export default Spacer;
