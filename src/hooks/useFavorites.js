import { useState, useEffect } from "react";

const useFavorites = () => {
    const [favorites, setFavorites] = useState(() =>{
        const saved = localStorage.getItem("user_favs");
        return saved ? JSON.parse(saved) : [];
    });
    useEffect(() => {
        localStorage.setItem("user_favs", JSON.stringify(favorites))
    }, [favorites]);

    const FavoritesToggle = (song) => {    
        const isFav = favorites.some(fav => fav.trackID === song.trackID);

        if (isFav) {
            setFavorites(prev => prev.filter(fav => fav.trackID !== song.trackID));

        } else{
        setFavorites(prev => [...prev, song]);
        }
    };
  return {favorites, FavoritesToggle}

};

export default useFavorites;




