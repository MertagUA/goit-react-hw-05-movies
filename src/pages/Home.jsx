import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/API';

const Home = () => {
  const [todayMovies, setTodayMovies] = useState([]);

  useEffect(() => {
    const fetchTodayMovies = async () => {
      try {
        const result = await fetchMovies();
        setTodayMovies(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodayMovies();
  }, []);

  return <MoviesList movies={todayMovies} />;
};

export default Home;
