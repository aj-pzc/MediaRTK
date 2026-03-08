import React from "react";
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';
import { FavButton, FavIcon,FavBox } from "../../Theme/GlobalStyles";
import { ListHeader, UserList, ListContainer, ListItem, ListItemHeader, ItemBox, Cover } from "./styles";

const UserPlaylist = ({ favorites, onAddFav}) => {
    return (
        <UserList >
            <ListHeader>
                <h2>Mi Playlist</h2>
            </ListHeader>

            <ListContainer>

                <ListItemHeader className="allSongs__each-item" id="PlaylistHeader">
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
                </ListItemHeader>


                
                {favorites && favorites.length > 0 ? (
                favorites.map((song) => {
                    
                    const {id, artist, album, cover, track} = song;
                    const isFavorite = favorites.some(fav => fav.id === song.id);
                    
                    return(
                        <ListItem key={id} className="UserPlayList__each-item">
                            <div  className="UserPlayList__each-cover">
                                 <img src={cover} alt={album}></img>
                            </div>
                            <ItemBox className="UserPlayList__each-track">
                                <p><strong>{track}</strong></p>
                            </ItemBox>
                            <ItemBox className="UserPlayList__each-artist">
                                <p>{artist}</p>
                            </ItemBox>
                            <ItemBox className="UserPlayList__each-album">
                                <p>{album}</p>
                            </ItemBox>
                            <FavBox onClick={() => onAddFav(song)}>
                                <FavButton><FavIcon src={isFavorite ? isFav:addFav} alt="favIcon" id="AddtoFav"/></FavButton>
                            </FavBox>
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

export default UserPlaylist;