'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPencilAlt, FaBullhorn, FaHandHoldingHeart, FaFlag, FaArrowRight, FaQuoteLeft } from 'react-icons/fa'
import Footer from '../components/Footer'

const steps = [
  {
    icon: FaPencilAlt,
    title: "Set Up Your Fundraiser",
    description: "Create your campaign, share your story, and set your goal. Our user-friendly interface makes it easy to get started in minutes.",
    color: "bg-chocolate-500"
  },
  {
    icon: FaBullhorn,
    title: "Spread the Word",
    description: "Share your campaign on social media and with your network. Use our built-in tools to reach more potential donors and amplify your message.",
    color: "bg-chocolate-600"
  },
  {
    icon: FaHandHoldingHeart,
    title: "Collect Donations",
    description: "Receive secure donations and track your progress in real-time. Our platform ensures safe transactions and provides detailed analytics.",
    color: "bg-chocolate-700"
  },
  {
    icon: FaFlag,
    title: "Reach Your Goal",
    description: "Achieve your target and make your project a reality. Celebrate your success and share the impact with your supporters.",
    color: "bg-chocolate-800"
  }
]

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden font-poppins">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-4 text-chocolate-800"
        >
          How RwandaRize Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-center mb-12 text-chocolate-600"
        >
          Start your fundraiser in just a few simple steps and make a difference.
        </motion.p>

        <div className="relative mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-chocolate-200 transform -translate-y-1/2 rounded-full"></div>
          <div className="relative z-10 flex justify-between items-center">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col items-center cursor-pointer ${
                  index === activeStep ? 'scale-110' : 'scale-100'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-4 relative shadow-lg`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <step.icon className="text-3xl text-white" />
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-chocolate-400"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.1 }}
                    >
                      <FaArrowRight className="text-2xl" />
                    </motion.div>
                  )}
                </motion.div>
                <p className="text-sm font-medium text-center text-chocolate-700">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-xl border border-chocolate-200 mb-16"
          >
            <h3 className="text-3xl font-semibold mb-4 text-chocolate-800">{steps[activeStep].title}</h3>
            <p className="text-chocolate-600 mb-6 text-lg">{steps[activeStep].description}</p>
            <div className="flex justify-between items-center">
              <button
                className="px-6 py-3 bg-chocolate-100 text-chocolate-800 rounded-full hover:bg-chocolate-200 transition-colors text-lg font-semibold"
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev))}
              >
                Previous
              </button>
              <button
                className="px-6 py-3 bg-chocolate-500 text-white rounded-full hover:bg-chocolate-600 transition-colors text-lg font-semibold"
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev))}
              >
                Next
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md border border-chocolate-200 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <FaQuoteLeft className="absolute top-4 left-4 text-4xl text-chocolate-200 opacity-50" />
            <h3 className="text-2xl font-semibold mb-6 text-chocolate-800">Success Story</h3>
            <div className="flex items-center mb-6">
              <img src="/placeholder.svg?height=100&width=100" alt="Sarah" className="w-20 h-20 rounded-full mr-6 border-4 border-chocolate-300" />
              <div>
                <p className="font-semibold text-chocolate-700 text-xl">Sarah's Education Fund</p>
                <p className="text-chocolate-500 text-lg font-medium">$10,000 raised</p>
              </div>
            </div>
            <p className="text-chocolate-600 text-lg italic">
              "Thanks to RwandaRize, I raised $10,000 to fund my dream education. The platform made it easy to share my story and connect with supporters. I'm now pursuing my degree in Environmental Science!"
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md border border-chocolate-200"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-chocolate-800">Start Your Campaign</h3>
            <p className="text-chocolate-600 mb-8 text-lg">
              Ready to bring your project to life? Create your campaign now and start making a difference in your community.
            </p>
            <motion.button
              className="w-full px-8 py-4 bg-chocolate-500 text-white text-xl font-semibold rounded-full hover:bg-chocolate-600 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Your Campaign
            </motion.button>
          </motion.div>
              </div>
            
          </div>
          
          <Footer/>
    </section>
  )
}

export default HowItWorks