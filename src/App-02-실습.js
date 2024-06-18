import React from 'react'
import { dummy } from './constants/data'
import MyComponent from './components/MyComponent'

console.log(dummy)

const App = () => {

  return (
    <div>
      <h1>더미데이터 출력하기</h1>

      {
        dummy.map((item) => (
          <MyComponent key={item.idx} title={item.title} list={item.list} />
        ))
      }
    </div>
  )
}

export default App