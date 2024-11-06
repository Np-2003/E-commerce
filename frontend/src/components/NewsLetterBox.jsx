import React from 'react'

const NewsLetterBox = () => {

    const onsubmit=(event)=>{
         event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 20% Off</p>
        <p className='text-gray-400 mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita fugit animi quis esse 
            minima officiis praesentium nesciunt debitis consectetur, fugiat libero porro est similique vel </p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3' onsubmit={onsubmit}>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required/>
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox