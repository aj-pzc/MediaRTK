import React from "react";
import addFav from '../media/fav.svg';
import isFav from '../media/fav-added.svg';

const AllSongs = ({ songs, onAddFav, favorites}) => {
    return (
        <section className="allSongs">
            <div className="allSongs__header">
                <h2>Todas las Canciones</h2> 
            </div>
             
            {songs.map((song) => {
                const {id, title, artist, album, duration} = song;
                const isFavorite = favorites.some(fav => fav.id === song.id);

                return (
                    <article key={id} className="allSongs__each">
                        <div className="allSongs__each-title">
                            <p>{title}</p>
                        </div>
                        <div className="allSongs__each-artist">
                            <p>{artist}</p>
                        </div>
                        <div className="allSongs__each-album">
                            <p>{album}</p>
                        </div>
                        <div className="allSongs__each-duration">
                            <p>{duration}</p>
                        </div>
                        <div className="search__results-fav">
                            <button onClick={() => onAddFav(song)} ><img src={isFavorite ? isFav:addFav} alt="favIcon" id="AddtoFAv"/></button>
                        </div>                        
                    </article>
                );
            })}
        </section>
   )
};


export default AllSongs;