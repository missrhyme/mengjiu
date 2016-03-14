import {
	ACTIVITY_GET,
} from '../constants/ActionTypes'

const initialState = {
  activity : []
}

function updateActivity(state, data){
	return $.extend({}, state, {activity : data})
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case ACTIVITY_GET:
      return updateActivity(state, action.data);
      break;
    default:
      return state
  }
}
