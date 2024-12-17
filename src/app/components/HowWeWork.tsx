'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaPause, FaArrowRight } from 'react-icons/fa'

const steps = [
  { title: "Connect", description: "Join our community of changemakers" },
  { title: "Create", description: "Start a fundraiser for your cause" },
  { title: "Share", description: "Spread the word to your network" },
  { title: "Impact", description: "Make a difference in Rwanda" }
]

const HowWeWork: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  React.useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(nextStep, 3000)
    }
    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800">How RwandaRize works</h2>
          <Link
            href="/how-it-works"
            className="inline-flex items-center px-4 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
          >
            Learn more
            <FaArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="relative rounded-2xl overflow-hidden bg-white shadow-2xl">
          <div className="aspect-[16/9] md:aspect-[21/9] relative">
            <Image
              src="/community.jpeg"
              alt="Community members working together in a garden"
              fill
              className="object-cover"
            />
            
            {/* Interactive Steps Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="w-full p-6 md:p-8">
                <div className="flex justify-between items-center mb-4">
                  {steps.map((step, index) => (
                    <motion.div
                      key={index}
                      className={`w-1/4 h-1 bg-white rounded-full ${index === currentStep ? 'opacity-100' : 'opacity-30'}`}
                      animate={{ scaleX: index === currentStep ? 1 : 0.5 }}
                      transition={{ duration: 0.5 }}
                    />
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-white"
                  >
                    <h3 className="text-2xl font-bold mb-2">{steps[currentStep].title}</h3>
                    <p>{steps[currentStep].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Play/Pause Button */}
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
            >
              {isPlaying ? <FaPause className="text-purple-600" /> : <FaPlay className="text-purple-600" />}
            </button>
          </div>

          {/* Interactive Buttons */}
          <div className="p-6 md:p-8 bg-white">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    index === currentStep ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {step.title}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/start-fundraising"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Start Your Fundraiser
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default HowWeWork

