"use client"
import React from 'react'
import hero from "../../public/assets/images/hero.svg"
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='bg-red-500'>
        <div className='h-screen'>
            <Image src={hero} alt="hero-banner" className='w-[532px]'/>
        </div>
       
    </section>
  )
}

export default Hero
