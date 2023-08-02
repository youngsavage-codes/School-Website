import React from 'react'

const NewsLetter = () => {
  return (
<section className='bg-link-colol-4'>
               <div className='lg:flex items-center justify-between lg:w-[75%] mx-auto px-10 py-10 lg:py-16 '>
                   <h2 className='text-white mb-5 lg:mb-0 text-[30px] font-extrabold'>Join Our Newsletter</h2>  
                     <div className='lg:flex items-center gap-5 lg:w-[60%] '>
                         <input type='text' placeholder='Enter Your Email Here .....'  className='py-5 lg:w-[70%] w-[90%] px-5 bg-transparent text-white border-2 border-solid border-gray-100 outline-none rounded-sm lg:mb-0 mb-5'/>
                         <button className='py-5 px-5 lg:px-10 bg-white rounded-sm text-link-colol-4 font-bold'>Subscribe Now</button>
                     </div>
               </div>
</section>   
  )
}

export default NewsLetter