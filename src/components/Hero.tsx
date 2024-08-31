"use client"
import React from 'react'
import {hero_img,splatter1,splatter2,splatter3} from "../../public/assets/images"
import {hero_logo} from "../../public/assets/logos"
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/2 relative'>
            <Image src={hero_img} alt="hero-banner" className='w-full h-auto'/>
            <Image src={hero_logo} alt="logo" className='absolute bottom-4 left-4 w-[100px]'/>
        </div>

       
        <div className='col-span-1 lg:col-span-2/3'>
            <h1 className='text-5xl font-extrabold flex justify-center items-center text-center'>
                Welcome to <br/>
                Dineo&apos;s Design <br/>
                Studio 
            </h1>
            <p className='mt-8 text-4xl flex justify-center items-center text-center font-extralight'>
                Crafting Unique Visual <br/>
                Stories to Elevate Your <br/>
                Brand&apos;s Presence.
            </p>
        </div>
    </section>
  )
}

export default Hero
