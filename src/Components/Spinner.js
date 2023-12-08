import React from 'react'

function Spinner() {
  return (
    <div className='flex flex-col items-center space-y-2'> 
        <div className="spinner"></div>
        <h2 className='text-bgDark text-lg font-semibold'>Loading..</h2>
    </div>
  )
}

export default Spinner