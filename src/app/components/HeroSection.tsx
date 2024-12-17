'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const HeroSection: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="pt-24 pb-16 bg-gradient-to-br from-purple-100 to-indigo-100"
  >
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Empower Change, Support Dreams in Rwanda
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of donors and campaigners in building a better future for Rwanda.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/campaigns" className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 flex items-center justify-center">
            Explore Campaigns <FaArrowRight className="ml-2" />
          </Link>
          <Link href="/start-campaign" className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition duration-300 text-center">
            Start Your Campaign
          </Link>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image
          src="/sad child.jpg"
          alt="People helping each other in Rwanda"
          width={600}
          height={400}
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </motion.section>
)

export default HeroSection

