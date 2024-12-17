'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    subItems: [
      { name: 'Our Mission', href: '/about/mission' },
      { name: 'Our Team', href: '/about/team' },
      { name: 'Partners', href: '/about/partners' },
    ],
  },
  { name: 'Campaigns', href: '/campaigns' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Contact Us', href: '/contact' },
]

const languages = ['EN', 'FR', 'RW']

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [language, setLanguage] = useState('EN')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-purple-600">RwandaRize</Link>
        
        <nav className="hidden lg:flex space-x-2 xl:space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link 
                href={item.href}
                className="text-gray-600 hover:text-purple-600 transition duration-300 flex items-center"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.name}
                {item.subItems && <FaChevronDown className="ml-1 text-xs" />}
              </Link>
              {item.subItems && activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="appearance-none bg-transparent border border-purple-600 text-purple-600 py-1 px-2 pr-8 rounded-md cursor-pointer"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
            <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-purple-600 pointer-events-none" />
          </div>
          <Link href="/sign-in" className="px-4 py-2 text-purple-600 border border-purple-600 rounded hover:bg-purple-600 hover:text-white transition duration-300">
            Sign In
          </Link>
          <Link href="/start-campaign" className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300">
            Start a Campaign
          </Link>
        </div>

        <button
          className="lg:hidden text-purple-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white w-full"
        >
          <div className="container mx-auto py-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 text-gray-600 hover:text-purple-600 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-purple-600 transition duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 space-y-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="block w-full bg-transparent border border-purple-600 text-purple-600 py-2 px-4 rounded-md"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
              <Link
                href="/sign-in"
                className="block w-full px-4 py-2 text-center text-purple-600 border border-purple-600 rounded hover:bg-purple-600 hover:text-white transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/start-campaign"
                className="block w-full px-4 py-2 text-center bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Start a Campaign
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header

