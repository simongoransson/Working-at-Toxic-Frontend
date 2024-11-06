import { Link } from 'react-router-dom';
import { useMovies } from '../context/MovieProvider';

/**
 * Movie Card 
 * 
 * @param {*} movie 
 * @returns 
 */
const MovieCard = ({ movie }) => {
    const { id, poster_path, name, vote_average } = movie;
    const { selectMovie } = useMovies();

    /**
     * Create Slug
     * 
     * @param {*} str 
     * @returns 
     */
    const createSlug = str => str.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '');

    /**
     * Handle Selected Movie
     */
    const handleSelectedMovie = () => {
        selectMovie(movie);
    }
    // Quickfix, i was out of time so i added a quick
    const backgroundImageUrl = poster_path 
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : `https://www.svgrepo.com/show/508699/landscape-placeholder.svg`; // Fallback image URL

    return (
        <Link className="flex-card" to={`/movie/${createSlug(name)}`} onClick={handleSelectedMovie}>
            <div className="image-container" style={{ backgroundImage: `url(${backgroundImageUrl})`}}></div>
                <div className="additional-information">
                    <span>Average Rating ({ vote_average })</span>
            </div>
        </Link>
    )
}

export default MovieCard;