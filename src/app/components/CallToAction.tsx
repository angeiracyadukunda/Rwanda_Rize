import React from 'react'
import Link from 'next/link'

const CallToAction: React.FC = () => (
  <section className="py-16 bg-purple-600 text-white">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
      <p className="text-xl mb-8">Start your campaign today and be part of Rwanda&apos;s transformation.</p>
      <Link href="/start-campaign" className="px-8 py-4 bg-white text-purple-600 rounded-full text-xl font-semibold hover:bg-gray-100 transition duration-300">
        Launch Your Campaign
      </Link>
    </div>
  </section>
)

export default CallToAction

