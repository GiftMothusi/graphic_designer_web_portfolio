import React from 'react'
import TextBanner from './TextBanner'
import Image from 'next/image'
import { 
  card2, 
  card3, 
  card4, 
  card5, 
  card6 
} from '../../public/assets/images'

const Illustrations = () => {
  return (
    <div className="flex flex-col">
      <TextBanner 
        text="Illustrations" 
        size="large"
        withDivider
        className="bg-gray-100"
      />

      {/* Full Viewport Main Image */}
      <div className="h-screen w-full relative mt-10">
        <Image
          src={card2}
          alt="Main illustration"
          fill
          className=""
          priority
        />
      </div>

      {/* Scrollable Thumbnails */}
      <div className="w-full px-4 py-12 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[card3, card4, card5, card6].map((image, index) => (
            <div key={index} className="relative aspect-[3/4] w-full">
              <Image
                src={image}
                alt={`Illustration thumbnail ${index + 1}`}
                fill
                className="object-cover hover:opacity-80 transition-opacity cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Illustrations