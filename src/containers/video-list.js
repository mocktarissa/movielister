import React from 'react'
import VideoListitem from '../components/video-list-item'
const movies=['film1','film2','film3','film4','film5']
const VideoList= () => {
    return (
        <div>
            <ul>
                {
                    movies.map(movies=>{
                        return <VideoListitem  key={movies}title={movies}/>
                    })

                    
                
                }
            </ul>
        </div>
    );
}
export default VideoList;
