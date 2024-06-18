import React from 'react'

const Movie = ({ title, year }) => {
  return (
    <ul>
        <li>영화제목 {title}</li>
        <li>개봉년도 {year}</li>
    </ul>
  )
}

export default Movie