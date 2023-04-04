import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { fetchMovieDescription } from 'services/API';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MovieDetailsButton } from 'components/MovieDetailsButton/MovieDetailsButton';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const MovieDetails = () => {
  const [movieDescription, setMovieDescription] = useState(
    JSON.parse(localStorage.getItem('movieDescription')) ?? []
  );
  const [status, setStatus] = useState(STATUS.IDLE);

  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  useEffect(() => {
    const movieDescription = async () => {
      try {
        const result = await fetchMovieDescription(movieId);
        setMovieDescription(result);
        localStorage.setItem('movieDescription', JSON.stringify(result));
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setStatus(STATUS.REJECTED);
        console.log(error);
      }
    };
    movieDescription();
  }, [movieId]);

  if (status === STATUS.PENDING) {
    return <Loader />;
  }

  if (status === STATUS.RESOLVED) {
    return (
      <>
        <MovieDetailsButton backLinkHref={backLinkHref} />
        <MovieDescription movieDescription={movieDescription} />
        <Outlet />
      </>
    );
  }
};

export default MovieDetails;
