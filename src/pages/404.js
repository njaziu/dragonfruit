import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/error.module.css'

export default function error() {
    return (
        <>
        <Layout>
           <div className={styles.error}>
               <h1>opps it's a dead end</h1>
                <Link to="/" className="btn-white"> Back to home</Link>
           </div>
        </Layout>
        </>
    )
}
