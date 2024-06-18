import React from 'react'
import Movie from './components/Movie'

const App = () => {

  const movies = [
    { id:'m3048', title: '인사이드아웃2', year: '2024' },
    { id:'m6694', title: '범죄도시4', year: '2024' },
    { id:'m7890', title: '설계자', year: '2024' },
    { id:'m4560', title: '원더랜드', year: '2024' },
  ]

  const movieList = movies.map((movie) => {
    return (
      <Movie key={movie.id} title={movie.title} year={movie.year}/>
    )
  })
  /* return문 전에 이것저것 선언할수 있다 */

  return (
    <div>
      <h1>영화리스트 출력하기-컴포넌트 활용</h1>
      <div>{movieList}</div>
    </div>
  )
}

export default App