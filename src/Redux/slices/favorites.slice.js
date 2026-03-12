    import { createSlice } from "@reduxjs/toolkit";

    const favoriteSlice = createSlice ({
        name: 'favorites',
        initialState: [],
        reducers: {
            toggleFavorites:(state, action) =>{
            console.log("¡El reducer recibió la acción con payload:", action.payload);
                const song = action.payload;
                if (!song) return;
                
                const exists = state.find(item => item.trackID === song.trackID);
                if(exists){
                    return state.filter(item => item.trackID !== song.trackID);
                } else {
                    state.push(song);
                }
            }
        }

    });

    export const { toggleFavorites } = favoriteSlice.actions;
    export default favoriteSlice.reducer;