import React from 'react'
import { useNavigate } from 'react-router-dom'

const Yet = () => {
    let navg=useNavigate()
  return (
    <div>
      <h1>
      this page is not yet complete
      <button className='ml-[20px] border bg-[#4e8c10] ' onClick={()=>navg('/')} type="button">Go Home</button>
      </h1>
    </div>
  )
}

export default Yet
