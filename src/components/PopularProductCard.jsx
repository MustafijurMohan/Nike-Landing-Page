import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <>
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
            <img src={imgURL} alt={name} className='w-[280px] h-[280px]' />
            <div className='mt-8 flex justify-start gap-2.5'>
                <img src={star} alt="star" width={24} height={24} />
                <p className='text-xl font-montserrat leading-normal text-slate-gray'>(4.5)</p>
            </div>
            <h3 className='text-2xl mt-2 font-palanquin leading-normal font-semibold' >{name}</h3>
            <p className='mt-2 font-montserrat leading-normal font-semibold text-xl text-coral-red'>{price}</p>
        </div>
    </>
  )
}

export default PopularProductCard