import { renderMovieItem } from './RenderMovieItem';

export const renderMoviesList = (movies: any) => {
  return movies.map((movie: any) => renderMovieItem(movie));
}
