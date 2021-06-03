import axios from 'axios';
import {
  LOGIN_USER
} from './types';

//dispatch요청으로 loginUser() 함수를 액션 
export function loginUser(dataToSubmit){ //dataToSumit 파라미터는 let body의 email과 password 오브젝트를 받아온 것 
  
  //axios로 서버에 요청하고 응답받은 response.data를 request에 저장함
  const request = axios.post('./api/users/login', dataToSubmit)
    .then(response => response.data) 

  //request에 저장이 되면 reducer에 넘겨줌(user_reducer.js)
  return {
    type: LOGIN_USER,  //types.js에서 타입을 가져옴(따로 모아두어서 정리)
    payload: request
  }

}