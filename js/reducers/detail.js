import {
	ACTIVITY_DETAIL,
  ACTIVITY_DETAIL_ADD_FAVOR,
  ACTIVITY_DETAIL_REMOVE_FAVOR
} from '../constants/ActionTypes'

const initialState = {
    title: '',
    images: [],
    startTime : 0,
		endTime : 0,
    location : '',
    view : 0,
    like : 0,
    subtitle: '',
    author: '',
    tel : '',
    email : '',
    qq: '',
    detail : '',
    isFavor: 0
}

function updateDetail(state, data){
	return $.extend({}, state, data)
}

function updateFavor(state, isFavor){
  return $.extend({}, state, { isFavor: isFavor })
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case ACTIVITY_DETAIL:
      return updateDetail(state, action.data);
      break;
    case ACTIVITY_DETAIL_ADD_FAVOR:
      return updateFavor(state, 1);
      break;
    case ACTIVITY_DETAIL_REMOVE_FAVOR:
      return updateFavor(state, 0);
      break;
    default:
      return state
  }
}
