import {
	ACTIVITY_DETAIL,
} from '../constants/ActionTypes'

const initialState = {
    title: '',
    image: [],
    time : 0,
    location : '',
    view : 0,
    like : 0,
    subtitle: '',
    author: '',
    tel : '',
    email : '',
    qq: '',
    detail : ''
}

function updateDetail(state, data){
	return $.extend({}, state, data)
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case ACTIVITY_DETAIL:
      return updateDetail(state, action.data);
      break;
    default:
      return state
  }
}
