import React, {useContext} from 'react';
import {GlobalContext} from "../context/GlobalState"

export const MovieControls = ({movie, type}) => {
    const{removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched}= useContext(GlobalContext);
    
    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                    <button className="crtl-btn" onClick={()=>addMovieToWatched(movie)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button className="crtl-btn"
                    onClick={()=>removeMovieFromWatchlist(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === "watched" &&
            (
                <>
                <button className="crtl-btn" onClick={()=>moveToWatchlist(movie)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>
                
                <button className="crtl-btn"onClick={()=>removeFromWatched(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    )
}
