import * as api from '../api/activity'
import {
	ACTIVITY_GET,
	ACTIVITY_DETAIL,
} from '../constants/ActionTypes'
import createPromiseThunk from '../utils/PromiseThunk'

// export function updateUserInfo(data) {
// 	return {
// 		type : USER_UPDATE,
// 		data : data
// 	}
// }
//
// export function pushQuickReply(id, txt){
// 	return {
// 		type : USER_PUSH_QUICKREPLY,
// 		data : {
// 			id : id,
// 			txt: txt
// 		}
// 	}
// }

export function getActivities(id) {
	return createPromiseThunk( ACTIVITY_GET , () => api.getActivities(id) )
}

export function getDetail(id) {
	return createPromiseThunk( ACTIVITY_DETAIL , () => api.getDetail(id) )
}
//
// export function addQuickReply(msg, id) {
// 	return createPromiseThunk( USER_QUICKREPLY_ADD , () => api.addQuickReply(msg, id) )
// }
//
// export function deleteQuickReply(mid, id) {
// 	return createPromiseThunk( USER_QUICKREPLY_DELETE , () => api.deleteQuickReply(mid, id) )
// }

//multi async if need all datas and do something..

// export function updateManyThings(id) {
// 	return (dispatch, getState) => {
// 		Promise.all([
// 			getUserInfo(id),
// 			getHouseType(id),
// 			getQuickReply(id)
// 		]).then(
// 			data => dispatch({
// 				type : USER_UPDATE_MANY,
// 				data : data
// 			})
// 		)
// 	}
// }
