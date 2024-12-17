import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">About RwandaRize</h3>
          <p className="text-gray-400">Empowering Rwandan communities through innovative crowdfunding solutions.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Campaigns', 'Success Stories', 'How It Works', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-white transition duration-300">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: info@rwandarize.com</p>
          <p className="text-gray-400">Phone: +250 123 456 789</p>
          <p className="text-gray-400">Address: Kigali, Rwanda</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              { icon: <FaFacebook />, href: 'https://facebook.com' },
              { icon: <FaTwitter />, href: 'https://twitter.com' },
              { icon: <FaInstagram />, href: 'https://instagram.com' },
              { icon: <FaLinkedin />, href: 'https://linkedin.com' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} RwandaRize. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer

