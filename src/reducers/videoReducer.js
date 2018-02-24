import {GET_VIDEO_LIST} from '../actionTypes';

export default function(state={}, action){
    switch(action.type){
        case GET_VIDEO_LIST:
            return action.payload;
        default:
            return state;
    }
}