import React from 'react'
import VideoListitem from '../components/video-list-item'
//const movies=['film1','film2','film3','film4','film5']

const Image_Access_Point='https://image.tmdb.org/t/p/w500';
const VideoList= (props) => {

    const movies =
    props && props.movies.length > 0 ? (
      props.movies.map(x => {
        return <p> <h3>{x.title}</h3> <img alt='text'src={Image_Access_Point+x.poster_path}/><p>{x.overview}</p></p>;
      })
    ) : (
      <span></span>
    );
  return movies;
}
export default VideoList;
