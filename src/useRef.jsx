import {useRef, useEffect } from 'react'


const App = () => {
  const input = useRef();

  //padding-left => paddingLeft
  //margin-left => marginLeft
  //padding
  
  useEffect(() => {
    input.current.focus()
    // input.current.style.padding = "10px"
  })
  
  
  return (
    <div>
      {/* username */}
      <p className='py-2 text-slate-00'>Your Name</p>
      <input type="text" placeholder='Enter Name' 
      ref={input}
      className='border-[1.5px] border-slate-600 outline-none py-1 px-3 text-sm font-light' />
    </div>
  )
}

export default App




