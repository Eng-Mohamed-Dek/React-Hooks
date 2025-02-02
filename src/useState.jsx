import React, { useState } from 'react'

const useState = () => {
  // React hooks 

  // usestate 
  const [number, setNumber] = useState(0)
  const [name, setName] = useState('')

  return (
    <div>
      <button 
      className='bg-blue-500 text-white  p-2 px-4 cursor-pointer rounded'
      onClick={() => setNumber(number+1)}>Add User</button>
      <p className='text-3xl mt-2 ml-12'>
        {number}
      </p>

      <input type="text" placeholder='Enter Your Name' className='mt-4 border-2 p-1 px-4' 
      onChange={(event) => setName(event.target.value)}/>
      <p className='text-2xl mt-2'>{name}</p>
    </div>
  )
}

export default useState


