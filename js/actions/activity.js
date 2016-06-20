import * as api from '../api/activity'
import {
	ACTIVITY_GET,
	ACTIVITY_GET_NEXT,
	ACTIVITY_DETAIL,
	ACTIVITY_CAMPUS,
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

//获取活动列表
export function getActivities(data) {
	return createPromiseThunk( ACTIVITY_GET , ()=>api.getActivities(data) )
}

//获取活动详情
export function getDetail(id) {
	return createPromiseThunk( ACTIVITY_DETAIL , ()=>api.getDetail(id) )
}

//活动列表翻页
export function getActivitiesNext(data){
	return createPromiseThunk( ACTIVITY_GET_NEXT , ()=>api.getActivities(data) )
}

//添加收藏
export function addDetailFavor(id){
	return createPromiseThunk( ACTIVITY_DETAIL_ADD_FAVOR , ()=>api.addFavor(id, 'add') )
}

//取消收藏
export function removeDetailFavor(id){
	return createPromiseThunk( ACTIVITY_DETAIL_REMOVE_FAVOR , ()=>api.addFavor(id, 'remove') )
}

//更新现在所选的校区
export function updateCampus(target) {
	return {
		type : ACTIVITY_CAMPUS,
		data : target
	}
}
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
