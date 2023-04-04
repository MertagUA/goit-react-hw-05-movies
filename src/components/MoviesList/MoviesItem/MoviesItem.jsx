import { Link } from 'react-router-dom';
import { MoviesItemTitle, MoviesItemStyled } from './MoviesItem.styled';
import PropTypes from 'prop-types';

export const MoviesItem = ({ title, id, poster, location }) => {
  return (
    <MoviesItemStyled>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img src={poster} alt={title} />
        <MoviesItemTitle>{title}</MoviesItemTitle>
      </Link>
    </MoviesItemStyled>
  );
};

MoviesItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  location: PropTypes.object,
};
