import axios from "axios";
import { useState, useEffect} from "react";

const useGetDetails = (id, entity="album") =>{
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState(null);

        useEffect(() => {
            if(!id) return;
            
            const fetchDetails = async () => {
                setIsLoading(true);

                try{
                    const response = await axios.get(
                        `https://itunes.apple.com/lookup?id=${id}&entity=${entity}`
                    );
                    const rawData = response.data.results;

                    if (entity === "song" && rawData.length > 1) {
                    const albumInfo = rawData[0]; 
                    const renamedTracks = rawData.slice(1).map(item => ({
                        trackID: item.trackId, 
                        track: item.trackName,
                        artist: item.artistName,
                        album: item.collectionName,
                        cover: item.artworkUrl100,
                        albumID: item.collectionId,
                        genre: item.primaryGenreName,
                        artistID: item.artistId,
                        trackNumber: item.trackNumber,
                        trackTimeMillis: item.trackTimeMillis
                    }))
                        console.log(`composition${id}:`, response.data.results);
                        setData([albumInfo, ...renamedTracks]); 
                    } else {
                        setData(rawData);
                    }
                } 
                catch(error){
                    console.error("Error en el lookup", error);
                    setError("Falla en la carga de datos")
                } 
                finally {
                    setIsLoading(false); 
                }
            };
            fetchDetails();
        },[id, entity]);

        return{data, isLoading, error};

};

export default useGetDetails; 