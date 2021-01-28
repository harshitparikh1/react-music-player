import React, { useState, useEffect } from 'react';
import Player from "./components/Player"

function App() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3"
    },
    {
      title: "On & On",
      artist: "Cartoon",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3"
    },
    {
      title: "The Nights",
      artist: "Avicii",
      img_src: "./images/song-3.jpg",
      src: "./music/Avicii-The-Nights.mp3"
    },
    {
      title: "On my way",
      artist: "Alan Walker",
      img_src: "./images/song-4.jpg",
      src: "./music/On-My-Way.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  // To remove the console error we can use the below code but this causes infinite loop.
  // useEffect(
  //   setNextSongIndex(() => {
  //     if (currentSongIndex + 1 > songs.length - 1) {
  //       return 0;
  //     } else {
  //       return currentSongIndex + 1;
  //     }
  //   })
  // , [currentSongIndex]);

  return (
    <div className="App"> 
        <Player 
            currentSongIndex = {currentSongIndex}
            setCurrentSongIndex = {setCurrentSongIndex}
            nextSongIndex = {nextSongIndex}
            songs = {songs}
        />
    </div>
  );
}

export default App;
