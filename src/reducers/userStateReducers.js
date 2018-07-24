import {
  LOAD_USER_DATA
} from '../actions/userDataActions'

import {
  REQUEST_LOGIN, LOGIN_FAILED, LOGIN_COMPLETED
} from '../actions/userStateActions'

function userStateReducers(state = {waiting: false, message: ''}, action){
  switch(action.type){
    case REQUEST_LOGIN:
      if(state === null){
        return state
      }
      state.waiting = true
      return state
    case LOGIN_COMPLETED:
      if(state === null){
        return state
      }
      state.waiting = false
    case LOGIN_FAILED:
      if(state === null){
        return state
      }
      state.waiting = false
      state.message = action.message
    default:
      return state
  }
}

export default userStateReducers