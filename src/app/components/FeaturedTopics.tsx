'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

interface Topic {
  id: string
  title: string
  description: string
  image: string
  badge?: {
    text: string
    variant: 'urgent' | 'help' | 'learn'
  }
  cta?: {
    text: string
    link: string
  }
  featured?: boolean
}

const topics: Topic[] = [
  {
    id: '1',
    title: 'Help Rebuild Gisenyi After Floods',
    description: 'Recent floods have devastated communities in Gisenyi. Your support can help affected families rebuild their homes and lives.',
    image: '/floods.jpg',
    badge: {
      text: 'Urgent cause',
      variant: 'urgent'
    },
    cta: {
      text: 'Help now',
      link: '/causes/gisenyi-floods'
    },
    featured: true
  },
  {
    id: '2',
    title: 'Support Young Tech Innovators',
    description: 'Help aspiring developers in Kigali access coding education and equipment.',
    image: '/tech-education.jpg',
    badge: {
      text: 'Help now',
      variant: 'help'
    },
    cta: {
      text: 'Donate now',
      link: '/causes/tech-education'
    }
  },
  {
    id: '3',
    title: 'Emergency Medical Support',
    description: 'Provide essential medical supplies to rural communities.',
    image: '/medical-aid.jpg',
    badge: {
      text: 'Urgent cause',
      variant: 'urgent'
    },
    cta: {
      text: 'Donate now',
      link: '/causes/medical-aid'
    }
  },
  {
    id: '4',
    title: 'RwandaRize Impact Report',
    description: 'See how your donations have changed lives across Rwanda.',
    image: '/impact-report.jpg',
    badge: {
      text: 'Learn more',
      variant: 'learn'
    },
    cta: {
      text: 'Read more',
      link: '/impact'
    }
  }
]

const BadgeComponent: React.FC<{ variant: 'urgent' | 'help' | 'learn'; text: string }> = ({ variant, text }) => {
  const variantStyles = {
    urgent: 'bg-purple-600',
    help: 'bg-blue-600',
    learn: 'bg-green-600'
  }

  return (
    <span className={`${variantStyles[variant]} text-white text-sm font-medium px-3 py-1 rounded-full`}>
      {text}
    </span>
  )
}

const TopicCard: React.FC<{ topic: Topic; className?: string }> = ({ topic, className = '' }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`group relative overflow-hidden rounded-2xl ${className}`}
  >
    <div className="relative w-full h-full">
      <Image
        src={topic.image}
        alt={topic.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div>
          {topic.badge && (
            <BadgeComponent variant={topic.badge.variant} text={topic.badge.text} />
          )}
        </div>
        
        <div>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
            {topic.title}
          </h3>
          <p className="text-gray-200 text-sm md:text-base mb-4">
            {topic.description}
          </p>
          {topic.cta && (
            <Link
              href={topic.cta.link}
              className="inline-flex items-center text-white font-medium hover:underline"
            >
              {topic.cta.text}
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  </motion.div>
)

const FeaturedTopics: React.FC = () => {
  const featuredTopic = topics.find(topic => topic.featured)
  const regularTopics = topics.filter(topic => !topic.featured)

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured topics</h2>
        
        <div className="space-y-6">
          {/* Featured Topic */}
          {featuredTopic && (
            <TopicCard 
              topic={featuredTopic} 
              className="h-[400px] md:h-[500px]"
            />
          )}
          
          {/* Regular Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTopics.map(topic => (
              <TopicCard 
                key={topic.id} 
                topic={topic}
                className="h-[300px]"
              />
            ))}
          </div>
        </div>

        {/* View All Topics Link */}
        <div className="mt-8 text-center">
          <Link
            href="/topics"
            className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700"
          >
            View all topics
            <FaArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedTopics

