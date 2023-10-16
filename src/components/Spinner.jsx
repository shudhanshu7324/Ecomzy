import React from 'react'

const Spinner = () => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center h-[80vh]'>
      <div className='spinner'></div>
      <p className='font-bold'>Loading...</p>
    </div>
  )
}

export default Spinner
