import React from "react";
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';

const UserPlaylist = ({ favorites, onAddFav}) => {
    return (
        <section className="UserPlayList">
            <div className="UserPlayList__header">
                <h2>Mi Playlist</h2>
            </div>

            <div className="UserPlayList__each">

                <article className="allSongs__each-item" id="PlaylistHeader">
                        <div className="UserPlayList__each-cover">
                            <p><strong>Album Cover</strong></p>
                        </div>
                        <div className="UserPlayList__each-track">
                           <p><strong>Track</strong></p>
                        </div>                                               
                        <div className="UserPlayList__each-artist">
                            <p><strong>Artist</strong></p>
                        </div>
                        <div className="UserPlayList__each-album">
                            <p><strong>Album</strong></p>
                        </div> 
                        <div className="UserPlayList__each-fav">
                            <p><strong>Favorite</strong></p>
                        </div>                        
                </article>


                
                {favorites && favorites.length > 0 ? (
                favorites.map((song) => {
                    
                    const {id, artist, album, cover, track} = song;
                    const isFavorite = favorites.some(fav => fav.id === song.id);
                    
                    return(
                        <article key={id} className="UserPlayList__each-item">
                            <div  className="UserPlayList__each-cover">
                                 <img src={cover} alt={album}></img>
                            </div>
                            <div className="UserPlayList__each-track">
                                <p><strong>{track}</strong></p>
                            </div>
                            <div className="UserPlayList__each-artist">
                                <p>{artist}</p>
                            </div>
                            <div className="UserPlayList__each-album">
                                <p>{album}</p>
                            </div>
                            <div className="UserPlayList__each-fav" onClick={() => onAddFav(song)}>
                                <button ><img src={isFavorite ? isFav:addFav} alt="favIcon" id="AddtoFav"/></button>
                            </div>
                        </article>
                    )
                }) 
            ) : (
                <p>No hay favoritos aún.</p>
                )}
                
            </div>

            
        </section>
    );
};

export default UserPlaylist;