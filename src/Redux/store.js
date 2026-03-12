import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from "./slices/playlists.slice";
import searchReducer from "./slices/search.slice";
import detailReducer from "./slices/details.slice";
import favoritesReducer from "./slices/favorites.slice";

const store = configureStore({
    reducer:{
        playlist: playlistReducer,
        search: searchReducer,
        details: detailReducer,
        favorites: favoritesReducer,
    }
});

export default store;