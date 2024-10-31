import React from 'react'

const Comment = ({data}) => {
    const {name, text, replies} = data
  return (
    <div className='flex mt-4 shadow-sm bg-slate-200 rounded-md my-2'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg" alt="user-icon" className='w-12' />
        <div className=' px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment