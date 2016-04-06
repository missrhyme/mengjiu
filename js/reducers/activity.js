import {
	ACTIVITY_GET,
	ACTIVITY_GET_NEXT,
	USER_GET_FAVORLIST
} from '../constants/ActionTypes'

const initialState = {
  activity : [],
	mainlist : []
}

function updateActivity(state, data){
	return $.extend({}, state, {activity : data})
}

function updateNext(state, data){
	return $.extend({}, state, {activity : state.activity.concat(data)})
}

function updateMainList(state, data){
	return $.extend({}, state, {mainlist : data})
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case ACTIVITY_GET:
      return updateActivity(state, action.data);
      break;
		case ACTIVITY_GET_NEXT:
		return updateNext(state, action.data);
			break;
		case USER_GET_FAVORLIST:
			return updateMainList(state, action.data);
			break;
    default:
      return state
  }
}
