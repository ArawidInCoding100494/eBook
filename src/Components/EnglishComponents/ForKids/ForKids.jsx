import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const ForKids = () => {
    const [openFruits, setOpenFruits] = useState(false)
  return (
    <div>
        <div className='h-screen flex items-center justify-center'>
            <div className='p-7 flex flex-col justify-center items-center bg-gray-200 rounded-2xl shadow'>
                <h1 className='text-3xl py-4 tracking-[4px]'>Wellcome to English Fun! 🎉</h1>
                <h5 className='text-[14px]'>learn new words, have fun, and become an English star! ⭐</h5>

                <NavLink to="/learnFruits" className='p-2 px-3 rounded-2xl text-white bg-pink-600 mt-7 capitalize tracking-[2px] cursor-pointer border-2 hover:bg-white hover:border-pink-600 hover:text-pink-600 duration-300 '
                
                >start! 
                    <span className='ml-3'>➡</span>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default ForKids