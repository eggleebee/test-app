import React from 'react'

const App = () => {

  const movies = [
    { id:'m3048', title: '인사이드아웃2', year: '2024' },
    { id:'m6694', title: '범죄도시4', year: '2024' },
    { id:'m7890', title: '설계자', year: '2024' },
    { id:'m4560', title: '원더랜드', year: '2024' },
  ]

  const movieList = movies.map((movie) => (
    <ul className='movie-list' key={movie.id}>
      <li className='movie-item'>{movie.title}</li>
      <li className='movie-item'>{movie.year}</li>
    </ul>
  ))

  return (
    <div>
      <h1>영화리스트 출력하기</h1>

      <h2>반복문 map함수활용 출력</h2>
      <div className='moview-wrap'>{movieList}</div>

      <h2>반복문을 사용하지않고 출력</h2>
      <div className='movie-wrap'>
        <ul>
          <li>{movies[0].title}</li>
          <li>{movies[0].year}</li>
        </ul>
        <ul>
          <li>{movies[1].title}</li>
          <li>{movies[1].year}</li>
        </ul>
        <ul>
          <li>{movies[2].title}</li>
          <li>{movies[2].year}</li>
        </ul>
        <ul>
          <li>{movies[3].title}</li>
          <li>{movies[3].year}</li>
        </ul>
      </div>

    </div>
  )

}

export default App