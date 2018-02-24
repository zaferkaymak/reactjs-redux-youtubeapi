import React, {Component} from 'react';
import VideoDetail from './video-detail';
import VideoList from './video-list';
class MainSection extends Component {
    render(){
        return (
            <main className="main-section">
                <div className="row">
                    <div className="col-md-8">
                        <VideoDetail />
                    </div>
                    <div className="col-md-4">
                        <VideoList />
                    </div>
                </div>
            </main>
        )
    }
}

export default MainSection;