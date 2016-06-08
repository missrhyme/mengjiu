import * as api from '../api/user'
import {
	USER_GET_FAVORLIST,
	USER_NEXT_FAVORLIST
} from '../constants/ActionTypes'
import createPromiseThunk from '../utils/PromiseThunk'

export function getFavorList(type) {
	return createPromiseThunk( USER_GET_FAVORLIST , () => api.getFavorList(type) )
}

export function getNextFavorList(type) {
	return createPromiseThunk( USER_NEXT_FAVORLIST , () => api.getFavorList(type) )
}
