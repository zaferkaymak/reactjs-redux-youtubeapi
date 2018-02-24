import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {getSelectVideo} from '../actions/listAction';


class VideoDetail extends Component {
    constructor(props){
        super(props);
        this.renderVideoHTML = this.renderVideoHTML.bind(this);
    }
    renderVideoHTML(){
        const videoList = this.props.videoList;
        let selectedVideo = "";
        if(videoList.length > 0){
            selectedVideo = this.props.videoList[0];
            if(this.props.selectVideo !== ""){
                selectedVideo = this.props.selectVideo;
            }
            const title = selectedVideo.snippet.title;
            const description = selectedVideo.snippet.description;
            const videoURL  = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
            return (
                <div className="in">
                    <h2 className="title">Video Player</h2>
                    <div className="video-player">
                        <iframe title="videoplayers" src={videoURL}></iframe>
                    </div>
                    <span className="video-title">{title}</span>
                    <span className="video-description">{description}</span>
                </div>
            )
        }
    }
    render(){
        return (
            <div className="video-detail">
                {this.renderVideoHTML()}
            </div>
        )
    }
}

function mapStateToProps(state,ownProps){
    return {
        videoList: state.videos,
        selectVideo: state.selectVideo
    }
}

export default connect(mapStateToProps,{getSelectVideo})(VideoDetail);;
