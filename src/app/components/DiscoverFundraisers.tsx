'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch,FaGraduationCap, FaHospital, FaTree, FaHome, FaUsers } from 'react-icons/fa'
import Image from 'next/image'

interface Fundraiser {
  id: string;
  title: string;
  category: string;
  image: string;
  goal: number;
  raised: number;
  location: string;
}

const categories = [
  { name: 'Healthcare', icon: <FaHospital /> },
  { name: 'Education', icon: <FaGraduationCap /> },
  { name: 'Environment', icon: <FaTree /> },
  { name: 'Housing', icon: <FaHome /> },
  { name: 'Community', icon: <FaUsers /> },
]

const sampleFundraisers: Fundraiser[] = [
  {
    id: '1',
    title: 'Support Local Hospital',
    category: 'Healthcare',
    image: '/hospital.jpg',
    goal: 50000,
    raised: 35000,
    location: 'Kigali',
  },
  {
    id: '2',
    title: 'Build a School Library',
    category: 'Education',
    image: '/library.jpg',
    goal: 25000,
    raised: 18000,
    location: 'Butare',
  },
  {
    id: '3',
    title: 'Reforestation Project',
    category: 'Environment',
    image: '/forest.jpg',
    goal: 15000,
    raised: 9000,
    location: 'Nyungwe',
  },
  // Add more sample fundraisers as needed
]

const FundraiserCard: React.FC<{ fundraiser: Fundraiser }> = ({ fundraiser }) => {
  const progress = (fundraiser.raised / fundraiser.goal) * 100

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
    >
      <div className="relative h-48">
        <Image src={fundraiser.image} alt={fundraiser.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{fundraiser.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{fundraiser.location}</p>
        <div className="mb-2 bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-600 rounded-full h-2" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm">
          <span>Raised: ${fundraiser.raised.toLocaleString()}</span>
          <span>Goal: ${fundraiser.goal.toLocaleString()}</span>
        </div>
        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition duration-300">
          Donate Now
        </button>
      </div>
    </motion.div>
  )
}

const DiscoverFundraisers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredFundraisers = sampleFundraisers.filter(fundraiser => 
    fundraiser.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || fundraiser.category === selectedCategory)
  )

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Discover Fundraisers Inspired by What You Care About</h2>
        
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search fundraisers..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center px-4 py-2 rounded-full ${
                  selectedCategory === category.name ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 hover:bg-purple-100'
                } transition duration-300`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFundraisers.map((fundraiser) => (
            <FundraiserCard key={fundraiser.id} fundraiser={fundraiser} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
            Explore More Causes
          </button>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Get Personalized Recommendations</h3>
          <p className="text-gray-600 mb-6">Sign up to receive updates and fundraiser recommendations tailored to your interests.</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default DiscoverFundraisers

