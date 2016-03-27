import {fetch} from '../utils/ApiUtils'

//获取活动列表
export function getActivities(data){
	return fetch({
		url : '/api/activity/GetActivities',
		data: data
	})
}

//活动单页
export function getDetail(id){
	return fetch({
		url : '	/api/activity/GetDetail',
		data: {
			id : id
		}
	})
}

//收藏！
export function addFavor(id, action = 'add'){
	return fetch({
		url : '	/api/user/AddFavor',
		type: 'POST',
		data: {
			id     : id,
			action : action
		}
	})
}
