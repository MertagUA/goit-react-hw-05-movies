import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/API';
import { CastList } from './CastList/CastList';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const movieCast = async () => {
      try {
        const result = await fetchMovieCast(movieId);
        setCast(result);
      } catch (error) {
        console.log(error);
      }
    };
    movieCast();
  }, [movieId]);
  return <CastList cast={cast} />;
};

export default Cast;
