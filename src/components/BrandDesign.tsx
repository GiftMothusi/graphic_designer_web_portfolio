import React from 'react'
import TextBanner from './TextBanner'
import Image from 'next/image'
import { 
  card3, 
  card4, 
  card5 
} from '../../public/assets/images'
import { LampDemo } from './LampDemo'

const BrandDesign = () => {
  return (
    <div className="flex flex-col">
      <TextBanner 
        text="Brand Design" 
        size="large"
        withDivider
        className="bg-gray-100"
      />

      {/* Grid Layout Container */}
      <div className="w-full p-6 md:p-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Two Stacked Images */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={card3}
                alt="Brand design showcase 1"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={card4}
                alt="Brand design showcase 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Single Tall Image */}
          <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
            <Image
              src={card5}
              alt="Brand design showcase 3"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <LampDemo/>
      </div>
    </div>
  )
}

export default BrandDesign