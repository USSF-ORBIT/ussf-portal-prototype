import React from 'react'
import styles from  './Logo.module.css'

const Logo = () => {
    return (
        <div>
            <img src='space-force-logo.png' alt='Space Force logo' className={styles.default} />
        </div>
    )
}

export default Logo