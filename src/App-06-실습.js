import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'

const App = () => {
  /* 상태변경 - 영화제목, 개봉년도 */
  const [ movieTitle , setMovieTitle ] = useState('')
  const [ movieYear , setMovieYear ] = useState('')

  /* 상태변경 - 영화 데이터 초기값 지정, 영화등록 */
  const [movies , setMovies] = useState([
    {id : "m345", title : "인사이드아웃2" , year : "2024"},
    {id : "m579", title : "범죄도시4" , year : "2024"},
    {id : "m842", title : "설계자", year : "2024"}
  ])

  const movieList = movies.map((movie) => {
    return (
      <Movie key={movie.title} title={movie.title} year={movie.year} />
    )
  })

  console.log(movieList)

  useEffect(() => {console.log('렌더링~~')})

  const addMovie = (e) => {
    e.preventDefault() //기본동작실행방지
    console.log('입력받은 영화제목-', movieTitle)
    console.log('입력받은 개봉년도-', movieYear)
    console.log('setMovies함수 확인-',setMovies)

    setMovies([
      ...movies ,
      {title : movieTitle , year : movieYear}
    ])//setMovies 끝

    setMovieTitle('')
    setMovieYear('')
    
  } //addMoive끝

  return (
    <div>
      <h2>영화등록하기</h2>
      
      <form onSubmit={addMovie} action='http://www.naver.com'>
        <input 
          type='text' 
          placeholder='영화제목을 입력하세요' 
          value={movieTitle}
          onChange={(e) => {setMovieTitle(e.target.value)}}
        />

        <input 
          type='text'
          placeholder='개봉년도를 입력하세요'
          value={movieYear}
          onChange={(e) => {setMovieYear(e.target.value)}}
        />
        <button type='submit'>영화추가</button>
      </form>

      <h2>영화리스트 출력</h2>
      {movieList}
    </div>
  )
}

export default App