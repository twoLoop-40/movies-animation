import Root from "./root";
import { createBrowserRouter } from "react-router-dom";
import { MovieRoute } from "./types";
import MovieBoardTemplate from "./pages";
import MovieDetail from "./pages/movie-detail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: MovieRoute.popular,
        element: <MovieBoardTemplate />,
        children: [{ path: ":movieId", element: <MovieDetail /> }]
      },
      {
        path: MovieRoute.commingSoon,
        element: <MovieBoardTemplate />,
        children: [{ path: ":movieId", element: <MovieDetail /> }]
      },
      {
        path: MovieRoute.nowPlayng,
        element: <MovieBoardTemplate />,
        children: [{ path: ":movieId", element: <MovieDetail /> }]
      }
    ]
  }
]);
