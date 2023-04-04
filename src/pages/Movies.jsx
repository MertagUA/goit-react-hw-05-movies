import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MoviesForm } from 'components/MoviesForm/MoviesForm';
import { fetchSearchMovies } from 'services/API';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Failed from 'components/FailedRoute/FailedRoute';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState(STATUS.IDLE);
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  const onFormSubmit = e => {
    const form = e.target;
    e.preventDefault();
    setSearchParams({ query: form.elements.searchInput.value });
    form.reset();
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const searchMovies = async () => {
      try {
        setStatus(STATUS.PENDING);
        const result = await fetchSearchMovies(query);
        setSearchMovies(result);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setStatus(STATUS.REJECTED);
        console.log(error);
      }
    };
    searchMovies();
  }, [query]);

  return (
    <>
      <MoviesForm onFormSubmit={onFormSubmit} />
      <MoviesList movies={searchMovies} location={location} />
      {searchMovies.length === 0 && status === STATUS.RESOLVED && <Failed />}
      {status === STATUS.PENDING && <Loader />}
    </>
  );
};

export default Movies;
