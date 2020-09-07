import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './PlayList.module.css';
import VideoCard from '../VideoCard/VideoCard';


function PlayList({currentVideoId, setCurrentVideoId, playlist}) {

    const handleClick = videoId => {
        setCurrentVideoId(videoId);
    }

    return  <div className={classes.PlayListWrapper}
                style={{maxHeight:'800px', overflowY:'scroll'}}
            >
                {playlist.map(({id, thumbnail, title}) =>
                <div key={id} 
                    
                    onClick={() => handleClick(id)}
                >
                    <VideoCard
                        className={(id===currentVideoId) ? (classes.ActiveCard+' '+classes.PlaylistCard) : (classes.PlaylistCard)}
                        // className={classes.PlaylistCard}
                        key={id}
                        thumbnail={thumbnail}
                        title={title} 

                    />
                </div>
                )}
            </div>;
}

export default PlayList;