import { useLocation, useParams } from "react-router-dom";
import { MovieRoute } from "../types";
import { getComingSoon, getMovie, getNowPlaying, getPopular } from "../api";
import { useQueries, useQuery } from "@tanstack/react-query";
import { getLastSegment, removeSegmentFromPath } from "../utils";

function getMovieFunction(routeName: string) {
  return routeName === MovieRoute.popular
    ? getPopular
    : routeName === MovieRoute.nowPlayng
    ? getNowPlaying
    : routeName === MovieRoute.commingSoon
    ? getComingSoon
    : async () =>
        new Error("There is no getMovieFunction for the given route name!");
}

export default function useMovieDataWithRoute<T>(movieId?: string) {
  const { pathname } = useLocation();
  const params = useParams();
  const removedPathName = removeSegmentFromPath(pathname, params.movieId);
  const routeName = getLastSegment(removedPathName);
  const fetcher = movieId
    ? () => getMovie(movieId)
    : getMovieFunction(routeName);
  const { data: movieData, isLoading, error } = useQuery<T>(
    [movieId ? movieId.toString() : removedPathName],
    fetcher
  );

  return { movieData, isLoading, error, routeName };
}

export function usePreQueries(keys: string[]) {
  return useQueries({
    queries: keys.map((key: string) => {
      const query = { queryKey: [key], queryFn: () => getMovie(key) };
      return query;
    })
  });
}
