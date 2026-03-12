import React from "react";
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';
import removeIcon from '../Media/remove.svg';
import addIcon from '../Media/add.svg';


import { FavButton, FavIcon,FavBox } from "../../Theme/GlobalStyles";
import { ListHeader, UserList, ListContainer, ListItem, ListItemHeader, ItemBox, Cover, Playlist,  AddButton, AddIcon} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../../Redux/slices/playlists.slice";
import { Link } from "react-router-dom";
import { toggleFavorites } from "../../Redux/slices/favorites.slice";

const UserFavorites = () => {

    const dispatch = useDispatch();

    const playlist = useSelector(state => state.playlist);
    const favorites = useSelector(state => state.favorites);

    const handleToggleFav = (song) => {
        dispatch(toggleFavorites(song)); 
    };

    console.log("favorites:", favorites)
    console.log("Playlist:", playlist)

    const handleTogglePlaylist = (song, onList) =>{
        if(onList){
            dispatch(removeSong(song.trackID))

        }else {
           
            dispatch(addSong (song))
        }   
    }

    return (
        <UserList >
            <ListHeader>
                <h2>FAVORITES</h2>
            </ListHeader>

            <ListContainer>

                <ListItemHeader>
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
                
                {favorites && favorites.length > 0 ? (
                favorites.map((song) => {
                    
                    const {trackID, artist, artistID, album, albumID, cover, track} = song;
                    const isFavorite = favorites.some(fav => fav.trackID === song.trackID);
                    const onList = playlist.some(added => added.trackID === trackID);

                    return(
                        
                        <ListItem key={trackID} >
                            <div >
                                <Link to={`/album/${albumID}`}>
                                    <img src={cover} alt={album}></img>
                                </Link>
                                 
                            </div>
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
                                <FavButton><FavIcon src={isFavorite ? isFav:addFav} alt="favIcon" id="AddtoFav"/></FavButton>
                            </FavBox>
                            <Playlist>
                                <AddButton onClick={() => handleTogglePlaylist(song, onList)}>
                                    <AddIcon 
                                        src={onList ? removeIcon : addIcon} 
                                        alt="AddIcon"
                                    />
                                </AddButton>
                            </Playlist>
                        </ListItem>
                    )
                }) 
            ) : (
                <p>No hay favoritos aún.</p>
                )}
                
            </ListContainer>

            
        </UserList>
    );
};

export default UserFavorites;