import React from 'react'
import {Link} from 'gatsby'
import styles from '../css/footer.module.css'
import socialIcons from '../constants/social-icons'


const Footer = () =>{
    return(
        <div className={styles.footer}>
            Copyright &copy; Dragon Fruit {new Date().getFullYear()} all rights reserved
        </div>
    )
}

export default Footer