import { Link } from 'react-router-dom';
import { MoviesItemTitle, MoviesItemStyled } from './MoviesItem.styled';

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
