import React from 'react'
import Image from 'next/image'
import TextBanner from './TextBanner'
import { card3 } from '../../public/assets/images'

const PhotographyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
       <TextBanner 
        text="Photography" 
        size="large"
        withDivider
        className="bg-gray-100"
      />
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
        
        {/* Image Section */}
        <div className="relative w-full h-[400px] flex items-center justify-center">
          <Image
            src={card3}
            alt="Photography showcase"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center items-center p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Placeholder Title</h2>
          <p className="text-gray-600 text-base md:text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet augue nec velit varius
            aliquam. Donec gravida, felis in condimentum feugiat, metus ligula ultrices risus, ac ultrices leo
            augue sit amet lectus.
          </p>
        </div>

      </div>
    </div>
  )
}

export default PhotographyPage