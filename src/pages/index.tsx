import { useMemo } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/loading";
import MovieBoard from "../components/movie-board";
import useMovieDataWithRoute, {
  usePreQueries
} from "../hooks/movieDataByRoute";
import { CardProps, IMovie } from "../types";
import { propsForBoard } from "../types/constants";
import { getObjectByProps } from "../utils";

export default function MovieBoardTemplate() {
  const { isLoading, movieData } = useMovieDataWithRoute<IMovie[]>();

  const movieDataForBoard = useMemo(
    () =>
      !isLoading && movieData
        ? movieData.map((movie) =>
            getObjectByProps<CardProps>(propsForBoard, movie)
          )
        : [],
    [isLoading, movieData]
  );
  // movie Id 만 미리 쿼리해 두는 코드
  usePreQueries(movieDataForBoard.map((movie) => movie.id.toString()));

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <MovieBoard movieData={movieDataForBoard} />
          <Outlet />
        </>
      )}
    </div>
  );
}
