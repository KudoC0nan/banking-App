import React from 'react'
import { Ellipsis } from 'react-css-spinners'

const LoadingPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen h-full'>
        <Ellipsis color="#1570ef" size={80} />
    </div>
  )
}

export default LoadingPage