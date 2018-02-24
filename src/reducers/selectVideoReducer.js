import {GET_SELECT_VIDEO} from '../actionTypes';

export default function(state="", action){
    switch(action.type){
        case GET_SELECT_VIDEO:
            return action.payload;
        default:
            return state;
    }
}