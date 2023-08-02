import React from 'react'
import { motion } from 'framer-motion'

// COMPONENTS
import Tab2 from '../components/Tab2'
import NewsLetter from '../components/News-Letter'

const Gallery = () => {
  return (
    <div>
               <section className='page_header zig_zag top-24 lg:top-40'>
                              <div className='bg-bg-color py-20'>
                                             <motion.h1 initial={{opacity: 0}} animate={{opacity: 2}} transition={{delay: 1.5, duration: 5}} className='text-[40px] font-extrabold mb-5 text-white text-center'>Our School Gallery</motion.h1>
                                             <motion.p initial={{opacity: 0}} animate={{opacity: 2}} transition={{delay: 1.5, duration: 5}} className='text-[18px] pb-16 font-semibold text-white text-center'>Home - Gallery</motion.p>
                              </div>
               </section>

               <Tab2 />
               <NewsLetter />
    </div>
  )
}

export default Gallery