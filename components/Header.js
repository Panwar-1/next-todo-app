import React from 'react'

const Header = () => {
  return (
    <div className='stricky top-0 w-full left-0 flex items-center justify-between p-4 border-b border-solid border-white bg-inherit'>
        <h1 className=' text-2xl sm:text-4xl font-Poppins select-none'>TODO List</h1>
        <i className="fa-thin fa-user text-xl sm:text-3xl cursor-pointer duration-300 hover:opacity-40"></i>
    </div>
  )
}

export default Header