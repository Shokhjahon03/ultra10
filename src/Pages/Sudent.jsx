import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Saidbar from '../components/Saidbar'
import { deleteStudent, fetchStudents,addStudent,editStudent} from '../App/student/studentSlice'
import { useDispatch, useSelector } from 'react-redux'

const Sudent = () => {
  let [shov,setshov]=useState(false)
  let [editval,setEdit]=useState(true)
  let[ids,setIdes]=useState('')
  let [val,setVal]=useState({
    firsname:'',
    lastname:'',
    age:'',
    group:''
  })
  let dispatch=useDispatch()
  let {loading,students,error}=useSelector((state)=>state.student)

  let daletid=(id)=>{
    if (confirm('siz bu studentni ochirmoqchimisiz')) {
      dispatch(deleteStudent(id))
      setshov(!shov)
    }
  }
  useEffect(()=>{
    dispatch(fetchStudents())
  },[shov])

  let unsubmited=(event)=>{
    event.preventDefault()
  }

  let Added=()=>{
    if (val.firsname!=='' && val.lastname!=='' && val.group!=='' && val.age!=='') {
      dispatch(addStudent(val))
      setshov(!shov)
      setVal(
        {
          firsname:'',
          lastname:'',
          age:'',
          group:''
        }
      ) 
    }
  }
  let editded=(sID)=>{
    const student = students.find((st) => st.id === sID);
    setVal(student)
    setEdit(false)
    setIdes(sID)
  }
  let saveded=()=>{
    dispatch(editStudent(val))
    setshov(!shov)
  }
  return (
    <>
     <Navbar/>
     <Saidbar/>
     <div className='ml-[400px] mt-[20px]'>
        <div className='w-[700px] flex flex-col gap-5'>
        <div  className='w-full flex justify-between'>
                <p className='w-[80px]'>N:</p>
                  <p className='w-[80px]'>Full Name:</p>
                  <p className='w-[80px]'>Group:</p>
                  <div className='flex gap-2 w-[80px]'>
                    <div><i className='bx bxs-edit text-black'></i></div>
                    <span>/</span>
                    <div><i className='bx bx-trash-alt text-black' ></i></div>
                  </div>
              </div>
          {
            students.map((e,i)=>(
              <div key={i} className='w-full flex justify-between'>
                <p className='w-[80px] underline'>{i+1}</p>
                  <p className='w-[80px]'>{e.firsname} {e.lastname}</p>
                  <p className='w-[80px]'>{e.group}</p>
                  <div className='flex gap-2 w-[80px]'>
                    <button onClick={()=>editded(e.id)}><i className='bx bxs-edit text-green-600'></i></button>
                    <button onClick={()=>daletid(e.id)}><i className='bx bx-trash-alt text-red-600' ></i></button>
                  </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='fixed top-[60px] right-0  w-[400px] h-dvh border pl-[20px] pt-[20px]'>
            <form className='w-full flex flex-col pr-[10px]' onSubmit={unsubmited}>
                <input className='border pl-[10px] mb-[20px]' placeholder='# Firstname' onChange={(e)=>setVal({firsname:e.target.value,lastname:val.lastname,age:val.age,group:val.group})} value={val.firsname} type="text" />
                <input className='border pl-[10px] mb-[20px]' placeholder='# Lastname' onChange={(e)=>setVal({firsname:val.firsname,lastname:e.target.value,age:val.age,group:val.group})} value={val.lastname} type="text" />
                <input className='border pl-[10px] mb-[20px]' placeholder='# Age' onChange={(e)=>setVal({firsname:val.firsname,lastname:val.lastname,age:e.target.value,group:val.group})} value={val.age} type="number" />
                <select onChange={(e)=>setVal({firsname:val.firsname,lastname:val.lastname,age:val.age,group:e.target.value})} value={val.group} className='border pl-[10px] mb-[20px]'>
                  <option className='text-[#a4a48a]' value=""># group</option>
                  <option value='N32'>Group N32</option>
                  <option value='N322'>Group N322</option>
                  <option value='N23'>Group N23</option>
                </select>
                <button onClick={()=>{
                  if (editval) {
                    Added()
                  }else{
                    saveded()
                  }
                }} className='w-full text-zinc-500 bg-[#d7d8a7] h-[40px] rounded-lg border hover:text-white '>{editval? 'Add New Student':'Save information'}</button>
                </form>
            </div>
    </>
  )
}

export default Sudent
