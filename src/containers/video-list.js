import React from 'react'
import VideoListitem from '../components/video-list-item'
//const movies=['film1','film2','film3','film4','film5']
const VideoList= (props) => {

    const movies =
    props && props.movies.length > 0 ? (
      props.movies.map(x => {
        return <p>{x.title} <img alt='text'src={x.poster_path}/></p>;
      })
    ) : (
      <span></span>
    );
  return movies;
}
export default VideoList;
