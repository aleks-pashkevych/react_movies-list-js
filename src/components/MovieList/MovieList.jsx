import './MovieList.scss';
// import movies from '../../api/movies.json';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies }) => {
  <div className="movies">
    <h1>MovieList</h1>
    {movies.map(movie => (
      <MovieCard key={movie.imdbId} movie={movie} />
    ))}
  </div>;
};
