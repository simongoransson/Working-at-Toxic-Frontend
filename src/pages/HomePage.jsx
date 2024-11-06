import React, { useState } from 'react';
import { useMovies } from '../context/MovieProvider';
import MovieList from '../components/MovieList';
import TopFilter from '../components/TopFilter';

const HomePage = () => {
    const { movies, loading, error } = useMovies();
    const [searchTerm, setSearchTerm] = useState("");
    const [language, setLanguage] = useState("");

    // Creating a unique list of available country codes to avoid duplicates.
    const originalLanguages = [... new Set(movies.map(movies => movies.original_language))];

    /**
     * Filtered Movie List
     */
    const filteredMovieList = movies.filter((movie) => {
        let movieList = movie;

        switch (true) {
            case searchTerm !== '' && language !== '':
                movieList = (movie.original_language === language) && (movie.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
            break;
            case searchTerm !== '' && language === '':
                movieList = movie.name.toLowerCase().startsWith(searchTerm.toLowerCase())
            break;
            case language !== '' && searchTerm === '':
                movieList = movie.original_language === language;
            break;
        }
    
        return movieList;
    })

  return (
    <>
        <TopFilter setSearchTerm={setSearchTerm}
                   setLanguage={setLanguage}
                   languages={originalLanguages}
        />
        { loading ? (
            <p>Loading...</p>
        ) : error ? (
            <p>Error: { error }</p>
        ) : (
            <MovieList movies={filteredMovieList} />
        )}
    </>
  );
}
export default HomePage;

