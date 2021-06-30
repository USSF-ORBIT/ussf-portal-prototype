import React from 'react'
import Image from 'next/image'

export type LogoProps = {
  size: number
}

const Logo = ({ size = 250 }: LogoProps) => {
  return (
    <div>
      <Image
        src='/space-force-logo.png'
        alt='Space Force'
        width={size}
        height={size}
      />
    </div>
  )
}

export default Logo
