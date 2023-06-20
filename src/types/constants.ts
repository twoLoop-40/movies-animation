import { MovieRoute } from ".";

export const titles = [
  { titleName: "POPULAR", routeName: MovieRoute.popular },
  { titleName: "COMING SOON", routeName: MovieRoute.commingSoon },
  { titleName: "NOW PLAYING", routeName: MovieRoute.nowPlayng }
];

export const propsForBoard = ["title", "poster_path", "id"];
