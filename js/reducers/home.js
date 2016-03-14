import {
	HOME_SLIDER_GET,
} from '../constants/ActionTypes'

const initialState = {
  sliders : []
}

function updateSlider(state, data){
	return $.extend({}, state, {sliders : data})
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case HOME_SLIDER_GET:
      return updateSlider(state, action.data);
      break;
    default:
      return state
  }
}
