/**
 * Created by rafael on 21.01.17.
 */
import {
  FETCH_TYPES_BEGIN,
  FETCH_TYPES_END
} from './actionTypes'

const initialState = {
  partTypes: []
}

export default (state = initialState, action)=>{
  switch(action.type){
    case FETCH_TYPES_BEGIN:
      return {
        ...state
      }
    case FETCH_TYPES_END:
      return {
        ...state,
        partTypes: action.types
      }
    default:
      return initialState
  }
}
