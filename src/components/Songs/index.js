const SongInfo = ({ title, artist, duration }) => {

    return (
        <div className="song-container">
                <h2 className="song-title">{title}</h2>
                <p className="song-artist">{artist}</p>
                <p className="song-duration">{duration}</p>
            </div>
   )
}



export default SongInfo;