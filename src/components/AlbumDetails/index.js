import React from 'react';
import { useParams } from 'react-router-dom'; 
import useGetDetails from '../../hooks/useGetDetails.js';
import addFav from '../Media/fav.svg';
import isFav from '../Media/fav-added.svg';


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
    <section className='infoAlbum'>
      <div className='infoAlbum__container'>         
        
          {albumInfo && (
            <div className='infoAlbum__Artist'>
              <img src={albumInfo.artworkUrl100.replace('100x100', '500x500')} alt={albumInfo.collectionName} />
              <h2>{albumInfo.collectionName}</h2>
              <p>{albumInfo.artistName}</p>
              <p>{albumInfo.releaseDate.slice(0, 10)}</p>
            </div>
          )}
        
        <div className='infoAlbum__tracks'>
          <div className='infoAlbum__tracks-header'>
            <h3>Canciones:</h3>
          </div>        
          
          {tracks.map(item => {
            const isFavorite = favorites.some(fav => fav.trackID === item.trackID);

            return(
            <article key={item.trackId} className='infoAlbum__tracks-each'>
              <div className='infoAlbum__tracks-eachTitle'>
                <p>
                  {item.trackNumber}. {item.track}
                </p>
              </div>
              <div className='infoAlbum__tracks-eachDuration'>
                <p>{songTime(item.trackTimeMillis)}</p>
              </div>
              <div className="allSongs__each-fav">
                <button onClick={() => onAddFav(item)} ><img src={isFavorite ? isFav:addFav} alt="favIcon" id="AddtoFav"/></button>
              </div> 
            </article>
          )
            
          }
            )}
        </div>
      </div>
    </section>
  );
};
export default AlbumDetails;