import { combineReducers } from 'redux';
import naviReducer from './navi/navi.reducer';

export default combineReducers({
    navi: naviReducer
});