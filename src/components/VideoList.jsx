import VideoListEntry from './VideoListEntry.js';

// class VideoListItem extends React.Component {
//   constructor (props) { //props = exampleVideoData
//     super(props); 
//   }

//   render () {
//     return (
//         <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     );
//   }
// }

// var VideoList = function (props) { //[{1},{2},{3}]
//   return props.map(function(prop) {  // {1}--{2}
//     return VideoListEntry(prop); //{1'} --{2'}
//   });
// } 

// //{1'} {2'} {3'}
// VideoList(exampleVideoData)
//----------
var VideoList = (props) => (
  <div className='video-list'>
    {props.videos.map(prop => 
    // console.log('prop',prop)
      <VideoListEntry onClick={function () {console.log('hello')}} video={prop}/>
    )}
  </div>
);

// console.log('hello')
// var VideoList = () => (
//   <div className="video-list">
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//   </div>
// );

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

