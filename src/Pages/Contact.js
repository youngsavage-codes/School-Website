import React from 'react'
import { motion } from 'framer-motion'
import { Zoom } from 'react-reveal'


// ZOOM
import { BsEnvelopePaper, BsPhone } from "react-icons/bs";
import { FiMapPin } from 'react-icons/fi'



const Contact = () => {
  return (
               <div>
               <section className='page_header zig_zag top-20 lg:top-40'>
                              <div className='bg-bg-color py-20'>
                                             <motion.h1 initial={{opacity: 0}} animate={{opacity: 2}} transition={{delay: 1.5, duration: 5}} className='text-[40px] font-extrabold mb-5 text-white text-center'>Our Contact Info</motion.h1>
                                             <motion.p initial={{opacity: 0}} animate={{opacity: 2}} transition={{delay: 1.5, duration: 5}} className='text-[18px] pb-16 font-semibold text-white text-center'>Home - Contact us</motion.p>
                              </div>
               </section>
               
               <div className="container mx-auto flex items-center flex-wrap justify-between py-16  mt-48 w-[75%]">
                   {/* First Section: Contact Information */}
                   <Zoom left>
                            <div className="w-full md:w-4/12 p-4">
                                        <div className='flex items-start gap-7 py-5'>
                                                        <span className='flex gap-3 items-center text-3xl font-semibold mt-4 text-link-colol-2'><FiMapPin className='' /></span>
                                                        <div>
                                                                        <h2 className="text-link-colol-2 text-2xl font-bold">Our Location</h2>
                                                                        <p className='lg:text-[18px] text-text-color font-light'>218 Sahera Tropical Center Room#7</p>
                                                                        <p className='lg:text-[18px] text-text-color font-light'>New Newyork Road 1205</p>   
                                                        </div>   
                                        </div>

                                        <div className='flex items-start gap-7 py-5 border-2 border-gray-200 border-t-2 border-b-2 border-l-0 border-r-0'>
                                                        <span className='flex gap-3 items-center text-3xl font-semibold mt-4 text-link-colol-1'><BsPhone /></span>
                                                        <div>
                                                                        <h2 className="text-link-colol-1 text-2xl font-bold">Phone Number</h2>
                                                                        <p className='lg:text-[18px] text-text-color font-light'>01923-970212, 01776-502993</p>
                                                                        <p className='lg:text-[18px] text-text-color font-light'>+2154897369</p>
                                                        </div>
                                        </div>

                                        <div className='flex items-start gap-7 py-5'>
                                                        <span className='flex gap-3 items-center text-3xl font-semibold mt-4 text-link-colol-3'><BsEnvelopePaper /></span>
                                                        <div>
                                                                        <h2 className="text-link-colol-3 text-2xl font-bold">Email Address</h2>
                                                                        <p className='lg:text-[18px] text-text-color font-light'>hello@labartisan</p>
                                                                        <p className='lg:text-[18px] text-text-color font-light'>hello@codexcoder.com</p>
                                                        </div>
                                        </div>
                            </div>
                   </Zoom>
   
                   {/* Second Section */}
                   <Zoom right>
                            <div className="w-[100%] lg:w-[60%] p-4">
                                    <form className="mt-4">
                                                <div className='flex gap-4 w-full'>

                                                            <div className="mb-4 w-full">
                                                                <input
                                                                    className="w-full bg-white  border-b border-gray-200  bg-transparent text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                                    type="text"
                                                                    id="name"
                                                                    placeholder="Your Name"
                                                                />
                                                            </div>

                                                            <div className="mb-4 w-full">
                                                                <input
                                                                    className="w-full bg-white  border-b border-gray-200  bg-transparent  text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                                    type="email"
                                                                    id="email"
                                                                    placeholder="Your Email"
                                                                />
                                                            </div>
                                                </div>

                                                <div className="mb-4">
                                                    <textarea
                                                        className="w-full bg-white  border-b border-gray-200   bg-transparent  text-base outline-none text-gray-700 pb-20 pt-16 px-3 leading-8 transition-colors duration-200 ease-in-out resize-none"
                                                        id="message"
                                                        placeholder="Your Message"
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="text-white bg-link-colol-4 border-b border-gray-400 outline-none  py-2 px-6 focus:outline-none  rounded text-lg"
                                                >
                                                    Send Message</button>

                                    </form>
                            </div>
                   </Zoom>
               </div>
           </div>
  )
}

export default Contact