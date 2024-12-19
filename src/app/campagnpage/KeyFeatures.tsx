'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRocket, FaLock, FaShareAlt, FaChartLine, FaArrowRight } from 'react-icons/fa'

const features = [
  {
    icon: FaRocket,
    title: "Easy Setup",
    description: "Create your campaign in 3 simple steps, guided by our intuitive AI assistant.",
    color: "from-blue-400 to-blue-600",
    highlight: "AI-powered setup"
  },
  {
    icon: FaLock,
    title: "Secure Donations",
    description: "Bank-level encryption and blockchain technology ensure 100% secure and transparent transactions.",
    color: "from-green-400 to-green-600",
    highlight: "Blockchain-backed security"
  },
  {
    icon: FaShareAlt,
    title: "Reach More People",
    description: "Leverage our AI-powered social media integration to automatically target and engage your ideal audience.",
    color: "from-yellow-400 to-yellow-600",
    highlight: "Smart audience targeting"
  },
  {
    icon: FaChartLine,
    title: "Track Your Progress",
    description: "Real-time analytics and predictive modeling help you optimize your campaign's performance.",
    color: "from-red-400 to-red-600",
    highlight: "Predictive analytics"
  }
]

const KeyFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Why Start a Campaign with Us?
        </motion.h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r ${feature.color}`}>
                  <feature.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-2"
                    >
                      <div className="text-sm font-medium text-purple-600">
                        {feature.highlight}
                      </div>
                      <button className="w-full px-4 py-2 bg-white text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 transition-colors flex items-center justify-center space-x-2">
                        <span>Learn More</span>
                        <FaArrowRight />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 opacity-20 blur-3xl z-0"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-700 mb-6">
            Experience the future of crowdfunding with our innovative platform. 
            We combine cutting-edge technology with a user-friendly interface to 
            make your campaign a success.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-md transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Campaign Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default KeyFeatures