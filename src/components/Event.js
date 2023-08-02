import React from 'react'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';


// DATA
import { event } from '../data/event';

const Event = () => {
  return (
        <section className='py-32 px-5 lg:px-10'>
               <h1 className='text-[40px] font-extrabold mb-5 text-link-colol-4 text-center'>Don't Miss Our Event</h1>
               <p className='text-center font-semibold text-black w-[85%] lg:w-[40%] text-[16px] mx-auto'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>

               <div className='lg:flex justify-between lg:w-[75%] mx-auto gap-10 mt-16'>
                      <Zoom left>
                              {event && event.map((events) => (
                                      <div className='border-2 border-gray-100 border-solid mb-10 lg:mb-0 hover:shadow-lg'>
                                                <img src={events.img} alt='' className='w-full'/>
                                                <div className='text-center px-3 h-0'>
                                                      <p className={events.id === 1 ? `w-20 p-2 bg-link-colol-2 text-[20px] text-white font-bold relative top-[-80px]` : events.id === 2 ? `w-20 p-2 bg-link-colol-1 text-white font-bold text-[20px] relative top-[-80px]` : `w-20 p-2 bg-link-colol-3 text-[20px] text-white font-bold relative top-[-80px]`}>
                                                          {events.date}<span className='block text-[15px]'>{events.month}</span>
                                                      </p>
                                                </div>
                                                
                                                <div className='px-5'>
                                                        <h2 className={events.id === 1 ? `text-link-colol-2 text-[24px] font-extrabold my-3` : events.id === 2 ? `text-link-colol-1 text-[24px] font-extrabold my-3` : `text-link-colol-3 text-[24px] font-extrabold my-3`}>{events.class}</h2>
                                                        <p className='font-semibold text-text-color'>{events.time}</p>
                                                        <p className='font-semibold text-text-color'>{events.address}</p>
                                                        <p className='pt-3 font-semibold text-text-color'>{events.Desc}</p>
                                                        <div className='py-10'>
                                                            <Link className={events.id === 1 ? `bg-link-colol-2 px-7 py-4 text-white font-semibold` : events.id === 2 ? `bg-link-colol-1 px-7 py-4 text-white font-semibold` : `bg-link-colol-3 px-7 py-4 text-white font-semibold`}>Join Now</Link>
                                                        </div>
                                                </div>
                                      </div>
                              ))}
                        </Zoom>
               </div>
       </section>    
  )
}

export default Event