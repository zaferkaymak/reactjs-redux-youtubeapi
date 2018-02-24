import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {getVideoList,getSelectVideo} from '../actions/listAction';

class HeaderSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchKeyword : 'React JS'
        }
        this.searchChange = this.searchChange.bind(this);
    }
    componentDidMount(){
        this.props.getVideoList(this.state.searchKeyword);
    }
    searchChange(e){
        const selectValue = e.target.value;
        this.setState({
            [e.target.name]: selectValue
        });
        this.props.getVideoList(selectValue);
        this.props.getSelectVideo("");
    }
    render(){
        return (
            <header className="main-header">
                <h1 className="title">{this.props.title}</h1>
                <p className="head-description">{this.props.description}</p>
                <form>
                    <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                        <input
                            onChange={this.searchChange} 
                            className="form-control input-style"
                            type="text" 
                            name="searchKeyword" 
                            value={this.state.searchKeyword}
                            placeholder="Youtube Search..."
                        />
                        </div>                
                    </div>
                    </div>
                </form>
            </header>
        )
    }
}


function mapStateToProps(state,ownProps){
    return {
        video: state.videos
    }
}
export default connect(mapStateToProps, {getVideoList,getSelectVideo})(HeaderSection);;
