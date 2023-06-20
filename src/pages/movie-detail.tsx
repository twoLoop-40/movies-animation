import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import MovieModal from "../components/movie-modal";
import useMovieDataWithRoute from "../hooks/movieDataByRoute";
import { IMovieDetail, MovieDetailProps, propsForDetail } from "../types";
import { getObjectByProps } from "../utils";

export default function MovieDetail() {
  const { movieId } = useParams();
  const { movieData, isLoading } = useMovieDataWithRoute<IMovieDetail>(movieId);

  const movieDetail = movieData
    ? getObjectByProps<MovieDetailProps>(propsForDetail, movieData)
    : null;

  return (
    <div>
      {!isLoading && movieDetail ? (
        <MovieModal movieDetail={movieDetail} />
      ) : (
        <Loading />
      )}
    </div>
  );
}
