'use client'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import SuccessStoriesCarousel from './components/successStoriesCarousel'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'
import DiscoverFundraisers from './components/DiscoverFundraisers'
import FeaturedTopics from './components/FeaturedTopics'
import HowWeWork from './components/HowWeWork'


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DiscoverFundraisers />
      <FeaturedTopics />
      <HowWeWork/>
      <SuccessStoriesCarousel />
      <CallToAction />
      <Footer />
      <FloatingActionButton />
    </div>
  )
}

