import {combineReducers} from 'redux'
import dogReducers from './dogReducers'

const allReducers = combineReducers({
    dogReducers,
    //and so on
})

export default allReducers;