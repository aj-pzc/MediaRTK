import React, { useState, useEffect } from "react";
import addFav from '../media/fav.svg';
import isFav from '../media/fav-added.svg';

const SearchResults = ({ songs, onAddFav, favorites}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredSongs, setFilteredSongs] = useState([]);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredSongs([]); 
        }
    }, [searchTerm]);

    const InputSearch = () => {
        const term = searchTerm.toLowerCase().trim();

        if (term === "") {
            setFilteredSongs([]); 
        } else {
            const results = songs.filter(song => {
                return (
                    (song.title ).toLowerCase().includes(term) ||
                    (song.artist ).toLowerCase().includes(term) ||
                    (song.album ).toLowerCase().includes(term) ||
                    (song.genre ).toLowerCase().includes(term) 
                );
            });
            setFilteredSongs(results);
        }
    };

    const KeyPressEnter = (e) => {
        if (e.key === 'Enter') InputSearch();
    };

    return (
        <div className="search">
             <div className="search__header">
                <h2>Buscador</h2> 
                <div className="search__header-bar">
                    <input 
                        className="search__header-barInput"
                        type="text" 
                        placeholder="Buscar canción, artista o álbum..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={KeyPressEnter}
                    />
                    <button className="search__header-barButton" onClick={InputSearch}>Buscar</button>
                </div>
            </div>   

            {searchTerm.trim() !== "" ? (
                filteredSongs.length > 0 ? (
                    filteredSongs.map((song ) => {
                        const isFavorite = favorites.some(fav => fav.id === song.id);
                        return(
                        <article key={song.id} className="search__results">
                            <div className="search__results-title">
                                <p>{song.title}</p>                        
                            </div>
                            <div className="search__results-artist">
                                <p>{song.artist}</p>
                            </div>
                            <div className="search__results-album">
                                <p>{song.album}</p>
                            </div>
                            <div className="search__results-duration">
                                <p>{song.duration}</p>
                            </div>
                            <div className="search__results-fav" onClick={() => onAddFav(song)}>
                                <button ><img src={isFavorite ? isFav:addFav} alt="favIcon" id="AddtoFAv"/></button>
                            </div>
                        </article>
                        )                       
                    })
                ) : (
                    <p className="error-message">Búsqueda no encontrada. Por favor, intenta de nuevo.</p>
                )
            ) : (
                <p className="search-prompt">Ingresa tu Busqueda</p>
            )}            
        </div>
    );
}

export default SearchResults;