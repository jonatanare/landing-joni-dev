import Image from 'next/image'
import React from 'react'

export default function Hero () {
  return (
    <>
      <div className='bg-hero-yellow'>
        <h1 className='text-5xl font-bold text-black pt-9 dark:text-white'>Hey There, <br />I’m Jonatan</h1>
        <p className='text-xl pt-4'>I design beautifully simple things, And I love what i do</p>

        <Image src='/assets/jonatan.webp' alt='Jonatan Arévalo' width={420} height={612} className='img-jonatan' />
      </div>
    </>
  )
}
