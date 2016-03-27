import * as api from '../api/user'
import {
	USER_GET_FAVORLIST,
} from '../constants/ActionTypes'
import createPromiseThunk from '../utils/PromiseThunk'

export function getFavorList(type) {
	return createPromiseThunk( USER_GET_FAVORLIST , () => api.getFavorList(type) )
}
