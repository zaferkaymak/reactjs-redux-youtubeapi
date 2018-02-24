import {combineReducers} from 'redux';
import videoReducer from './videoReducer';
import videoSelectReducer from './selectVideoReducer';

const rootReducer = combineReducers({
    videos: videoReducer,
    selectVideo: videoSelectReducer
});

export default rootReducer;