import { useState, useEffect } from "react";
import axios from "axios";

const useFetchMusic = (userQuery) => {
    const[songDB, setSongDB] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {

        if(!userQuery) return;

        const fetchMusic = async () =>{
            setIsLoading(true);
                try{
                    const response = await axios.get(`https://itunes.apple.com/search?term=${userQuery}&entity=musicTrack`);
                    console.log(`composition ${userQuery}:`,response.data.results[0]);

                    const apiData = response.data.results || [];

                    const renamedData = apiData.map( (item) => ({
                        cover: item.artworkUrl100,
                        albumID: item.collectionId,
                        album: item.collectionName || "Album Desconocido",
                        trackID: item.trackId,
                        track: item.trackName || "N/A",
                        artistID: item.artistId,
                        artist: item.artistName || "Artista Desconocido",
                        genre: item.primaryGenreName || "Varios"                        
                    }));
                    setSongDB(renamedData);
                    setError(null);

                } catch(error){
                    setError("Error de Conexion");
                }
                setIsLoading(false);
        };
        fetchMusic();
    },  [userQuery]);

    return{songDB,isLoading, error};
};

export default useFetchMusic;

