'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaLightbulb } from 'react-icons/fa'

const FloatingActionButton: React.FC = () => (
  <motion.div
    className="fixed bottom-8 right-8 z-50"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Link href="/start-campaign" className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition duration-300">
      <FaLightbulb className="text-2xl" />
    </Link>
  </motion.div>
)

export default FloatingActionButton

