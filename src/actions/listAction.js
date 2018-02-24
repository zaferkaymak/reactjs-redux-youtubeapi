import {GET_VIDEO_LIST,GET_SELECT_VIDEO} from '../actionTypes';
import axios from 'axios';

export function getVideoList(keyword){
    return dispatch => {
        const API_KEY = 'AIzaSyBU1DSmK9WP9gdasPQl9tUTmW60zpOMEJE';
        const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
        const selectValue = keyword;
        const params = {
            part: 'snippet',
            key: API_KEY,
            q: selectValue,
            type: 'video'
        };
        axios.get(YOUTUBE_URL,{ params: params })
        .then(function (response) {
            dispatch({
                type:GET_VIDEO_LIST,
                payload:response.data.items
            })
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export function getSelectVideo(video){
    return dispatch => {
        dispatch({
            type:GET_SELECT_VIDEO,
            payload:video
        })
    }
}