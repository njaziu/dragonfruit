import React from 'react'
import data from '../data/countries.json'
import styles from '../css/tour.module.css'
import {FaMap} from 'react-icons/fa'

const Countries = () => {
    return (
        <div className="container">
            <div className={styles.cardsContainer}>
                {data.slice(0,3).map((post, index) => {
                    return (
                        <article className={styles.tour} key={index}>
                            <div className={styles.imgContainer}>
                                <img src={post.image} alt={post.id} className={styles.img}/>
                            </div>
                            <div className={styles.footer}>
                                <h3>{post.name}</h3>
                                <div className={styles.info}>
                                    <h4 className={styles.country}>
                                        <FaMap className={styles.icon} />
                                        {post.country}
                                    </h4>
                                    <div className={styles.details}>
                                        <p>{post.content}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Countries
