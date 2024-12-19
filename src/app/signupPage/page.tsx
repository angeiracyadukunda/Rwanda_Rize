'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGoogle, FaApple, FaArrowRight, FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
// import Image from 'next/image'
import Link from 'next/link'

const AuthPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    agreeToTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-indigo-600 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="relative h-40 bg-gradient-to-r from-purple-500 to-indigo-500">
            <div className="absolute inset-0 bg-black opacity-30" />
            <h1 className="absolute bottom-4 left-6 text-3xl font-bold text-white">
              {isSignup ? 'Join RwandaRize' : 'Welcome Back'}
            </h1>
          </div>

          <div className="p-8">
            <div className="space-y-4">
              <button
                className="w-full py-3 px-4 bg-white border border-gray-300 rounded-full text-gray-700 font-medium flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
                type="button"
              >
                <FaGoogle className="text-red-500" />
                <span>Continue with Google</span>
              </button>
              <button
                className="w-full py-3 px-4 bg-black text-white rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-gray-900 transition-colors"
                type="button"
              >
                <FaApple />
                <span>Continue with Apple</span>
              </button>
            </div>

            <div className="my-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {isSignup && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <div className="relative">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full py-3 px-4 bg-gray-100 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                        placeholder="Full Name"
                        required={isSignup}
                      />
                      <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full py-3 px-4 bg-gray-100 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                  placeholder="Email address"
                  required
                />
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full py-3 px-4 bg-gray-100 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                  placeholder="Password"
                  required
                />
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>

              <AnimatePresence mode="wait">
                {isSignup && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center"
                  >
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="mr-2 rounded text-purple-500 focus:ring-purple-500"
                      required={isSignup}
                    />
                    <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link href="/terms" className="text-purple-500 hover:underline">
                        Terms and Conditions
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy" className="text-purple-500 hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-purple-600 text-white rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-purple-700 transition-colors"
                disabled={isSignup && (!formData.email || !formData.password || !formData.agreeToTerms)}
              >
                <span>{isSignup ? 'Sign Up' : 'Log In'}</span>
                <FaArrowRight />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{' '}
              <button onClick={() => setIsSignup(!isSignup)} className="text-purple-500 hover:underline font-medium">
                {isSignup ? 'Log in' : 'Sign up'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>

      {/* <div className="mt-8 text-center text-white">
        <p className="font-semibold mb-4">Trusted by over 10,000 users in Rwanda</p>
        <div className="flex justify-center space-x-4">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Security Verified"
            width={40}
            height={40}
            className="rounded-full bg-white/10 p-2"
          />
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="SSL Encrypted"
            width={40}
            height={40}
            className="rounded-full bg-white/10 p-2"
          />
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="Trusted Platform"
            width={40}
            height={40}
            className="rounded-full bg-white/10 p-2"
          />
        </div>
      </div> */}
    </div>
  )
}

export default AuthPage