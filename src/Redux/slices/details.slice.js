import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDetails = createAsyncThunk(
    'details/fetchDetails',

    async ( {id, entity="album"},{rejectWithValue}) => {
        try{
        const response = await axios.get(`https://itunes.apple.com/lookup?id=${id}&entity=${entity}`);
        const apiData = response.data.results;
                 
        if(entity==="song" && apiData.length > 1){
            const albumDetails = apiData[0];
            const trackDetails = apiData.slice(1).map(song =>({
                
                trackID: song.trackId, 
                track: song.trackName,
                artist: song.artistName,
                album: song.collectionName,
                cover: song.artworkUrl100,
                albumID: song.collectionId,
                genre: song.primaryGenreName,
                artistID: song.artistId,
                trackNumber: song.trackNumber,
                trackTimeMillis: song.trackTimeMillis
            }));

            return[ albumDetails, ...trackDetails];
        }
        return apiData;

    } catch(error) {
        return rejectWithValue ("Error en la carga de datos")
    }
    }    
);

const detailsSlice = createSlice({
    name:'detailedInfo',
    initialState: {
        details: null,
        isLoading: false,
        error: null
    },
    reducers: {
        clearDetails: (state) => {state.details = null; }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchDetails.pending, (state)=>{
          state.isLoading = true;
          state.error = null;  
        })
        .addCase(fetchDetails.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.details = action.payload
        })
        .addCase(fetchDetails.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload

        })
    }
})

export const {clearDetails} = detailsSlice.actions;

export default detailsSlice.reducer; 



