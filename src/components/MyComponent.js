import React from 'react'

const MyComponent = ({title, list}) => {
  
  console.log("제목 : " , title)
  console.log("목록[배열] : " , list)

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {
          list.map( ( ele , i ) => (
            <li key={i} >{i} {ele}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default MyComponent