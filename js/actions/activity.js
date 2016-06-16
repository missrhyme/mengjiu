import * as api from '../api/activity'
import {
	ACTIVITY_GET,
	ACTIVITY_GET_NEXT,
	ACTIVITY_DETAIL,
	ACTIVITY_DETAIL_ADD_FAVOR,
	ACTIVITY_DETAIL_REMOVE_FAVOR,
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

export function getActivities(data) {
	return createPromiseThunk( ACTIVITY_GET , () => api.getActivities(data) )
}

export function getDetail(id) {
	return createPromiseThunk( ACTIVITY_DETAIL , () => api.getDetail(id) )
}

export function getActivitiesNext(data){
	return createPromiseThunk( ACTIVITY_GET_NEXT , () => api.getActivities(data) )
}

export function addDetailFavor(id){
	return createPromiseThunk( ACTIVITY_DETAIL_ADD_FAVOR , () => api.addFavor(id, 'add') )
}

export function removeDetailFavor(id){
	return createPromiseThunk( ACTIVITY_DETAIL_REMOVE_FAVOR , () => api.addFavor(id, 'remove') )
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
