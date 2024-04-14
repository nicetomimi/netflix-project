import { useQuery } from '@tanstack/react-query'
import api from '../utils/Api'


const fetchMovieReview = (queryData) => {
    const id = queryData.queryKey[1];
    console.log("Movie ID:", id);
    return api.get(`/movie/${id}/reviews`);
  };


export const useMovieReviewQuery= (id) => {
  return useQuery({
    queryKey:['movie-review', id],
    queryFn: fetchMovieReview,
    select: (result)=> result.data.results
    ,
  })
}
