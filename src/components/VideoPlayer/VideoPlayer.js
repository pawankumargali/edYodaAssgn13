import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './VideoPlayer.module.css';

function VideoPlayer({currentVideoId}) {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [views, setViews] = useState(0);
    const [videoSrc, setVideoSrc] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);


    const videoSrcUrl = 'https://player.vimeo.com/video/';
    const updateVideo = async () => {
        const { data } = await axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${currentVideoId}`);
        setTitle(data.title);
        setDescription(data.description);
        setViews(data.views);
        setIsLiked(data.isLiked);
        setIsSaved(data.isSaved);
        setVideoSrc(videoSrcUrl+data.vimeoId);
    }

    useEffect(() => {
        if(currentVideoId) 
            updateVideo();
    },[currentVideoId,videoSrc]);

    return  <div className={classes.PlayerWrapper}>
                <iframe className={classes.VideoPlayer} src={videoSrc} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>

                <div>
                <div className={classes.VideoActions}>
                    <p><span id="views-count" >{((views/1000) < 1) ? (views) : (Math.round(views/1000)+'K')}</span> views</p>

                    <div>
                    <i  style={{color:'#FAD744'}}
                        className={isLiked ? "fas fa-heart" : "far fa-heart"}
                    >
                    </i>
                    <i className="far fa-comment-alt"></i>
                    <i  style={{color:'#FAD744'}}
                        className={isSaved ? "fas fa-bookmark" : "far fa-bookmark"}>
                    </i>
                    </div>
                </div>
                <h3 className={classes.VideoTitle}>{title}</h3>
                <p className={classes.VideoDescription}>{description}</p>
                </div>
            </div>;
}

export default VideoPlayer;