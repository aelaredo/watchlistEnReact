import Reac, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {MovieCard} from './MovieCard';

export const Watched = () => {
    const {watched} = useContext (GlobalContext);
    return (
        <div className="movie-page">
        <div className="container">
            <div className="header">
                <h1 className="heading">My Watched Movies</h1>  
            </div>

            {watched.length > 0 ? (
            <div className="movie-grid">
                {watched.map((movie)=>(
                    <MovieCard movie={movie} type="watched"/>
                ))}
            </div>
            ) : (
                <h2 className="no-movies">No movies in your list</h2>
            )} 
        </div>
    </div>
    )
}
