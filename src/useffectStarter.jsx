import React, { useEffect, useState } from 'react'

const App = () => {
  // React hooks 

  // usestate 
  const [number, setNumber] = useState(0)


  return (
    <div>
      <button className='mt-2 bg-blue-500 text-white  p-1 px-4 cursor-pointer rounded'
        onClick={() => setNumber(number+1)}>Add Number</button>
      <br />
      {/* username */}
      <p className='text-2xl mt-2 ml-12 font-bold'>{number}</p>
    </div>
  )
}

export default App




