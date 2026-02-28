import React from "react";
import addFav from '../media/fav.svg';
import isFav from '../media/fav-added.svg';

const UserPlaylist = ({ favorites, onAddFav}) => {
    return (
        <section className="UserPlayList">
            <div className="UserPlayList__header">
                <h2>Mi Playlist</h2>
            </div>
            
            {favorites && favorites.length > 0 ? (
                favorites.map((song) => {
                    const {id, title, artist, album, duration} = song;
                    const isFavorite = favorites.some(fav => fav.id === song.id);
                    
                    return(
                        <article key={id} className="UserPlayList__each">
                            <div className="UserPlayList__each-title">
                                <p><strong>{title}</strong></p>
                            </div>
                            <div className="UserPlayList__each-artist">
                                <p>{artist}</p>
                            </div>
                            <div className="UserPlayList__each-album">
                                <p>{album}</p>
                            </div>
                            <div  className="UserPlayList__each-duration">
                                <p>{duration}</p>
                            </div>

                            <div className="search__results-fav" onClick={() => onAddFav(song)}>
                                <button ><img src={isFavorite ? isFav:addFav} alt="favIcon" id="AddtoFav"/></button>
                            </div>
                        </article>
                    )
                }) 
            ) : (
                <p>No hay favoritos aún.</p>
            )}
        </section>
    );
};

export default UserPlaylist;