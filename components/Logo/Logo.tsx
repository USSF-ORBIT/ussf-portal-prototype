import React from 'react'
import styles from './Logo.module.css'

export type LogoProps = {
  size: number
}

const Logo = ({ size = 250 }: LogoProps) => {
  return (
    <div>
      <img
        src="space-force-logo.png"
        alt="Space Force logo"
        className={styles.default}
        style={{ width: `${size}px` }}
      />
    </div>
  )
}

export default Logo
