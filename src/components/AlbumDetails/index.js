import React, {useEffect } from 'react';
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';
import addPlaylist from '../Media/add.svg';
import removePlaylist from '../Media/remove.svg';


import { Link, useParams } from 'react-router-dom'; 
import { fetchDetails } from '../../Redux/slices/details.slice.js';
import { addSong, removeSong } from '../../Redux/slices/playlists.slice.js';
import { useDispatch, useSelector } from "react-redux";
import { FavButton, FavIcon,FavBox } from "../../Theme/GlobalStyles";
import {AddButton, AddIcon, AddPlaylist, Album, AlbumContainer, AlbumCover, AlbumInfo, AlbumTracks, TrackDuration, Tracks, TracksHeader, TrackTitles, } from "./styles.js";
import { toggleFavorites } from '../../Redux/slices/favorites.slice.js';

const songTime = (millis) => {
  if (!millis) return "0:00";
  const minutes = Math.floor(millis / 60000);  
  let seconds = Math.floor((millis % 60000) / 1000);

  return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

const AlbumDetails = () => {
  const { id } = useParams();
  const { details, loading, error } = useSelector(state=> state.details);
  const dispatch = useDispatch();
  const playlist = useSelector(state => state.playlist);
  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    dispatch(fetchDetails({id, entity: "song"}))
  }, [dispatch, id]);
 
  const handleTogglePlaylist = (song, onList) =>{
    if(onList){
        dispatch(removeSong(song.trackID));
    } else{
        dispatch(addSong(song))        
    };
  };

  const handleToggleFav = (song) => {
    dispatch(toggleFavorites(song)); 
  };

  if (loading) return <p>Cargando álbum...</p>;
  if (error) return <p>Hubo un error{error}.</p>;
  if (!Array.isArray(details) || details.length === 0) return null;

  const albumInfo = details[0];
  const tracks = details.slice(1).filter(song => song && song.trackID);
  console.log('artista:',details[1]);
  return (
    <Album>
      <AlbumContainer>         
        
          {albumInfo && (
            <AlbumInfo>
              <AlbumCover 
                src={albumInfo?.artworkUrl100?.replace('100x100', '500x500') || 'placeholder.jpg'} 
                alt={albumInfo?.collectionName || "Álbum"} 
              />
              <h2>{albumInfo.collectionName}</h2>
              <Link to={`/artist/${albumInfo.artistId}`}>
                <p>{albumInfo.artistName}</p>
              </Link>
              <p>{albumInfo?.releaseDate ? albumInfo.releaseDate.slice(0, 10) : "Fecha desconocida"}</p>
              
            </AlbumInfo>
          )}
        
        <AlbumTracks>
          <TracksHeader>
            <h3>Canciones:</h3>
          </TracksHeader>        
          
          {tracks.map(song => {
            const isFavorite = favorites.some(fav => fav.trackID === song.trackID);
            const onList = playlist.some(added => added.trackID === song.trackID);

            return(
            <Tracks key={song.trackID}>
              <TrackTitles>
                <p>
                  {song.trackNumber}. {song.track}
                </p>
              </TrackTitles>
              <TrackDuration>
                <p>{songTime(song.trackTimeMillis)}</p>
              </TrackDuration>
              <FavBox onClick={() => handleToggleFav(song)}>
                <FavButton>
                  <FavIcon 
                    src={isFavorite ? isFav:addFav} 
                    alt="favIcon"
                  />
                </FavButton>
              </FavBox>
              <AddPlaylist>
                <AddButton onClick={() => handleTogglePlaylist(song, onList)}>
                  <AddIcon src={onList ? removePlaylist:addPlaylist} alt="AddPlaylist"/>
                </AddButton>
              </AddPlaylist>


            </Tracks>
          )
            
          }
            )}
        </AlbumTracks>
      </AlbumContainer>
    </Album>
  );
};
export default AlbumDetails;