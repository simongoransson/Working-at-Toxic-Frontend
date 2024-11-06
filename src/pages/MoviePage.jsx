import { Link } from 'react-router-dom';

import { useMovies } from '../context/MovieProvider';

const MoviePage = () => {
    const { selectedMovie } = useMovies();

    return (
        <div className="mdp-wrapper">
            { selectedMovie.poster_path ? (
                <div className="mdp-banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${selectedMovie.poster_path})`}}>
                    <div className="flex-container">
                        <h2 className="title"> {selectedMovie.name} </h2>
                    </div>
                </div>
            ) : (
                <div className="mdp-banner" style={{ background: `black`}}>
                    <div className="flex-container">
                        <h2 className="title"> {selectedMovie.name} </h2>
                    </div>
                </div>
            )}
            <div className='flex-container mdp-content'>
                <div className='breadcrumbs'>
                    <Link to="/">All movies</Link> 
                    <span>|</span>
                    <strong>{selectedMovie.name}</strong>
                </div>
                <h5>Overview</h5>
                { selectedMovie.overview ? (
                    <p>{selectedMovie.overview}</p>
                ) : (
                    <p>There is no overview translated into English. Help us expand our database by adding one. </p>
                )
            }
            </div>
        </div>
    )
}
export default MoviePage;