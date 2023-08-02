import React from 'react'
import { motion } from 'framer-motion'


// COMPONENTS
import Classes1 from '../components/Classes1'
import NewsLetter from '../components/News-Letter'

const Classes = () => {
  return (
               <div>
                              <section className='page_header zig_zag top-24 lg:top-40'>
                                             <div className='bg-bg-color py-20'>
                                                            <motion.h1 initial={{opacity: 0}} animate={{opacity: 2}} transition={{delay: 1.5, duration: 5}} className='text-[40px] font-extrabold mb-5 text-white text-center'>Our Popular Classes</motion.h1>
                                                            <motion.p initial={{opacity: 0}} animate={{opacity: 2}} transition={{delay: 1.5, duration: 5}} className='text-[18px] pb-16 font-semibold text-white text-center'>Home - Classes</motion.p>
                                             </div>
                              </section>
                              <Classes1 />
                              <NewsLetter />
               </div>
  )
}

export default Classes