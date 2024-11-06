import MovieCard from "./MovieCard";

/**
 * Movie List
 * 
 * @param {*} movies 
 * @returns 
 */
const MovieList = ({ movies }) => {
    return (
        <div className="flex-container">
            <div className="flex-grid">
                { movies.length > 0 ? (
                    movies.map(movie => <MovieCard key={movie?.id} movie={movie} />)
                ) : (
                    <p>No Movie Found...</p>
                )}           
            </div>
        </div>
    )
}
export default MovieList;