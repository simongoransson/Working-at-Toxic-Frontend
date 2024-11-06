import { createContext, useState, useEffect, useContext } from 'react';

const MovieContext = createContext();

/**
 * Movie Provider 
 * 
 * @param {*} children 
 * @returns 
 */
const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(
        JSON.parse(localStorage.getItem('selectedMovie') || null)
    );
 
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/discover/tv?sort_by=first_air_date.desc&page=10', {
                    headers: {
                       Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_ACCESS_TOKEN}`
                    }
                });

                 if(!response.ok) {
                     throw new Error('Failed to fetch popular movies.');
                 }
    
                const data = await response.json();

                setMovies(data.results);
            }
            catch(error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        } 

        fetchMovies();
    }, []);

    /**
     * Select Movie
     * 
     * @param {*} movie 
     */
    const selectMovie = movie => {
        setSelectedMovie(movie)
        localStorage.setItem('selectedMovie', JSON.stringify(movie));
    }

    return (
      <MovieContext.Provider value={{ movies, loading, error, selectMovie, selectedMovie }}>
        {children}
      </MovieContext.Provider>
    );
  };

  /**
   * Use Movies
   * 
   * @returns 
   */
  const useMovies = () => {
    return useContext(MovieContext);
}

export { MovieProvider, useMovies }
