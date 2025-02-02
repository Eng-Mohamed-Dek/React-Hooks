import React, { useState } from 'react'

const App = () => {
  // React hooks 

  // usestate 
  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [show, setShow] = useState(false)

  const getUSer = () => {
    if (!user) {
      setShow(true)
    } else {
      setShow(false)
    }

    setName(user)
  }


  return (
    <div>
      <input type="text" placeholder='Enter Your Name' className='mt-4 border-2 p-1 px-4'
        onChange={(event) => setUser(event.target.value)} />
      {show ? <p className='text-[12px] mt-1 text-red-500'>Please Enter Your Name</p> : ''}
      <button
        className='mt-2 bg-blue-500 text-white  p-1 px-4 cursor-pointer rounded'
        onClick={() => getUSer()}>Add User</button>
      <br />
      {/* username */}
      <p className='text-2xl mt-2'>{name}</p>
    </div>
  )
}

export default App


