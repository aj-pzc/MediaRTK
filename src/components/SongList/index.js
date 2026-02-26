import React, {useState, useEffect} from "react";

const SongList = () => {

    const [songs, setSongs] = useState([]);
       
    useEffect(() => {
        const fetchSongs = async () => {
            const response = [
                {
                    id: 1,
                    title: "Die For You",
                    artist: "The Weeknd",
                    duration: "4:20"

                },
                {
                    id: 2,
                    title: "Blinding Lights",
                    artist: "The Weeknd",
                    duration: "3:20"
                },
                {
                    id: 3,
                    title: "São Paulo",
                    artist: "The Weeknd",
                    duration: "5:02"
                },
                {
                    id: 4,
                    title: "Timeless",
                    artist: "The Weeknd",
                    duration: "4:16"
                },
                {
                    id: 5,
                     title: "The Hills",
                    artist: "The Weeknd",
                    duration: "4:02"
                }
            ];
            setSongs(response);    
        };

        fetchSongs();
    }, []);

    return (
        songs.map((song) => {
            const {id, title, artist, duration} = song;
            return (
                <div key={id} className="song-container">
                    <h2 className="song-title">{title}</h2>
                    <p className="song-artist">{artist}</p>
                    <p className="song-duration">{duration}</p>
                </div>
            );
        })
   )
};


export default SongList;