'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// You can add more AI platforms to this list.
// To add logos, you can create a `logos` directory in `public`
// and update the list with the correct paths, e.g., logo: '/logos/chatgpt.svg'
const aiPlatforms = [
  { name: 'ChatGPT', logo: '/chatgpt-logo.svg' },
  { name: 'Perplexity', logo: '/perplexity-logo.svg' },
  { name: 'DeepSeek', logo: '/deepseek-logo.svg' },
  { name: 'Claude', logo: '/claude-logo.svg' },
  { name: 'Gemini', logo: '/gemini-logo.svg' },
  { name: 'Copilot', logo: '/copilot-logo.svg' },
  { name: '豆包', logo: '/doubao-logo.png' },
]

const chinesePlatforms = [0, 1, 2, 4, 5, 6]
const globalPlatforms = [0, 1, 2, 3, 4, 5]

interface AiLogoCarouselProps {
  locale: string
}

export function AiLogoCarousel({ locale }: AiLogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const platforms = locale === 'zh' ? chinesePlatforms : globalPlatforms

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsVisible(false)
      
      // After fade out, change to next platform and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % platforms.length)
        setIsVisible(true)
      }, 500) // Half of the total transition time
    }, 2500) // Change every 2.5 seconds

    return () => clearInterval(interval)
  }, [platforms])

  const currentPlatform = aiPlatforms[platforms[currentIndex]]

  return (
    <div
      className='inline-flex items-center justify-center py-2 px-4 md:px-5 rounded-[20px] bg-white shadow h-12 md:h-16 lg:h-18 min-h-[48px] transition-all duration-500 ease-in-out'
      style={{
        background: 'linear-gradient(white, white) padding-box, var(--gradient-primary) border-box',
        border: '3px solid transparent',
        boxShadow: '0px 0px 20px 0px rgba(122, 239, 169, 0.20)',
        backdropFilter: 'blur(5px)',
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? 'blur(0px)' : 'blur(4px)',
      }}
    >
      <Image
        src={currentPlatform.logo}
        alt={currentPlatform.name}
        width={28}
        height={28}
        className='mr-2 md:mr-3 flex-shrink-0 w-auto h-7 md:h-8 lg:h-9'
      />
      <span className='text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 flex-shrink-0'>{currentPlatform.name}</span>
    </div>
  )
}
