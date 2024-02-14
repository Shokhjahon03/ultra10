import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Saidbar from '../components/Saidbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudents } from '../App/student/studentSlice'
import { fetchTeachers } from '../App/teacher/teacherSlice'




const Home = () => {

  let dispatch = useDispatch()
  let {loading,students,error}=useSelector((state)=>state.student)
  let {loading2,teachers,error2}=useSelector((state)=>state.teacher)


  useEffect(()=>{
    dispatch(fetchStudents())
    dispatch(fetchTeachers())
  },[])
  return (
    <>
      <Navbar/>
      <Saidbar/>
      <div className='ml-[400px] mt-[20px]'>
        <div className='mm mb-[50px] relative'>
            <h1 className='bb  mb-[50px] w-full  bg-white'>
                All Students
            </h1>
            <div className=' w-full flex flex-col'>
            <div className='w-full flex justify-around items-center mb-[20px]'>
                        <p className='w-[150px] text-gray-400'>N</p>
                        <p className='w-[150px] text-gray-400'>Full Name</p>
                        <p className='w-[150px] text-gray-400'>Age</p>
                        <p className='w-[150px] text-gray-400'>Group</p>
                    </div>
                {
                  students.map((e,i)=>(
                    <div key={i} className=' cursor-pointer duration-300 w-full flex justify-around border rounded-md items-center mb-[50px] hover:bg-slate-200'>
                        <p className='w-[150px] underline'>{i+1}</p>
                        <p className='w-[150px]'>{e.firsname} {e.lastname}</p>
                        <p className='w-[150px]'>{e.age}</p>
                        <p className='w-[150px]'>{e.group}</p>
                    </div>
                  ))
                }
            </div>
        </div>
        <div className='mm'>
            <h1 className='bb  mb-[50px] w-full  bg-white'>
              All Teachers
            </h1>
            <div className=' w-full flex flex-col'>
            <div className='w-full flex justify-around items-center mb-[20px]'>
                        <p className='w-[150px] text-gray-400'>N</p>
                        <p className='w-[150px] text-gray-400'>Full Name</p>
                        <p className='w-[150px] text-gray-400'>Group</p>
                    </div>
                {
                  teachers.map((e,i)=>(
                    <div key={i} className=' cursor-pointer duration-300 w-full flex justify-around border rounded-md items-center mb-[50px] hover:bg-slate-200'>
                        <p className='w-[150px] underline'>{i+1}</p>
                        <p className='w-[150px]'>{e.firsname} {e.lastname}</p>
                        <p className='w-[150px]'>{e.group}</p>
                    </div>
                  ))
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
