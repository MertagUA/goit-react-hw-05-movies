import { MovieAddictionalInfo } from 'components/MovieAddictionalInfo/MovieAddictionalInfo';
import {
  GenresText,
  MovieDescriptionThumb,
  MovieDescriptionWrapper,
  OverviewText,
  Title,
  UserScore,
} from './MovieDescription.styled';
import PropTypes from 'prop-types';

export const MovieDescription = ({ movieDescription }) => {
  const { title, poster_path, overview, vote_average, genres } =
    movieDescription;
  const filmGenres = genres.map(genre => genre.name).join(', ');
  const userScore = (vote_average * 10).toFixed();
  const moviePoster = poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : 'https://cdn.pixabay.com/photo/2016/01/20/18/35/x-1152114_960_720.png';
  return (
    <>
      <MovieDescriptionWrapper>
        <img src={moviePoster} alt={title} width="300px" height="450px" />
        <MovieDescriptionThumb>
          <Title>{title}</Title>
          <UserScore>User score: {userScore}%</UserScore>
          <h2>Overview:</h2>
          <OverviewText>{overview}</OverviewText>
          <h2>Genres:</h2>
          <GenresText>{filmGenres}</GenresText>
          <MovieAddictionalInfo />
        </MovieDescriptionThumb>
      </MovieDescriptionWrapper>
    </>
  );
};

MovieDescription.propTypes = {
  movieDescription: PropTypes.object,
};
