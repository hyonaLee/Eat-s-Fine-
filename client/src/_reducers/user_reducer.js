import {
  LOGIN_USER
} from '../_actions/types';

export default function(state = {}, action){ //state에 초기값에 action을 request가 들어옴
  switch (action.type) { 
    case LOGIN_USER:
      console.log(action.payload)
      return {...state, loginSuccess: action.payload}
  
    default:
      return state;
  }
}