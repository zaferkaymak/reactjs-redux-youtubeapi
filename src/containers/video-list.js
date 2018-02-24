import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {getSelectVideo} from '../actions/listAction';


class VideoList extends Component {
    constructor(props){
        super(props);
        this.renderListingHtml = this.renderListingHtml.bind(this);
        this.changeSelectVideo = this.changeSelectVideo.bind(this);
    }
    changeSelectVideo(video){
        this.props.getSelectVideo(video);
    }
    renderListingHtml(){
        const videoList = this.props.videoList;
        if(videoList.length > 0){
            return videoList.map((value,key)=>{
                return (
                    <li onClick={()=>{this.changeSelectVideo(value)}} key={key}>
                        <figure>
                            <img src={value.snippet.thumbnails.default.url} alt="" />
                        </figure>
                        <span className="video-name">{value.snippet.title}</span>
                    </li>
                )
            });
        }
    }
    render(){
        return (
            <div className="listing-section">
                <h2 className="title">Video Listesi</h2>
                <ul>
                    {this.renderListingHtml()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state,ownProps){
    return {
        videoList: state.videos
    }
}

export default connect(mapStateToProps,{getSelectVideo})(VideoList);;
