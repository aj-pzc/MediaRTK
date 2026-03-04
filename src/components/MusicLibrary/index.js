import React, { useState } from "react";
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';
import { Link } from "react-router-dom";

const MusicLibrary = ({ songs, onAddFav, favorites, onSearch, isLoading, error }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const displaySongs = songs.filter(song => {
        const term = searchTerm.toLowerCase().trim();
        return (
            song.artist?.toLowerCase().includes(term) ||
            song.album?.toLowerCase().includes(term) ||
            song.genre?.toLowerCase().includes(term) ||
            song.track?.toLowerCase().includes(term)
        );
    });

    const apiSearch = () => {
        if (searchTerm.trim() !== "") {
            onSearch(searchTerm.trim()); 
        }
    };

    return (
        <section className="allSongs">
            <div className="allSongs__search">
                <h2>Explorador de Música</h2>

                <div className="allSongs__box">
                    <input 
                        className="allSongs__box-input"
                        type="text"
                        id="Searchbox" 
                        placeholder="Filtra aquí o presiona Enter para buscar nuevo artista..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && apiSearch()}
                    />
                    <button className="allSongs__box-button" onClick={apiSearch}>
                        Buscar
                    </button>                    
                </div>
            </div>
            {isLoading ? (
                <p className="loading-msg">Cargando biblioteca...</p>
            ) : error ? (
                <p> {error}</p>

            ):(
                <div className="allSongs__each" >

                    <article className="allSongs__each-item" id="AllSongHeader">
                        <div className="allSongs__each-cover">
                            <p><strong>Album Cover</strong></p>
                        </div>
                        <div className="allSongs__each-track">
                           <p><strong>Track</strong></p>
                        </div>   
                        <div className="allSongs__each-album">
                            <p><strong>Album</strong></p>
                        </div>                        
                        <div className="allSongs__each-artist">
                            <p><strong>Artist</strong></p>
                        </div>
                        <div className="allSongs__each-genre">
                            <p><strong>Genre</strong></p>
                        </div>
                        <div className="allSongs__each-fav">
                            <p><strong>Favorite</strong></p>
                        </div>                        
                    </article>
                    
                    {displaySongs.length > 0 ? (
                        displaySongs.map((song) => {
                           const {trackID, artist, album, cover, genre, track, albumID, artistID} = song;
                            const isFavorite = favorites.some(fav => fav.trackID === trackID);

                            return (
                                <article key={trackID} className="allSongs__each-item">
                                    <div className="allSongs__each-cover" >
                                        <Link to={`/album/${albumID}`}>
                                            <img src={cover} alt={album}></img>                                        
                                        </Link>                                        
                                    </div>
                                    <div className="allSongs__each-track">
                                            <p>{track}</p>
                                    </div>   
                                    <div className="allSongs__each-album">
                                        <Link to={`/album/${albumID}`}>
                                            <p>{album}</p>                                        
                                        </Link>                                       
                                    </div>                        
                                    <div className="allSongs__each-artist">

                                        <Link to={`/artist/${artistID}`}>
                                            <p>{artist}</p>
                                        </Link>
                                        
                                    </div>
                                    <div className="allSongs__each-genre">
                                        <p>{genre}</p>

                                    </div>
                                    <div className="allSongs__each-fav">
                                        <button onClick={() => onAddFav(song)} ><img src={isFavorite ? isFav:addFav} alt="favIcon" id="AddtoFav"/></button>
                                    </div>                        
                                </article>
                );
                        })
                    ) : (
                        <p className="error-message">No se encontraron resultados.</p>
                    )}
                </div>
            )}
        </section>
    );
};

export default MusicLibrary;