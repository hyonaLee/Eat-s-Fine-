import {
  LOGIN_USER,
  LOGOUT_USER,
  AUTH_USER,
  REGISTER_USER,
  ADD_KEEP,
  DELETE_KEEP,
  ADD_COMMENT,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  DELETE_USER,
} from "../_actions/types";

//state에 초기값에 {} 비어있는 오브젝트
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case LOGOUT_USER:
      return { ...state };
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case ADD_KEEP:
      return {
        ...state,
        userData: {
          ...state.userData,
          keep: action.payload,
        },
      };

    case DELETE_KEEP:
      return {
        ...state,
        userData: {
          ...state.userData,
          keep: action.payload,
        },
      };

    case ADD_COMMENT:
      return {
        ...state,
        userData: {
          ...state.userData,
          keep: action.payload,
        },
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        userData: {
          ...state.userData,
        },
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        userData: {
          ...state.userData,
        },
      };

    case DELETE_USER:
      return {
        ...state,
        userData: {
          ...state.userData,
        },
      };
    default:
      return state;
  }
}
