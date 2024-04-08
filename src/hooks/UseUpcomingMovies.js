import { useQuery } from '@tanstack/react-query'
import api from '../utils/Api'

const fetchUpcomingMovies = () => {
    return api.get('./movie/upcoming')
}

export const useUpcomingMoviesQuery= () => {
  return useQuery({
    queryKey:['movie-upcoming'],
    queryFn: fetchUpcomingMovies,
    select: (result)=> { return result.data }
  })
}