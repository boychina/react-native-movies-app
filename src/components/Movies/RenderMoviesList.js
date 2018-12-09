import { renderMovieItem } from './RenderMovieItem';

export const renderMoviesList = (movies) => {
  return movies.map((movie) => renderMovieItem(movie));
}
