import { useQuery } from '@tanstack/react-query'
import api from '../utils/Api'


const fetchMovieCredit =(queryData) => {
    const id = queryData.queryKey[1];
    return api.get(`/movie/${id}/credits`);
  };


export const useMovieCreditQuery= (id) => {
  return useQuery({
    queryKey:['movie-credit', id],
    queryFn: fetchMovieCredit,
    select: (result)=> result.data,
  })
}
