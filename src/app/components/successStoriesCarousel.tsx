'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface SuccessStoryProps {
  image: string;
  title: string;
  description: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({ image, title, description }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
    whileHover={{ y: -5 }}
  >
    <div className="relative h-48 md:h-64">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="p-6">
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
)

const SuccessStoriesCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const stories: SuccessStoryProps[] = [
    {
      image: "/children.jpg",
      title: "Clean Water for Kigali",
      description: "Provided clean water access to over 1000 families in rural Kigali, improving health and quality of life."
    },
    {
      image: "/education.jpg",
      title: "Tech Education Initiative",
      description: "Equipped 500 young Rwandans with coding skills, opening doors to tech careers and fostering innovation in the local IT sector."
    },
    {
      image: "/children.jpg",
      title: "Sustainable Agriculture Project",
      description: "Helped 200 farmers adopt sustainable practices, increasing crop yields by 40% and improving food security in rural communities."
    },
    {
      image: "/education.jpg",
      title: "Women Empowerment Program",
      description: "Supported 300 women entrepreneurs in starting their own businesses, promoting economic independence and gender equality."
      },
      {
        image: "/children.jpg",
        title: "Sustainable Agriculture Project",
        description: "Helped 200 farmers adopt sustainable practices, increasing crop yields by 40% and improving food security in rural communities."
      },
      {
        image: "/education.jpg",
        title: "Women Empowerment Program",
        description: "Supported 300 women entrepreneurs in starting their own businesses, promoting economic independence and gender equality."
      }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % stories.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [stories.length])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % stories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + stories.length) % stories.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Inspiring Success Stories</h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence initial={false}>
              {stories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className={index >= currentSlide && index < currentSlide + 3 ? 'block' : 'hidden lg:block'}
                >
                  <SuccessStory {...story} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition duration-300"
              aria-label="Previous story"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition duration-300"
              aria-label="Next story"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStoriesCarousel

