import React from 'react'
import { Link } from 'react-router-dom'
import { Zoom } from 'react-reveal'

// IMAGE
import abt from '../image/about-3.png'

const About2 = () => {
  return (
    <div>
               <section className='about_us zig_zag'>
                              <div className='lg:flex lg:items-center lg:justify-around py-20 lg:py-[40px] px-5 lg:px-20 over'>
                                             <Zoom left><img src={abt} alt='' className='lg:w-[40%] mb-20'/></Zoom>
                                             <Zoom right><div className=' lg:w-[35%]'>
                                                            <h1 className='text-[40px] font-extrabold mb-5 text-white'>About Jethro Model</h1>
                                                            <p className='text-[16px] pb-16 font-semibold text-white'>Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>
                                                            <div className='flex items-center gap-5'>
                                                                                          <Link className='bg-link-colol-4 px-8 py-4 text-white font-bold'>Read More</Link>
                                                                                          <Link className='bg-link-colol-2 px-8 py-4 text-white font-bold'>Buy Now</Link>
                                                            </div>
                                             </div></Zoom>
                              </div>
               </section>
    </div>
  )
}

export default About2