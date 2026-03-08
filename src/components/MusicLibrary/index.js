import React, { useState } from "react";
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';
import { Link } from "react-router-dom";
import { AllSongs, EachSong, SearchBar, SearchBox, SearchBtn, SearchContainer, SongCover, SongItem, SongsContainer, SongsHeaders } from "./styles";
import { FavButton, FavIcon } from "../../Theme/GlobalStyles";

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
        <AllSongs >
            <SearchContainer >
                <h2>Explorador de Música</h2>

                <SearchBox>
                    <SearchBar
                        type="text"
                        id="Searchbox" 
                        placeholder="Filtra aquí o presiona Enter para buscar..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && apiSearch()}
                    />                        
                    <SearchBtn onClick={apiSearch} >
                        Buscar
                    </SearchBtn>                    
                </SearchBox>
            </SearchContainer>
            {isLoading ? (
                <p className="loading-msg">Cargando biblioteca...</p>
            ) : error ? (
                <p> {error}</p>

            ):(
                <SongsContainer>

                    <SongsHeaders >
                        <SongCover>
                            <p><strong>Album Cover</strong></p>
                        </SongCover>
                        <SongItem>
                           <p><strong>Track</strong></p>
                        </SongItem>   
                        <SongItem>
                            <p><strong>Album</strong></p>
                        </SongItem>                        
                        <SongItem>
                            <p><strong>Artist</strong></p>
                        </SongItem>
                        <SongItem>
                            <p><strong>Genre</strong></p>
                        </SongItem>
                        <div>
                            <p><strong>Favorite</strong></p>
                        </div>                        
                    </SongsHeaders>
                    
                    {displaySongs.length > 0 ? (
                        displaySongs.map((song) => {
                           const {trackID, artist, album, cover, genre, track, albumID, artistID} = song;
                            const isFavorite = favorites.some(fav => fav.trackID === trackID);

                            return (
                                <EachSong key={trackID} className="allSongs__each-item">
                                    <SongCover >
                                        <Link to={`/album/${albumID}`}>
                                            <img src={cover} alt={album}></img>                                        
                                        </Link>                                        
                                    </SongCover>
                                    <SongItem>
                                            <p>{track}</p>
                                    </SongItem>   
                                    <SongItem>
                                        <Link to={`/album/${albumID}`}>
                                            <p>{album}</p>                                        
                                        </Link>                                       
                                    </SongItem>                        
                                    <SongItem>

                                        <Link to={`/artist/${artistID}`}>
                                            <p>{artist}</p>
                                        </Link>
                                        
                                    </SongItem>
                                    <SongItem>
                                        <p>{genre}</p>

                                    </SongItem>
                                    <div className="allSongs__each-fav">
                                        <FavButton onClick={() => onAddFav(song)} ><FavIcon src={isFavorite ? isFav:addFav} alt="favIcon" id="AddtoFav"/></FavButton>
                                    </div>                        
                                </EachSong>
                );
                        })
                    ) : (
                        <p className="error-message">No se encontraron resultados.</p>
                    )}
                </SongsContainer>
            )}
        </AllSongs>
    );
};

export default MusicLibrary;