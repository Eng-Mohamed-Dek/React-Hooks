import React, { useState } from 'react'

const App = () => {
  // React hooks 

  // usestate 
  const [name, setName] = useState('Khalid')
  const [show, setShow] = useState(true)

  return (
    <div>
      <input type="text" placeholder='Enter Your Name' className='mt-4 border-2 p-1 px-4' 
      onChange={(event) => setName(event.target.value)}/>
      <br />
      <button 
      className='mt-2 bg-blue-500 text-white  p-2 px-4 cursor-pointer rounded'
      onClick={() => {}}>Add Numbers</button>
      <br />
      {/* username */}
      <p className='text-2xl mt-2'>{name}</p>
    </div>
  )
}

export default App


