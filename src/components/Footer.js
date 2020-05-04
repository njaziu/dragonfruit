import React from 'react'
import styles from '../css/footer.module.css'
import socialIcons from '../constants/social-icons'


const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.icons}>
                {socialIcons.map((item, index)=>{
                    return(
                    <a key={index} href={item.url} target="_black" rel="noopener noreferrer">{item.icon}</a>
                    )
                })}
            </div>
            <div className={styles.copyright}>
                Copyright &copy; Dragon Fruit {new Date().getFullYear()} all rights reserved
            </div>
        </footer>
    )
}

export default Footer