import React,{Component} from 'react';

import SearchBar from '../components/search-bar';
import VideoList from '../containers/video-list';
import axios from 'axios';
import VideoDetail from '../components/video-detail';
import VideoListItem from '../components/video-list-item'

const API_END_POINT ="https://api.themoviedb.org/3/";
const POPULAR_MOVIES_URL="discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
const API_key="d9f908a5cf269dd087d047d4dd385bd0";
class App extends Component{
  constructor(props){
    super(props)
    this.state={movies:{},currentMovie:{}}
  }
  componentDidMount(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}${API_key}`).then(function(response){
      console.log('',response.data.results.slice(1,6))
      this.setState({currentMovie:response.data.results[0], movies:response.data.results.slice(1,6)})
    }.bind(this))
  }
  render (){
  
  return(
  <div> 
    
    <SearchBar></SearchBar>
   
    <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
    <VideoListItem movies={this.state.movies[0]}/>
  </div>
  );  
    }
}

export default App;
