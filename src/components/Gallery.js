import React from 'react'
import Tab from '../components/Tab'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
               <section className='py-32'>
                    <h1 className='text-[40px] font-extrabold mb-5 text-link-colol-4 text-center'>Our School Gallery</h1>
                    <p className='text-center font-semibold text-black w-[85%] lg:w-[40%] text-[16px] mx-auto mb-20'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                    <Tab />
                    <div className='flex items-center justify-center mt-20'>
                      <Link className='bg-link-colol-4 px-8 py-4 text-white font-bold mx-auto'>View More Gallery</Link>
                      </div>
               </section>
  )
}

export default Gallery