import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import React from 'react'


const Footer = () => {
  return (
    <footer className="w-full py-8 border-t-2 border-primary/50 bg-neutral-500">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-primary font-extrabold text-4xl mb-4">HALLHUNT</h2>
          <ul className="text-white">
            <li className="mb-2">About Us</li>
            <li className="mb-2">Contact</li>
            <li className="mb-2">Join Our Team</li>
            <li className="mb-2">Blog</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-white font-bold text-lg mb-4">Services</h2>
          <ul className="text-white">
            <li className="mb-2">Wedding Hall</li>
            <li className="mb-2">Party Hall</li>
            <li className="mb-2">Function Hall</li>
            <li className="mb-2">Conference Hall</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-white font-bold text-lg mb-4">Help & FAQs</h2>
          <ul className="text-white">
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Resources</li>
            
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="text-white font-bold text-lg mb-4">Business</h2>
          <ul className="text-white">
            <li className="mb-2">List your venue</li>
            <li className="mb-2">List your service</li>
           
          </ul>
        </div>
       
        <div className="w-full md:w-1/4 flex justify-start md:justify-end items-center">
        <h2 className="text-white font-bold text-lg mb-4">Keep in touch with us</h2>
          <a href="#" target="_blank" className="h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" className="h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" className="h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" target="_blank" className="h-8 w-8 rounded-md text-white hover:bg-primary/50 hover:text-background flex justify-center items-center">
            <Youtube className="h-6 w-6" />
          </a>
        </div>
      </div>
          
      <p className="text-primary font-bold text-lg text-center">2024 © HallHunt Private Limited</p>
    </footer>
  )
}

export default Footer
