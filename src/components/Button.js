import React from 'react'

const Button = ({data}) => {
  return (
    <div className='px-2 py-1 bg-gray-400 text-center rounded-md mr-3'>
        {data}
    </div>
  )
}

export default Button