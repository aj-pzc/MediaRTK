import React from 'react';
import { useParams } from 'react-router-dom'; 
import useGetDetails from '../../hooks/useGetDetails.js';
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';

import {Album, AlbumContainer, AlbumCover, AlbumInfo, AlbumTracks, TrackDuration, Tracks, TracksHeader, TrackTitles, } from "./styles.js";
import { FavButton, FavIcon,FavBox } from "../../Theme/GlobalStyles";

const songTime = (millis) => {
  const minutes = Math.floor(millis / 60000);
  
  let seconds = Math.floor((millis % 60000) / 1000);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return minutes + ":" + seconds;
}

const AlbumDetails = ({onAddFav, favorites}) => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetDetails(id, "song");

  if (isLoading) return <p>Cargando álbum...</p>;
  if (error) return <p>Hubo un error.</p>;
  
  const albumInfo = data && data[0];
  const tracks = data ? data.slice(1) : [];

  return (
    <Album>
      <AlbumContainer>         
        
          {albumInfo && (
            <AlbumInfo>
              <AlbumCover src={albumInfo.artworkUrl100.replace('100x100', '500x500')} alt={albumInfo.collectionName} />
              <h2>{albumInfo.collectionName}</h2>
              <p>{albumInfo.artistName}</p>
              <p>{albumInfo.releaseDate.slice(0, 10)}</p>
            </AlbumInfo>
          )}
        
        <AlbumTracks>
          <TracksHeader>
            <h3>Canciones:</h3>
          </TracksHeader>        
          
          {tracks.map(item => {
            const isFavorite = favorites.some(fav => fav.trackID === item.trackID);

            return(
            <Tracks key={item.trackId}>
              <TrackTitles>
                <p>
                  {item.trackNumber}. {item.track}
                </p>
              </TrackTitles>
              <TrackDuration>
                <p>{songTime(item.trackTimeMillis)}</p>
              </TrackDuration>
              <FavBox onClick={() => onAddFav(item)}>
                <FavButton><FavIcon src={isFavorite ? isFav:addFav} alt="favIcon"/></FavButton>
              </FavBox>
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