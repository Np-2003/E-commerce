import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
           <Title text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio consectetur quae fuga unde vel provident repellendus, iusto adipisci facilis, sapiente eos suscipit a corrupti quam rem, voluptates possimus et nulla!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aperiam debitis et, ipsam eligendi optio facere necessitatibus quo aliquid ab ipsa ullam excepturi iste quos autem corrupti quibusdam, perspiciatis minima.</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nostrum provident facilis optio nulla laborum repudiandae voluptates vero quibusdam doloribus eveniet expedita asperiores, fuga corrupti explicabo vel possimus cupiditate minima.</p>
            </div>
        </div>
        <div className='text-4xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>
        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Quality Assurance</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel sequi ex cumque voluptates amet quasi deleniti necessitatibus explicabo saepe. Dignissimos enim, harum quasi aperiam numquam nemo sit vel velit?</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Convenience:</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel sequi ex cumque voluptates amet quasi deleniti necessitatibus explicabo saepe. Dignissimos enim, harum quasi aperiam numquam nemo sit vel velit?</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                <b>Exceptional Customer Service</b>
                <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel sequi ex cumque voluptates amet quasi deleniti necessitatibus explicabo saepe. Dignissimos enim, harum quasi aperiam numquam nemo sit vel velit?</p>
            </div>
        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default About