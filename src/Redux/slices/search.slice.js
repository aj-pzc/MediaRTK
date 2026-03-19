import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMusic = createAsyncThunk(
    'search/fetchMusic',    
    async(searchTerm,{rejectWithValue} ) => {
    
        try{
            const response = await axios.get(`https://itunes.apple.com/search?term=${searchTerm}&entity=musicTrack`);
            
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
            console.log(renamedData)
            return(renamedData);
            
        } catch (error){
            return rejectWithValue(error.message)
        }    
    }
);

const searchSlice = createSlice({
    name:'searchAPI',
    initialState:{
        songs:[],
        loading: false,
        error: null,
    },


    reducers:{
        searchReset: (state) => {
            state.songs = [];
            state.loading = false;
            state.error = null;
        },
    },

    extraReducers: builder =>{
        builder
        .addCase(fetchMusic.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchMusic.fulfilled, (state, action) => {
            state.loading = false;
            state.songs = action.payload;
        })
        .addCase(fetchMusic.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }   

})

export const {searchReset} = searchSlice.actions;

export default searchSlice.reducer