import { useQuery } from '@tanstack/react-query'
import api from '../utils/Api'

const fetchPopularMovies = () => {
    return api.get('./movie/popular?language=ko-KR')
}

export const usePopularMoviesQuery= () => {
  return useQuery({
    queryKey:['movie-popular'],
    queryFn: fetchPopularMovies,
    select: (result)=> { return result.data }
  })
}
