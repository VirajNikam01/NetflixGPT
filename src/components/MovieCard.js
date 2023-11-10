import React from 'react'

const MovieCard = ({poster}) => {

  return (
    <div className='w-28 sm:w-44 transition-all duration-300 hover:scale-105 '>
      <img src={'https://image.tmdb.org/t/p/w500/'+poster} alt={"poster"} />
    </div>
  )
}

export default MovieCard
