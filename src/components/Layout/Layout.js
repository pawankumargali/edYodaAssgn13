import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import PlayList from '../PlayList/PlayList'
import classes from './Layout.module.css';

function Layout({match}) {
  const { videoId } = match.params;
  const [currentVideoId, setCurrentVideoId] = useState('');

  const [playlist, setPlaylist] = useState([]);
  const [isPlaylistSet, setIsPlaylistSet] = useState(false);


  const initPlaylist = async () => {
      const { data } = await axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist');
      // console.log(data);
      const currentVideo = !videoId ? data[0].id :videoId;
      setCurrentVideoId(currentVideo);
      setPlaylist(data);
      setIsPlaylistSet(true);
  }

  useEffect(() => {
    if(!isPlaylistSet)
      initPlaylist();
  },[isPlaylistSet, currentVideoId]);

  // useEffect(() => {
  //   if(isPlaylistSet && !currentVideoId)
  //     setCurrentVideoId(playlist[0].id);

  // },[currentVideoId, isPlaylistSet])

    return <main>
             <div className={classes.MainContainer}>
                <Link to='/'><span className={classes.BackToHomePage}>Back to Home</span></Link>
                <h1 className={classes.MainHeading}>The Video Player</h1>
              <div className={classes.PlayerSection}>
              <VideoPlayer 
                currentVideoId={currentVideoId}
              />
              <PlayList 
                playlist={playlist}
                currentVideoId={currentVideoId}
                setCurrentVideoId={setCurrentVideoId}
              />
              </div>
            </div>
           </main>;
}

export default Layout;