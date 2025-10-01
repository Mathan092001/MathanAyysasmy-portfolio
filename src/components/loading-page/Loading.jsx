import React from 'react'
import './loading.css'

function Loading() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen bg-black">
        <div className="flex gap-1 text-blue-600" role="status">
            <hr className='loading-line-1 w-[0.2vw] h-[1.5vh] border-2 border-gray-700'/>
            <hr className='loading-line-2 w-[0.2vw] h-[1.5vh] border-2 border-gray-700'/>
            <hr className='loading-line-3 w-[0.2vw] h-[1.5vh] border-2 border-gray-700'/>
        </div>
      <p className="loading text-blue-600 font-normal text-xl ">Please wait...</p>
    </div>
  )
}

export default Loading
