'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaHandHoldingHeart, FaLightbulb, FaUsers } from 'react-icons/fa'

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="text-4xl text-purple-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
)

const FeaturesSection: React.FC = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose RwandaRize?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<FaHandHoldingHeart />}
          title="Direct Impact"
          description="Your contributions go directly to the people and projects that need them most in Rwanda, ensuring maximum impact."
        />
        <FeatureCard
          icon={<FaLightbulb />}
          title="Innovative Solutions"
          description="Support creative and sustainable projects that address real challenges in Rwandan communities, fostering long-term development."
        />
        <FeatureCard
          icon={<FaUsers />}
          title="Community-Driven"
          description="Join a vibrant community of changemakers committed to Rwanda's development, and be part of a larger movement for positive change."
        />
      </div>
    </div>
  </section>
)

export default FeaturesSection

