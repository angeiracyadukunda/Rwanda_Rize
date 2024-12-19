'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
//   FaArrowRight, 
  FaLock, 
  FaChartLine, 
  FaShare, 
//   FaQuestion,
  FaShieldAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaInfoCircle,
  FaTrophy,
  FaVideo
} from 'react-icons/fa'
import KeyFeatures from './KeyFeatures'
import Footer from '../components/Footer'

// Simulated AI suggestion function
const getAISuggestions = (category: string, title: string) => {
  // In a real application, this would call an API
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`Here's a great title suggestion for your ${category} campaign: "${title} - Make a Difference Today!"`)
    }, 1000)
  })
}

const steps = [
  { title: "Basic Info", icon: FaInfoCircle },
  { title: "Story", icon: FaShare },
  { title: "Media", icon: FaVideo },
  { title: "Goals", icon: FaChartLine },
  { title: "Review", icon: FaLock }
]

const EnhancedStartCampaign: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    goal: '',
    name: '',
    email: '',
    image: null as File | null,
  })
  const [aiSuggestion, setAiSuggestion] = useState('')
  const [achievements, setAchievements] = useState<string[]>([])
  const [showAchievement, setShowAchievement] = useState(false)

  useEffect(() => {
    if (formData.category && formData.title) {
      getAISuggestions(formData.category, formData.title).then((suggestion) => {
        setAiSuggestion(suggestion)
      })
    }
  }, [formData.category, formData.title])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, image: file }))
    if (file) {
      addAchievement("Picture Perfect")
    }
  }

  const addAchievement = (achievement: string) => {
    setAchievements(prev => [...prev, achievement])
    setShowAchievement(true)
    setTimeout(() => setShowAchievement(false), 3000)
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
      addAchievement(`Step ${currentStep + 1} Completed!`)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      <div className="max-w-4xl mx-auto pt-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Create Your Campaign</h1>
        
        {/* Key Features Section */}
        <KeyFeatures />

        {/* Campaign Creation Form */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mt-16">
          <div className="p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        index <= currentStep ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      <step.icon />
                    </div>
                    <span className="text-xs mt-1">{step.title}</span>
                  </div>
                ))}
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-full bg-purple-600 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Steps */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 0 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Campaign Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="e.g., Help Fund School Supplies"
                      />
                      {aiSuggestion && (
                        <p className="text-sm text-purple-600 mt-1">{aiSuggestion}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        <option value="education">Education</option>
                        <option value="health">Health</option>
                        <option value="emergency">Emergency</option>
                        <option value="community">Community</option>
                      </select>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Campaign Description
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Tell your story and explain how the funds will be used..."
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Campaign Image
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                            >
                              <span>Upload a file</span>
                              <input 
                                id="file-upload" 
                                name="file-upload" 
                                type="file" 
                                className="sr-only" 
                                onChange={handleImageUpload}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                      {formData.image && (
                        <div className="mt-4">
                          <p className="text-sm text-gray-500">Preview:</p>
                          <Image
                            src={URL.createObjectURL(formData.image)}
                            alt="Campaign preview"
                            width={200}
                            height={200}
                            className="mt-2 rounded-lg object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Fundraising Goal
                      </label>
                      <input
                        type="number"
                        name="goal"
                        value={formData.goal}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Amount in RWF"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold mb-4">Review Your Campaign</h2>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p><strong>Title:</strong> {formData.title}</p>
                      <p><strong>Category:</strong> {formData.category}</p>
                      <p><strong>Description:</strong> {formData.description}</p>
                      <p><strong>Goal:</strong> {formData.goal} RWF</p>
                      {formData.image && (
                        <Image
                          src={URL.createObjectURL(formData.image)}
                          alt="Campaign preview"
                          width={200}
                          height={200}
                          className="mt-2 rounded-lg object-cover"
                        />
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              <button
                onClick={prevStep}
                className={`px-4 py-2 rounded-lg ${
                  currentStep === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-500 text-white hover:bg-gray-600'
                }`}
                disabled={currentStep === 0}
              >
                Previous
              </button>
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Popup */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg"
          >
            <FaTrophy className="inline-block mr-2" />
            Achievement Unlocked: {achievements[achievements.length - 1]}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trust and Security Section */}
      <div className="mt-16 text-center pb-16">
        <FaShieldAlt className="text-4xl text-purple-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Secure & Trusted Platform</h3>
        <p className="text-gray-600 mb-4">
          All donations are protected, and campaigns are verified for transparency
        </p>
        <div className="flex justify-center space-x-4">
          {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-purple-600 hover:text-purple-700 text-2xl"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
          </div>
          
          <Footer/>
    </div>
  )
}

export default EnhancedStartCampaign

