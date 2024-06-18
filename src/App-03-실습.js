import React, { useState } from 'react'

const App = () => {
  const age = 23;

  const [condition, setCondition] = useState(false)
  const [name, setName] = useState("")

  console.log('상태 초기값', condition)
  console.log('상태 초기값', name)

  //버튼을 클릭하면 함수실행
  //false 이면 true
  //true 이면 flase 
  //함수생성
  const toggleCondition = () => {
    console.log("toggleCondition 함수실행됬다~~~")
    setCondition(!condition)
    console.log(condition)
  }

  //false 이면 true / true 이면 flase 함수생성
  const toggleName = () => {
    console.log("toggleName 함수실행됬다~~~")
    setName(!name)
    console.log(name)
  }

  //changeName 함수생성하고 삼항연산자로 true일때 false일때 이름변경
  const changeName = () => name ? "홍길동" : "손님" 
  console.log("함수확인", changeName )

  //changeName2 변수에 삼항연산자를 대입함
  const changeName2 = name ? "홍길동" : "이순신" 
  console.log("변수확인", changeName2 )
 
  return (
    <div>
      <h1>조건문 : 삼항연산자</h1>
      {
        age > 18
          ? "18세 이상입니다. 입장하세요"
          : "18세 이하입니다. 집에가세요"
      }
      <hr />
      {
        1 + 1 === 3
          ? (<div> 1 + 1은 3이다 </div>)
          : (<div> 1 + 1은 3이 아니다 </div>)
      }

      <hr />
      <button onClick={toggleCondition}>버튼1번</button>
      {
        condition
          ? (<p>열림</p>)
          : (<p>닫힘</p>)
      }

      <hr />
      <button onClick={toggleName}>버튼2번</button>
      <p>함수이기때문에 함수이름(소괄호) {changeName()} </p>
      <p>변수이기때문에 변수이름 {changeName2} </p>
    </div>
  )
}

export default App