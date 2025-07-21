import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Left section */}
        <div>
            <img className='mb-5 w-40' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-800 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa veritatis quos aspernatur doloremque tempora quibusdam ipsam enim alias corrupti! A dolorum est aliquam error dolorem maxime qui iste quidem incidunt?</p>    
        </div>

        {/*centre section */}
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-800'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* right section */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN Touch</p>
            <ul className='flex flex-col gap-2 text-gray-800'>
                <li>+91 9826595925</li>
                <li>customerteam@prescripto.com</li>
            </ul>
        </div>
      </div>
      <div>
        {/* Copyright section */}
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ Prescripto - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
