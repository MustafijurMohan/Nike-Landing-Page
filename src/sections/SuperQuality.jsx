import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <>
        <section id='about-us' className='flex flex-1 justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
            <div className='flex flex-1 flex-col'>
                <h2 className='text-4xl capitalize font-palanquin font-bold lg:max-w-lg'>
                    We Provide You 
                    <span className='text-coral-red'> Super</span>
                    <span className='text-coral-red'> Quality</span> Shoe
                </h2>
                <p className='mt-4 info-text lg:max-w-lg'>
                Ensuring premium comfort and style, our meticulously crafted footwear
                is designed to elevate your experience, providing you with unmatched
                quality, innovation, and a touch of elegance.
                </p>
                <p className='mt-6 info-text lg:max-w-lg'>Our dedication to detail and excellence ensures your satisfaction</p>
                <div className='mt-11'>
                    <Button label='View Detils' />
                </div>
            </div>

            <div>
                <img src={shoe8} alt="product detail" width={570} height={522} className='object-contain' />
            </div>
        </section>
    </>
  )
}

export default SuperQuality