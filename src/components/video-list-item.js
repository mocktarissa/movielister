import React from 'react'

const VideoListitem=({movies})=>{
    console.log('This is ',movies);
        return <p>title={movies.toString()}</p> 
}

export default VideoListitem;