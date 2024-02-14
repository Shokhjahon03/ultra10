import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    let navg=useNavigate()
    let [bar,setBar]=useState(false)
    let func=()=>{
        if (bar!==false) {
            setBar(false)
        }else{
            setBar(true)
        }
    }

  return (
    <>
     <div className='w-full h-[60px] bg-[#d7d8a7]  flex justify-center items-center border-b-2 border-b-[#b3b5b5]'>
        <div className="container">
            <div className=' w-full flex justify-between items-center'>
                <div className='flex gap-3'>
                    <button onClick={()=>func()} className='border w-[30px] h-[30px] rounded-md text-white'>
                    <i className='bx bx-menu'></i>
                    </button>
                    <div className='flex gap-1'>
                        <img className='w-[30px] h-[30px] rounded-full' src="https://toppng.com/uploads/preview/black-and-white-stockportable-network-account-icon-11553436383dwuayhjyvo.png" alt="alt" />
                        <h1 className='text-white'>Dashboard</h1>
                    </div>
                </div>
                <div className='w-[500px] flex items-center justify-between'>
                    <div className='flex gap-4'>
                        <p className='  text-[#050604]'>Go Pages <i class='bx bxs-hand-right'></i></p>
                        <NavLink to='/' className=' text-white hover:text-[#072020]'>Home</NavLink>
                        <NavLink  to='/stud' className=' text-white hover:text-[#072020]'>Students</NavLink>
                        <NavLink to='/tech' className=' text-white hover:text-[#072020]'>Teachers</NavLink>
                    </div>
                    <div className='flex gap-6'>
                        <button className='flex items-center p-1 h-[30px] text-white rounded  justify-center border hover:bg-slate-600'>
                            <p className='text-[25px]'>+</p> <i className='bx bxs-notification'></i>
                        </button>
                        <button className='flex items-center p-1 h-[30px] text-white rounded  justify-center border hover:bg-slate-600'>
                           <i className='bx bx-terminal'></i>
                        </button>
                        <button onClick={()=>navg('/yet')} className='flex items-center p-1 h-[30px] text-white rounded  justify-center border hover:bg-slate-600'>
                            <p className='text-[25px]'>U</p> <i className='bx bxs-user-circle'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={bar?'Xbar':'Ybar'}>
        <div className=' bg-white w-[400px] h-dvh  p-[20px] border-r'>
                <div className='flex justify-between items-center border-b border-black p-2 w-full bg-white mb-[15px] '>
                    <p className='flex items-center gap-2'>  <img className='w-[20px] h-[20px] rounded-full' src="https://toppng.com/uploads/preview/black-and-white-stockportable-network-account-icon-11553436383dwuayhjyvo.png" alt="alt" />Memu</p>
                    <button onClick={()=>func()} className='border w-[30px] h-[30px]  rounded hover:bg-slate-200' type="button">x</button>
                </div>

                <NavLink onClick={()=>func()} to='/' className='flex justify-between items-center border p-2 w-full bg-white mb-[15px] rounded hover:bg-slate-200'>
                    <NavLink>Home</NavLink>
                    <NavLink><i className='bx bx-home-alt-2'></i></NavLink>
                </NavLink>
                <NavLink onClick={()=>func()} to='/stud' className='flex justify-between items-center border p-2 w-full bg-white mb-[15px] rounded hover:bg-slate-200'>
                <NavLink>Students</NavLink>
                <NavLink><i className='bx bx-user'></i></NavLink>
                </NavLink>
                <NavLink onClick={()=>func()} to='/tech' className='flex justify-between items-center border p-2 w-full bg-white mb-[15px] rounded hover:bg-slate-200'>
                <NavLink>Teachers</NavLink>
                <NavLink><i className='bx bxs-user-account'></i></NavLink>
                </NavLink>
                <NavLink onClick={()=>func()} to='/yet' className='flex justify-between items-center border p-2 w-full bg-white mb-[15px] rounded hover:bg-slate-200'>
                <NavLink>..........</NavLink>
                <NavLink>....</NavLink>
                </NavLink>
        </div>
        </div> 
    </>
  )
}

export default Navbar
