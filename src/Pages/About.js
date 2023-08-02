import React from 'react'
import {motion} from 'framer-motion'
import { Zoom } from 'react-reveal'
import { Link } from 'react-router-dom'


// IMAGES
import boys from '../image/feature.jpg'
import teacher1 from '../image/teachers/teacher_01.jpg'
import teacher2 from '../image/teachers/teacher_02.jpg'
import teacher3 from '../image/teachers/teacher_03.jpg'
import teacher4 from '../image/teachers/teacher_04.jpg'


// COMPONENTS
import Facility2 from '../components/Facility2'
import About2 from '../components/About2'
import NewsLetter from '../components/News-Letter';


// ICON
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const About = () => {
  return (
    <div>
               <section className='page_header zig_zag top-24 lg:top-40'>
                              <div className='bg-bg-color py-20'>
                                             <motion.h1 initial={{opacity: 0}} animate={{opacity: 2}} transition={{delay: 1.5, duration: 5}} className='text-[40px] font-extrabold mb-5 text-white text-center'>About Jethro Model</motion.h1>
                                             <motion.p initial={{opacity: 0}} animate={{opacity: 2}} transition={{delay: 1.5, duration: 5}} className='text-[18px] pb-16 font-semibold text-white text-center'>Home - About us</motion.p>
                              </div>
               </section>

               <Facility2/>
               <About2 />

               <section className='py-20'>
                                             <h1 className='text-[40px] font-[800] mb-5 text-link-colol-4 text-center'>Why Choose KidsAcademy</h1>
                                             <p className='text-center font-semibold text-black w-[85%] lg:w-[40%] text-[16px] mx-auto mb-20'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                                             <div className='lg:flex items-center justify-between w-[75%] mx-auto'>
                                                      <Zoom left>
                                                            <div>
                                                                           <div className='mb-8 flex items-center flex-wrap-reverse'>
                                                                                          <div className='mr-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-2'>Expert Teachers</h2>
                                                                                                         <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/128/1048/1048949.png'  alt='' className='mx-auto mb-3'/>
                                                                           </div>

                                                                           <div className='mb-8 flex items-center flex-wrap-reverse'>
                                                                                          <div className='mr-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-3'>Multimedia Class</h2>
                                                                                                         <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/128/3518/3518521.png'  alt='' className='mx-auto mb-3'/>
                                                                           </div>

                                                                           <div className='mb-8 flex items-center flex-wrap-reverse'>
                                                                                          <div className='mr-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-5'>Music And Art Class</h2>
                                                                                                         <p className=' text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/128/3991/3991233.png'  alt='' className='mx-auto mb-3'/>
                                                                           </div>
                                                            </div>
                                                      </Zoom>

                                                      <img src={boys} alt='' className='py-10'/>

                                                      <Zoom right>
                                                            <div>
                                                                           <div className='mb-8 flex items-center flex-wrap'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/128/1048/1048949.png'  alt='' className='mx-auto mb-3'/>
                                                                                          <div className='ml-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-1'>Expert Teachers</h2>
                                                                                                         <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                           </div>

                                                                           <div className='mb-8 flex items-center flex-wrap'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/128/3518/3518521.png'  alt='' className='mx-auto mb-3'/>
                                                                                          <div className='ml-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-link-colol-4'>Multimedia Class</h2>
                                                                                                         <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                           </div>

                                                                           <div className='mb-8 flex items-center flex-wrap'>
                                                                                          <img src='https://cdn-icons-png.flaticon.com/128/3991/3991233.png'  alt='' className='mx-auto mb-3'/>
                                                                                          <div className='ml-5'>
                                                                                                         <h2 className='text-center text-3xl font-extrabold mb-3 text-code_war-color'>Music And Art Class</h2>
                                                                                                         <p className='text-center font-bold text-text-color'>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                                                                          </div>
                                                                           </div>  
                                                            </div>
                                                      </Zoom>
                                             </div>
               </section>

               <section className='about_teachers zig_zag'>
                              <div className='bg-bg-color-1 py-32'>
                                             <h1 className='text-[40px] font-[800] mb-5 text-white text-center'>Meet Our Teachers</h1>
                                             <p className='text-center font-semibold text-white w-[85%] lg:w-[40%] text-[16px] mx-auto mb-20'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>         
                              
                                             <div className='w-full lg:w-[75%] p-5 mx-auto lg:flex lg:items-center lg:justify-center lg:flex-wrap gap-5 text-white'>
                                                
                                                <Zoom left>
                                                <div className='lg:w-[45%] bg-link-colol-4 lg:my-0 my-5 '>
                                                      <div className='flex '>
                                                          <img src={teacher1} alt='' className='lg:w-[50%] w-[50%]'/>
                                                          <div className='p-5'>
                                                                <h1 className='lg:text-[25px] text-[20px] font-bold'>Broklyn Doel <span className='text-[15px]'>Sains Teacher</span></h1>
                                                                <div className='flex gap-4 py-3'>
                                                                        <Link><BsFacebook /></Link>
                                                                        <Link><BsInstagram /></Link>
                                                                        <Link><BsTwitter /></Link>
                                                                        <Link><BsLinkedin /></Link>
                                                                </div>
                                                                <p className='py-3 lg:text-[18px] text-[10px] font-light'>Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                                                                <Link>View Profile</Link>
                                                            </div>
                                                      </div>
                                                </div>
                                                </Zoom>

                                                <Zoom right>
                                                <div className='lg:w-[45%] bg-link-colol-1 lg:my-0 my-5'>
                                                      <div className='flex '>
                                                          <img src={teacher2} alt='' className='lg:w-[50%] w-[50%]'/>
                                                            <div className='p-5'>
                                                                <h1 className='lg:text-[25px] text-[20px] font-bold'>Alex Jhonson <span className='text-[15px]'>Art Teacher</span></h1>
                                                                <div className='flex gap-4 py-3'>
                                                                        <Link><BsFacebook /></Link>
                                                                        <Link><BsInstagram /></Link>
                                                                        <Link><BsTwitter /></Link>
                                                                        <Link><BsLinkedin /></Link>
                                                                </div>
                                                                <p className='py-3 lg:text-[18px] text-[10px] font-light'>Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                                                                <Link>View Profile</Link>
                                                            </div>
                                                      </div>
                                                </div>
                                                </Zoom>

                                                <Zoom left>
                                                <div className='lg:w-[45%] bg-link-colol-3 lg:my-0 my-5'>
                                                      <div className='flex '>
                                                            <img src={teacher3} alt='' className='lg:w-[50%] w-[50%]'/>
                                                            <div className='p-5'>
                                                                <h1 className='lg:text-[25px] text-[20px] font-bold'>Robot Jhonson <span className='text-[15px]'>Math Teacher</span></h1>
                                                                <div className='flex gap-4 py-3'>
                                                                        <Link><BsFacebook /></Link>
                                                                        <Link><BsInstagram /></Link>
                                                                        <Link><BsTwitter /></Link>
                                                                        <Link><BsLinkedin /></Link>
                                                                </div>
                                                                <p className='py-3 lg:text-[18px] text-[10px] font-light'>Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                                                                <Link>View Profile</Link>
                                                            </div>
                                                      </div>
                                                </div>
                                                </Zoom>

                                                <Zoom right>
                                                <div className='lg:w-[45%] bg-link-colol-5 lg:my-0 my-5'>
                                                  <div className='flex '>
                                                      <img src={teacher4} alt='' className='lg:w-[50%] w-[50%]'/>
                                                      <div className='p-5'>
                                                          <h1 className='lg:text-[25px] text-[20px] font-bold'>Janaton Doe <span className='text-[15px]'>English Teacher</span></h1>
                                                                  <div className='flex gap-4 py-3'>
                                                                        <Link><BsFacebook /></Link>
                                                                        <Link><BsInstagram /></Link>
                                                                        <Link><BsTwitter /></Link>
                                                                        <Link><BsLinkedin /></Link>
                                                                </div>
                                                          <p className='py-3 lg:text-[18px] text-[10px] font-light'>Distinctively initiate and sustainable synergy vaan tactical opportunities. awesome theme ollaboratively.</p>
                                                          <Link>View Profile</Link>
                                                      </div>
                                                      </div>
                                                </div>
                                                </Zoom>
                                            </div>
                              
                              </div>
               </section>
               <NewsLetter />
    </div>
  )
}

export default About