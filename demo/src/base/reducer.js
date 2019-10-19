import { combineReducers } from 'redux'
import {INNDEX_ADD} from './actionTypes'


const dafaultState = {
    number:1
}

let indexReducer=(state = dafaultState, action) =>{
    switch (action.type) {
        case INNDEX_ADD:
                // console.log(action);
            return {
                number:state.number+1
            }
        default:
          return state
    } 
}


export default combineReducers(indexReducer)