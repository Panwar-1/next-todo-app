import React from 'react'
import { useAuth } from '../context/AuthContext'

const Header = () => {
  const {logout} = useAuth();

  return (
    <div className='stricky top-0 w-full left-0 flex items-center justify-between p-4 border-b border-solid border-white bg-inherit'>
        <h1 className=' text-2xl sm:text-4xl font-Poppins select-none'>TODO List</h1>
        <img onClick={logout} src="/images/user-logo.svg" className='text-xl sm:text-3xl cursor-pointer duration-300 hover:opacity-40'/>
    </div>
  )
}

export default Header