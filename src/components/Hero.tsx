"use client"
import React from 'react'
import {hero_img,splatter1,splatter2,splatter3,splatter4} from "../../public/assets/images"
import {hero_logo} from "../../public/assets/logos"
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='h-screen flex flex-col md:flex-row items-center'>
      <div className='md:w-1/2 relative max-w-fit'>
        <Image src={hero_img} alt="hero-banner" className='h-screen max-w-fit'/>
        <Image 
          src={hero_logo} 
          alt="logo" 
          className='absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[300px]'
        />
      </div>
      
      <div className='w-full md:w-1/2 px-4 py-8 md:py-0'>
        <div className='max-w-md mx-auto'>
          <h1 className='text-4xl md:text-5xl font-extrabold text-center mb-4'>
            Welcome to<br/>
            Dineo&apos;s Design<br/>
            Studio
          </h1>
          <p className='text-xl md:text-2xl text-center font-light'>
            Crafting Unique Visual<br/>
            Stories to Elevate Your<br/>
            Brand&apos;s Presence.
          </p>
        </div>
        
        <div className='mt-8 grid grid-cols-2 gap-4'>
          <div className='text-center'>
            <span className='font-bold text-xl'>01</span>
            <p className='text-sm'>ART DIRECTION<br/>BRAND DESIGN</p>
          </div>
          <div className='text-center'>
            <span className='font-bold text-xl'>02</span>
            <p className='text-sm'>DIGITAL ART<br/>VISUAL DESIGN</p>
          </div>
          <div className='text-center'>
            <span className='font-bold text-xl'>03</span>
            <p className='text-sm'>PHOTOGRAPHY<br/>& ILLUSTRATIONS</p>
          </div>
          <div className='text-center'>
            <span className='font-bold text-xl'>04</span>
            <p className='text-sm'>Conceptualisation &<br/>Wire-framing</p>
          </div>
        </div>
      </div>

      <Image src={splatter1} alt="splatter" className='absolute top-48 left-1/2 w-24 h-24' />
      <Image src={splatter2} alt="splatter" className='absolute bottom-48 left-1/2 w-24 h-24' />
      <Image src={splatter3} alt="splatter" className='absolute right-36 top-64 w-24 h-24' />
      <Image src={splatter4} alt="splatter" className='absolute bottom-10 right-24 w-24 h-24' />
    </section>
  )
}

export default Hero
