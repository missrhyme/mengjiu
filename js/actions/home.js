import * as api from '../api/home'
import {
	HOME_SLIDER_GET,
} from '../constants/ActionTypes'
import createPromiseThunk from '../utils/PromiseThunk'

export function getSliders() {
	return createPromiseThunk( HOME_SLIDER_GET , () => api.getSliders() )
}
