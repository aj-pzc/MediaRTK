import Header from "./components/Header";
import AllSongs from "./components/AllSongs";
import UserPlaylist from "./components/UserPlaylist";
import SearchResults from "./components/SearchResults";
import React, { useState } from "react";

import './App.css';

function App() {
  const songsDB = [
    { id: 1, title: "Die For You", artist: "The Weeknd", album:"Starboy", duration: "4:20", genre:"R&B Dance"},
    { id: 2, title: "Blinding Lights", artist: "The Weeknd", album:"After Hours", duration: "3:20" , genre:"R&B Dance"},
    { id: 3, title: "São Paulo", artist: "The Weeknd", album:"Hurry Up Tomorrow ", duration: "5:02", genre:"R&B Dance"},
    { id: 4, title: "Timeless", artist: "The Weeknd", album:"Hurry Up Tomorrow ", duration: "4:16", genre:"R&B Dance"},
    { id: 5, title: "The Hills", artist: "The Weeknd", album:"Beauty Behind The Madness", duration: "4:02", genre:"R&B Dance"},
    { id: 6, title: "Dog Days Are Over", artist: "Florence and the Machine", album:"Lungs", duration: "4:12", genre:"Alt Folk"},
    { id: 7, title: "Buckle", artist: "Florence and the Machine", album:"Everybody Scream", duration: "3:23", genre:"Alt Folk" },
    { id: 8, title: "Free", artist: "Florence and the Machine", album:"Dance Fever", duration: "3:54", genre:"Alt Folk" },
    { id: 9, title: "Cosmic Love", artist: "Florence and the Machine", album:"Lungs", duration: "4:15", genre:"Alt Folk"},
    { id: 10, title: "Sympathy Magic", artist: "Florence and the Machine", album:"Everybody Scream", duration: "4:02", genre:"Alt Folk" },
    { id: 11, title: "Revolving Door", artist: "Tate McRae", album:"So Close To What", duration: "3:00", genre:"DancePop" },
    { id: 12, title: "Guilty Conscience", artist: "Tate McRae", album:"THINK LATER", duration: "2:32", genre:"DancePop" },
    { id: 13, title: "Burry a Friend", artist: "Billie Eilish", album:"When We All Fall Asleep, Where Do We Go", duration: "3:13", genre:"PopIndie"},
    { id: 14, title: "BLUE", artist: "Billie Eilish", album:"Hit Me Hard And Soft", duration: "5:43", genre:"PopIndie"},
    { id: 15, title: "Oxytocin", artist: "Billie Eilish", album:"Happier Than Ever", duration: "3:30", genre:"PopIndie"},
  ];

  const [favorites, setFavorites] = useState([]);

  const FavoritesToggle = (song) => {

    
    if (favorites.some(fav => fav.id === song.id)) {

      const updateFavorites = favorites.filter(fav => fav.id !== song.id)
      setFavorites(updateFavorites)

    } else{
      setFavorites([...favorites, song]);
    }
  };

  return (
    <div className="App">
      <Header appName="MediaPlayerApp" />  
      <SearchResults songs={songsDB} onAddFav={FavoritesToggle}  favorites={favorites}/>
      <UserPlaylist favorites={favorites} onAddFav={FavoritesToggle} />
      <AllSongs songs={songsDB} onAddFav={FavoritesToggle} favorites={favorites} /> 
    </div>
  );
}

export default App;
