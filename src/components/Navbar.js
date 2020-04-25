import React, {useState} from 'react'
import {Link} from 'gatsby'
import logo from '../images/logo.jpg'
import links from '../constants/links'
import styles from '../css/navbar.module.css'
import {FaAlignRight} from 'react-icons/fa'


const Navbar = () =>{
    const [isOpen, setNav ] = (useState(false));

    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }
    return(
        <nav className={styles.navbar}>
            <div className={styles.navCenter}>
                <div className={styles.navHeader}>
                    <img src={logo} alt="bg-logo" className={styles.logoImg}/>
                    <h2 className={styles.logoText}>dragon<span>fruit</span></h2>
                    <button type="button" className={styles.logoBtn} onClick={toggleNav}>
                        <FaAlignRight className={styles.logoIcon} />
                    </button>
                </div>
                <ul className={isOpen ? ` ${styles.navLinks} ${styles.showNav}` : `${styles.navLinks}`}>
                    {links.map((item,index)=>{
                        return(
                            <li key={index}>
                                <Link to={item.path} className={isOpen ? ` ${styles.mystyle}` : ``}>{item.text}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar