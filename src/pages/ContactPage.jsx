import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/bamboodigital.mate/' },
    { name: 'Facebook', url: 'https://facebook.com' },
    // { name: 'Youtube', url: 'https://www.linkedin.com/company/bamboo-digital-mate/ '},
    { name: 'Linkedin', url: 'https://www.linkedin.com/company/bamboo-digital-mate/ '},

  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post('https://mail.bamboodigital.co.in/bamboo/send-email', {
        name: formData.name,
        email: formData.email,
        message: formData.message
      });
      if (response.status === 200) {
        setSuccessMessage('Email sent successfully. Thank you for contacting us!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSuccessMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section className="min-h-screen bg-white">
      <motion.h1
        variants={itemVariants}
        className="text-[6rem] md:text-[9rem] lg:text-[13rem] font-[500] border-b-2 px-2 pt-6 pb-8 md:pb-10 lg:pb-40"
      >
        Contact
      </motion.h1>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid lg:grid-cols-2 sm:grid-cols-1 gap-5 lg:gap-5"
      >
            {/* Left Column - Contact Information */}
            <motion.div
              variants={itemVariants}
              className="md:p-6 p-6 lg:py-10 space-y-14"
            >
              {/* Social Links */}
              <div className="flex flex-col lg:flex-row justify-between border-b-2 pb-10 w-full lg:w-[25rem]">
                <h3 className="text-md">Social</h3>
                <div className="space-y-1">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-8 -mx-3 rounded-lg group transition-colors duration-300 hover:bg-black"
                    >
                      <span className="text-md group-hover:text-white transition-colors duration-300">
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col lg:flex-row justify-between border-b-2 pb-10 w-full lg:w-[25rem]">
                <h3 className="text-md">Address</h3>
                <div>
                  <p>Office no. 108, </p>
                  <p> 1st Floor, Wing-C,</p>
                  <p>Trade World Premises</p> 
                  <p>Cooperative Society Ltd,</p>
                  <p> Kamla Mills Compound</p>
                  <p>Kamla City, Senapati Bapat Marg,</p>
                  <p> Lower Parel, Mumbai - 400013</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col lg:flex-row justify-between border-b-2 pb-10 w-full lg:w-[25rem]">
                <h3 className="text-md">Say hi</h3>
                <a
                  href="mailto:info@bamboodigital.in"
                  className="text-lg hover:opacity-70 transition-opacity"
                >
                 info@bamboodigital.in
                </a>
                
              </div>
              <div className="flex flex-col lg:flex-row justify-between border-b-2 pb-5 w-full lg:w-[25rem]">
              <h3 className="text-md">Let&apos;s talk business!</h3>
                <a
                  href="https://wa.me/919619280763"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg flex items-center gap-2 hover:opacity-70 transition-opacity group relative"
                >
                  <FaWhatsapp className="text-green-500" />
                  +91 96192 80763
                  <span className="absolute -top-6 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Click me
                  </span>
                </a> 
              </div>
              <div className="flex flex-col lg:flex-row justify-between border-b-2 pb-5 w-full lg:w-[25rem]">
              <h3 className="text-md">Want to work with us?</h3>
                <a
                  href="https://wa.me/919167158202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg flex items-center gap-2 hover:opacity-70 transition-opacity group relative"
                >
                  <FaWhatsapp className="text-green-500" />
                  +91 91 671 582 02
                  <span className="absolute -top-6 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Click me
                  </span>
                </a> 
              </div>
            </motion.div>
            {/* Right Column - Contact Form or Success Message */}
            <motion.div
              variants={itemVariants}
              className="p-4 sm:p-6 lg:py-10"
            >
              {successMessage ? (
                <div className="bg-black text-white p-8 md:py-10 lg:py-16">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-16">
                    Let&apos;s collaborate and make wonderful stuff together!
                  </h2>
                  <div className="bg-white text-black p-6 text-center text-xl">
                    {successMessage}
                  </div>
                </div>
              ) : (
                <div className="bg-black text-white p-8 md:py-10 lg:py-16">
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-16">
                      Let&apos;s collaborate and make wonderful stuff together!
                    </h2>
                    <div className="space-y-8">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Your message"
                          rows={4}
                          className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors resize-none"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="inline-block text-lg border-b border-white pb-1 hover:opacity-70 transition-opacity"
                    >
                      Submit your message
                    </button>
                  </form>
                </div>
              )}
            </motion.div>

      </motion.div>
    </section>
  );
};

export default ContactPage;