




var VideoListEntry = (prop) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={prop.list.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{prop.list.snippet.title}</div>
      <div className="video-list-entry-detail">{prop.list.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};


// ReactDOM.render(<VideoList videoLists={React.PropTypes.exampleVideoData}/>, document.getElementById("video-list"));

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
