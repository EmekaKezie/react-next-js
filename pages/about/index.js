import Head from 'next/head'
import React from 'react'
import styles from '../../styles/Layout.module.css'


export default function about() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
            </Head>
            <div>
                <h1>About Page</h1>
            </div>
        </div>
    )
}
