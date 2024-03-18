import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <>
        <footer className='max-container'>
            <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
                <div className='flex flex-col items-start'>
                    <a href="/"><img src={footerLogo} alt="footer" width={150} height={46} /></a>
                    <p className='text-white-400 text-base mt-6 leading-7 font-montserrat sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find
                        Your perfect Size In Store. Get Rewards
                    </p>
                    <div className='flex items-center gap-5 mt-8'>
                      {socialMedia.map((icon) => (
                        <div key={icon} className='flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer'>
                          <img src={icon.src} alt={icon.alt} width={24} height={24} />
                        </div>
                      ))}
                    </div>
                </div>

                <div className='flex flex-1 justify-between flex-wrap lg:gap-10 gap-20'>
                  {footerLinks.map((section) => (
                    <div key={section}>
                      <h4 className='text-white text-2xl font-medium font-montserrat leading-normal mb-6'>{section.title}</h4>
                      <ul>
                        {section.links.map((link) => (
                          <li key={link.name} className='text-white leading-normal text-base font-montserrat mt-3 hover:text-slate-gray'><a href="">{link.name}</a></li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
            </div>

            <div className='text-white mt-24 flex justify-between max-sm:flex-col max-sm:items-center'>
              <div className='flex flex-1 gap-2 justify-start items-center font-montserrat cursor-pointer'>
                <img src={copyrightSign} alt="copyrightSign" width={20} height={20} className='rounded-full m-0' />
                <p>Copyright. All rights reserved.</p>
              </div>
              <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
            </div>
        </footer>
    </>
  )
}

export default Footer