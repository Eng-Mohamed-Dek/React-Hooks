import React, { useEffect, useState } from 'react'

const App = () => {
  // React hooks 

  // usestate 
  const [number, setNumber] = useState(0)
  const [data, setData] = useState([])

  //mount - la cusbooneysiyo
  console.log("data is here", data)

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json))
    }
  , [])

  // data - dependency

  return (
    <div>
      <button className='mt-2 bg-blue-500 text-white  p-1 px-4 cursor-pointer rounded outline-none'
        onClick={() => setNumber(number+1)}>Add Number</button>
      <br />
      {/* username */}
      <p className='text-4xl mt-2 ml-12 font-semibold'>{number}</p>
    </div>
  )
}

export default App




