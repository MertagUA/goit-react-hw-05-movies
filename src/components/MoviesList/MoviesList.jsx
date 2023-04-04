import { MoviesItem } from 'components/MoviesList/MoviesItem/MoviesItem';
import { MoviesListStyled } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies, location }) => {
  return (
    <MoviesListStyled>
      {movies.map(({ id, title, poster_path }) => {
        const moviePoster = poster_path
          ? `https://image.tmdb.org/t/p/w300/${poster_path}`
          : 'https://cdn.pixabay.com/photo/2016/01/20/18/35/x-1152114_960_720.png';
        return (
          <MoviesItem
            key={id}
            title={title}
            id={id}
            poster={moviePoster}
            location={location}
          />
        );
      })}
    </MoviesListStyled>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};
