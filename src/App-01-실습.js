import React, { useState } from 'react'

const App = () => {
  const [num , setNum] = useState(0);

  const [isChecked ,setIsChecked] = useState(false)

  console.log("체크여부",isChecked)

  return (
    <div>
      <input
      type='number'
      value={num}
      onChange={ (e) => setNum(e.target.value) }
      />
      
      <hr />

      <input 
      type='checkbox'
      value={isChecked}
      onChange={ (e) => setIsChecked(e.target.checked) }
      />

      {
        isChecked ? <span>체크됨</span> : <span>체크안됨</span>
      }

    </div>
  )
}

export default App