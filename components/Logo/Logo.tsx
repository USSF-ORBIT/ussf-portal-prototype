import React from 'react'
import Image from 'next/image'
import styles from './Logo.module.scss'

export type LogoProps = {
  size?: number
}

const Logo = ({ size = 250 }: LogoProps) => {
  return (
    <div className={styles.default}>
      <Image
        src="/space-force-logo.png"
        alt="Space Force"
        width={size}
        height={size}
      />
    </div>
  )
}

export default Logo
