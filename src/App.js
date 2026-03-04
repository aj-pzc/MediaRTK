import React, { useState } from 'react';
import useFetchMusic from "./hooks/useFetchMusic";
import useFavorites from "./hooks/useFavorites";

import Header from "./components/Header";
import MusicLibrary from "./components/MusicLibrary";
import UserPlaylist from "./components/UserPlaylist";
import AlbumDetails from "./components/AlbumDetails"; 
import ArtistDetails from "./components/ArtistDetails";
import './App.css';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [userQuery, setQuery] = useState("Billie Eilish"); 
  const { songDB, isLoading, error } = useFetchMusic(userQuery);
  const { favorites, FavoritesToggle } = useFavorites();


  return (
    <div className="App">
      <Header appName={"MediaPlayerApp"}/>
      <Routes>
        <Route path='/' element={
          <MusicLibrary 
            songs={songDB} 
            onAddFav={FavoritesToggle} 
            favorites={favorites} 
            onSearch={setQuery} 
            isLoading={isLoading}
            error={error}
          />
        }/>

        <Route path='/album/:id' element={
          <AlbumDetails 
            favorites={favorites}  
            onAddFav={FavoritesToggle}
          />}/>
          
        <Route path='/artist/:id' element={<ArtistDetails/>}/>

        <Route path='/playlist' element={
          <UserPlaylist 
          favorites={favorites} 
          onAddFav={FavoritesToggle} 
          />
        }/>
      </Routes>
        
    </div>
  );
}

export default App;