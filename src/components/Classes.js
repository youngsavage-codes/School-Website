import React from 'react'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';

// IMAGE
import class1 from '../image/class/class_01.jpg'
import class2 from '../image/class/class_02.jpg'
import class3 from '../image/class/class_03.jpg'

const Classes = () => {
  return (
               <section className='py-32 px-5'>
                    <h1 className='text-[40px] font-extrabold mb-5 text-link-colol-4 text-center'>Our Popular Classes</h1>
                    <p className='text-center font-semibold text-black w-[85%] lg:w-[40%] text-[16px] mx-auto'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>

                    <div className='lg:w-[75%] lg:flex items-center justify-between mx-auto gap-10 mt-16'>
                    <Zoom left>
                        <div className='shadow-lg mb-10 lg:mb-0'>
                        <img src={class1} alt='' className='w-full'/>
                                <div className='flex items-center justify-stretch text-white gap-1'>
                                      <div className='bg-link-colol-4 w-[33%] text-center py-2 font-semibold'>
                                          <p>Class Size</p>
                                          <p>30-40</p>
                                      </div>
                                      <div className='bg-link-colol-1 w-[33%] text-center py-2 font-semibold'>
                                        <p>Years Old</p>
                                        <p>5 - 6</p>
                                      </div>
                                      <div className='bg-link-colol-3 w-[33%] text-center py-2 font-semibold'>
                                        <p>Tuition Fee</p>
                                        <p>$1500</p>
                                      </div>
                                  </div>
                          <div className='px-5'>
                                  <h2 className='text-link-colol-2 text-[24px] font-extrabold mt-5'>Imagination Classes</h2>
                                  <p className='mt-2'><span className='text-link-colol-1 font-semibold'>Class Time</span>: 08:00 am - 10:00 am</p>
                                  <p className='py-3 font-semibold text-text-color'>Draticaly novate fuly rarched an plications awesome theme education</p>
                          </div>
                            <div className='bg-link-colol-2 py-2 px-6 text-white font-semibold'>218 New Newyork Road, USA- 1205</div>
                        </div>
                        </Zoom>

                        <Zoom>

                        <div className='shadow-lg mb-10 lg:mb-0'>
                              <img src={class2} alt='' className='w-full'/>
                                <div className='flex items-center justify-stretch text-white gap-1'>
                                      <div className='bg-link-colol-4 w-[33%] text-center py-2 font-semibold'>
                                          <p>Class Size</p>
                                          <p>30-40</p>
                                      </div>
                                      <div className='bg-link-colol-1 w-[33%] text-center py-2 font-semibold'>
                                        <p>Years Old</p>
                                        <p>5 - 6</p>
                                      </div>
                                      <div className='bg-link-colol-3 w-[33%] text-center py-2 font-semibold'>
                                        <p>Tuition Fee</p>
                                        <p>$1500</p>
                                      </div>
                                  </div>
                              <div className='px-5'>
                                  <h2 className='text-link-colol-1 text-[24px] font-extrabold mt-5'>Drawing Classes</h2>
                                  <p className='mt-2'><span className='text-link-colol-1 font-semibold'>Class Time</span>: 08:00 am - 10:00 am</p>
                                  <p className='py-3 font-semibold text-text-color'>Draticaly novate fuly rarched an plications awesome theme education</p>
                              </div>
                            <div className='bg-link-colol-1 py-2 px-6 text-white font-semibold'>218 New Newyork Road, USA- 1205</div>
                        </div>

                        </Zoom>

                        <Zoom right>

                        <div className='shadow-lg mb-10 lg:mb-0'>
                        <img src={class3} alt='' className='w-full'/>
                                <div className='flex items-center justify-stretch text-white gap-1'>
                                      <div className='bg-link-colol-4 w-[33%] text-center py-2 font-semibold'>
                                          <p>Class Size</p>
                                          <p>30-40</p>
                                      </div>
                                      <div className='bg-link-colol-1 w-[33%] text-center py-2 font-semibold'>
                                        <p>Years Old</p>
                                        <p>5 - 6</p>
                                      </div>
                                      <div className='bg-link-colol-3 w-[33%] text-center py-2 font-semibold'>
                                        <p>Tuition Fee</p>
                                        <p>$1500</p>
                                      </div>
                                  </div>
                          <div className='px-5'>
                                  <h2 className='text-link-colol-3 text-[24px] font-extrabold mt-5'>Learning Classes</h2>
                                  <p className='mt-2'><span className='text-link-colol-1 font-semibold'>Class Time</span>: 08:00 am - 10:00 am</p>
                                  <p className='py-3 font-semibold text-text-color'>Draticaly novate fuly rarched an plications awesome theme education</p>
                          </div>
                            <div className='bg-link-colol-3 py-2 px-6 text-white font-semibold'>218 New Newyork Road, USA- 1205</div>
                        </div>
                        </Zoom>
                    </div>
                    

                    <div className='flex items-center justify-center mt-20'>
                      <Link to='/classes' className='bg-link-colol-4 px-8 py-4 text-white font-bold mx-auto'>See More Classes</Link>
                      </div>
               </section>
  )
}

export default Classes