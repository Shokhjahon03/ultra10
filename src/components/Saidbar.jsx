import React from 'react'
import { NavLink } from 'react-router-dom'

const Saidbar = () => {
  return (
    <div className=' z-10 w-[300px] h-dvh fixed top-[60px] left-0 bg-white border-r'>
      <div className='w-full flex p-5 gap-4'>
        <div className='flex flex-col items-center'>
            <span className='bg-[#c1c4bd] w-[1px] h-[20px] '></span>
            <span className='bg-[#c1c4bd] w-[10px] h-[10px] rounded-full'></span>
            <span className='bg-[#c1c4bd] w-[1px] h-[20px] '></span>
            <span className='bg-[#c1c4bd] w-[10px] h-[10px] rounded-full'></span>
            <span className='bg-[#c1c4bd] w-[1px] h-[20px] '></span>
            <span className='bg-[#c1c4bd] w-[10px] h-[10px] rounded-full'></span>
            <span className='bg-[#c1c4bd] w-[1px] h-[20px] '></span>
            
        </div>
        <div className='w-full pt-[10px] flex flex-col gap-2'>
            <NavLink to='/'  className='hh w-full'>Go Home <i class='bx bxs-down-arrow'></i></NavLink>
            <NavLink to='/stud' className='hh w-full'>Go Student <i class='bx bxs-down-arrow'></i></NavLink>
            <NavLink to='/tech' className='hh w-full'>Go Teacher <i class='bx bxs-down-arrow'></i></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Saidbar
