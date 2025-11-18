import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const mainLinks = ['Work','Contact','About']
  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/bamboodigital.mate/' },
    { name: 'Facebook', url: 'https://facebook.com/your_page' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/company/bamboo-digital-mate/ '},
    { name: 'YouTube', url: 'https://youtube.com/your_channel' },
  ];
  
  

  return (
    <footer className="bg-[#000000] text-white pt-4 md:pt-40">
      <div className="max-w-[2000px] mx-auto px-4 md:px-8 border-[#FF5E1A] border-t-2 py-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-9 mb-10 md:mb-60 ">
          {/* Logo */}
          <div>
            <Link to="/" className="text-2xl font-light">
              <img
                src="/whiteLogo.svg" 
                alt="Logo"
                className="h-10 object-contain w-44 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="flex flex-col items-start text-3xl text-[#FF5E1A] font-grand tracking-tight md:text-6xl font-[350]">
            {mainLinks.map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="space-y-0 font-grand text-[#FF5E1A]">
          <h3 className="text-xl font-extralight">Social</h3>
          <div className="flex flex-col space-y-0">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-2 px-3 -mx-3 group transition-colors duration-300 hover:bg-black"
              >
                <span className="text-lg group-hover:text-white transition-colors duration-300">
                  {social.name}
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
        </div>

        {/* Call to Action */}
        <div className="mb-8 ">
          <p className="text-xl mb-4">Interested in working with us?</p>
          <Link 
            to="/contact" 
            className="relative font-grand text-6xl md:text-[12rem] text-[#FF5E1A] font-[500] border-black ease-out duration-700 group"
          >
            Let's Chat
            <span 
              className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF5E1A] transition-all duration-700 group-hover:w-full"
            ></span>
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-3 border-t border-[#FF5E1A]">
          <div>
            <img
              src="/whiteLogo.svg"
              alt="Logo"
              className="h-10 object-contain w-44 transition-opacity duration-300"
            />
          </div>
          
          <span className="text-sm">©2024</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

