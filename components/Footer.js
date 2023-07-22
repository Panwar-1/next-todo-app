import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-5 py-3">
            <img  src="/images/linkdin.svg" className='w-8 h-8 rounded-lg cursor-pointer duration-300 hover:opacity-40'/>
            <img  src="/images/github.svg" className='w-8 h-8 rounded-lg cursor-pointer duration-300 hover:opacity-40'/>
            <img  src="/images/facebook.svg" className='w-8 h-8 rounded-lg cursor-pointer duration-300 hover:opacity-40'/>
    </div>  )
}

export default Footer;