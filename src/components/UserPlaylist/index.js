import React from "react";
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';
import removeIcon from '../Media/remove.svg';
import { FavButton, FavIcon,FavBox } from "../../Theme/GlobalStyles";
import { ListHeader, UserList, ListContainer, ListItem, ListItemHeader, ItemBox, Cover, Playlist, AddButton, AddIcon } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../../Redux/slices/playlists.slice";
import { Link } from "react-router-dom";
import { toggleFavorites } from "../../Redux/slices/favorites.slice";


const UserPlaylist = () => {

    const songs = useSelector(state => state.playlist);
    const favorites = useSelector(state => state.favorites);



    const dispatch = useDispatch();
    const handleToggleFav = (song) => {
        dispatch(toggleFavorites(song)); 
    };

    return (
        <UserList >
            <ListHeader>
                <h2>Mi Playlist</h2>
            </ListHeader>

            <ListContainer>
                <ListItemHeader >
                        <Cover>
                            <p><strong>Album Cover</strong></p>
                        </Cover>
                        <ItemBox>
                           <p><strong>Track</strong></p>
                        </ItemBox>                                               
                        <ItemBox>
                            <p><strong>Artist</strong></p>
                        </ItemBox>
                        <ItemBox >
                            <p><strong>Album</strong></p>
                        </ItemBox> 
                        <FavBox >
                            <p><strong>Favorite</strong></p>
                        </FavBox>
                        <Playlist>
                            <p><strong>List</strong></p>    
                        </Playlist>                      
                </ListItemHeader>
                
                {songs.length === 0 ? <p>Tu Playlist Esta Vacia</p> : (
                songs.map((song) => {
                    
                    const {trackID, artist, artistID, album, albumID, cover, track} = song;
                    const isFavorite = favorites.some(fav => fav.trackID === song.trackID);
                    
                    return(
                        <ListItem key={trackID} >
                            <Cover>
                                <Link to={`/album/${albumID}`}>
                                    <img src={cover} alt={album}></img>
                                </Link>
                            </Cover>
                            <ItemBox >
                                <p><strong>{track}</strong></p>
                            </ItemBox>
                            <ItemBox >
                                <Link to={`/artist/${artistID}`}>
                                <p>{artist}</p>
                                </Link>
                            </ItemBox>
                            <ItemBox >
                                <Link to={`/album/${albumID}`}>
                                    <p>{album}</p>
                                </Link>
                            </ItemBox>
                            <FavBox onClick={() => handleToggleFav(song)}>
                                <FavButton onClick={() => 
                                    dispatch(toggleFavorites(song))} 
                                    aria-label="Favorites"    
                                >
                                    <FavIcon src={isFavorite ? isFav:addFav} alt="favIcon"/>
                                </FavButton>
                            </FavBox>
                            <Playlist>
                                <AddButton onClick={() => dispatch(removeSong(trackID))}>
                                    <AddIcon
                                        src={removeIcon}
                                        alt="Remove"
                                        aria-label="Playlist"
                                     />
                                </AddButton>
                            </Playlist>
                        </ListItem>
                    )
                }) 
            ) }                
            </ListContainer>

            
        </UserList>
    );
};

export default UserPlaylist;