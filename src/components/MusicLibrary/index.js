import React, { useEffect, useState } from "react";
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';
import addPlaylist from '../Media/add.svg';
import removePlaylist from '../Media/remove.svg';

import { Link } from "react-router-dom";
import { AddButton, AddIcon, AddPlaylist, AllSongs, EachSong, SearchBar, SearchBox, SearchBtn, SearchContainer, SongCover, SongItem, SongsContainer, SongsHeaders } from "./styles";
import { FavBox, FavButton, FavIcon } from "../../Theme/GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../../Redux/slices/playlists.slice";
import { fetchMusic, searchReset } from "../../Redux/slices/search.slice";
import { toggleFavorites } from "../../Redux/slices/favorites.slice";

const MusicLibrary = () => {
    const dispatch = useDispatch();
    const {songs=[], loading, error} = useSelector(state => state.search);
    const playlist = useSelector(state => state.playlist);
    const favorites = useSelector(state => state.favorites);

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() =>{
        return() =>{
            dispatch(searchReset());
        };
        
    }, [dispatch]);

    const handleSearch = () =>{
        if(searchTerm.trim() !== ""){
            dispatch(fetchMusic(searchTerm.trim()));
        }
    };

    

    const displaySongs = (Array.isArray(songs) ? songs : []).filter(song => {
        const term = searchTerm.toLowerCase();
        return (
            song.artist?.toLowerCase().includes(term) ||
            song.album?.toLowerCase().includes(term) ||
            song.genre?.toLowerCase().includes(term) ||
            song.track?.toLowerCase().includes(term)
        );
    }, [songs, searchTerm]);
   

    const handleTogglePlaylist = (song, onList) =>{

        if(onList){
            dispatch(removeSong(song.trackID));
        } else{
            const songDetails ={
                trackID: song.trackID,
                track: song.track,
                artist: song.artist,
                artistID: song.artistID,
                album: song.album,
                albumID: song.albumID,
                cover: song.cover
            }
            dispatch(addSong(songDetails))        
        };
    };

    return (
        <AllSongs >
            <SearchContainer >
                <h2>Explorador de Música</h2>
                <SearchBox>
                    <SearchBar
                        type="text"
                        id="Searchbox" 
                        placeholder="Presiona Enter para buscar..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />                        
                    <SearchBtn onClick={handleSearch} >
                        Buscar
                    </SearchBtn>                    
                </SearchBox>
            </SearchContainer>
            {loading ? (
                <p>Cargando biblioteca...</p>
            ): error ? (
                <p> {error}</p>
            ): songs.length === 0 ? (
                <p>Realiza una búsqueda para comenzar.</p>
            ) : (
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
                        <FavBox>
                            <p><strong>Favorite</strong></p>
                        </FavBox>
                        <AddPlaylist>
                            <p><strong>Add</strong></p>
                        </AddPlaylist>

                    </SongsHeaders>
                    
                    {displaySongs.length > 0 ? (
                        displaySongs.map((song) => {
                           const {trackID, artist, album, cover, genre, track, albumID, artistID} = song;
                            const isFavorite = favorites.some(fav => fav.trackID === trackID);
                            const onList = playlist.some(added => added.trackID === trackID);

                            return (
                                <EachSong key={trackID} >
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
                                    <FavBox>
                                        
                                        <FavButton onClick={() => {
                                            console.log("Objeto enviado al dispatch:", song);
                                            dispatch(toggleFavorites(song))}} >
                                            <FavIcon src={isFavorite ? isFav:addFav} alt="favIcon"/>
                                        </FavButton>
                                    </FavBox>
                                    <AddPlaylist>
                                        <AddButton onClick={() => handleTogglePlaylist(song, onList)}>
                                            <AddIcon src={onList ? removePlaylist:addPlaylist} alt="AddPlaylist"/>
                                        </AddButton>
                                    </AddPlaylist>                        
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