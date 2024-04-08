import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import RatedMoviesSlide from './components/TopRatedMovies/RatedMoviesSlide'
import UpcomingMovieSlide from './components/UpcomingMoviesSlide/UpcomingMoviesSlide'

const HomePage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
      <RatedMoviesSlide/>
      <UpcomingMovieSlide/>
    </div>
  )
}

export default HomePage
