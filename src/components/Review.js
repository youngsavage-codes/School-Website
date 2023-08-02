import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Zoom } from 'react-reveal'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// DATA
import { reviews } from '../data/review'


const Review = () => {
  return (
               <section className='testimonial'>
                              <div className='py-32'>
                                             <h1 className='text-[40px] font-extrabold mb-5 text-link-colol-4 text-center'>What Parents Say</h1>
                                             <p className='text-center font-semibold text-black w-[85%] lg:w-[40%] text-[16px] mx-auto'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                                             <Carousel>
                                                    {reviews && reviews.map((review) => (
                                                                  <div key={review.id} className='w-[85%] lg:w-[40%] mx-auto'>
                                                                                <Zoom><div className='w-[100px] h-[100px] mx-auto rounded-full mt-5 border-link-colol-2 border-[7px] border-solid  flex items-center justify-center'>
                                                                                                <img src={review.img} alt='' className=' rounded-full' />
                                                                                </div></Zoom>
                                                                                <Zoom><h2 className='text-[20px] text-link-colol-1 mt-5 mb-3'>{review.name}</h2></Zoom>
                                                                                <Zoom><h4>{review.job}</h4></Zoom>
                                                                                <Zoom> <p className='mt-5 font-semibold text-text-color'>{review.describtion}</p></Zoom>
                                                                  </div>
                                                    ))}
                                              </Carousel>
                              </div>
          </section>
  )
}

export default Review