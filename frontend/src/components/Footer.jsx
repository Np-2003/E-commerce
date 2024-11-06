import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-4 my-10 mt-10 text-sm'>
           <div>
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus quia itaque eius atque error tempore eaque alias laboriosam, doloremque dicta a voluptatem, recusandae vitae adipisci molestiae, ex dolorum ad.</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-222-333-4444</li>
                    <li>Contact@foreverforyou.com</li>
                </ul>
            </div>
        </div>
        <div className=''>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com -All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer