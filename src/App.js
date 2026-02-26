import Header from "./components/Header/index";
import SongList from "./components/SongList/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header appName="MediaPlayerApp" />  
      <SongList />   

    </div>
  );
}

export default App;
