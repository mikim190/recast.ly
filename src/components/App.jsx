import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor (props) {
    super (props);
   
    this.state = { 
      currentVideo: exampleVideoData[0],
      videoList: exampleVideoData
    };
    this.onClick = this.onClick.bind(this);
  }  
  componentDidMount() {
    this.onSearch();
  }
  
  onSearch(term) {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: searchTerms, max: 5}, (data) => {
      this.setState({currentVideo: data[0], videoList: data});
    });
  }

  onClick(videoInd) {
    this.setState({
      currentVideo: this.state.videos[videoInd]
    });
  }
    
  
  render () {
    
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearch={this.onSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
             {this.state.currentVideo !== null ? <VideoPlayer video={this.state.currentVideo}/> : null}        
          </div>
          <div className="col-md-5">
            {this.state.videoList.length > 0 && <VideoList videos={this.state.videoList} onClick={this.onClick.bind(this)}/>}
          </div>
        </div>
      </div>
    );
  }
  
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;



