import {fetch} from '../utils/ApiUtils'

//获取活动列表
export function getActivities(data){
	return fetch({
		url : '/api/activites',
		data: data
	})
}

//活动单页
export function getDetail(id){
	return fetch({
		url : '/api/getDetail',
		data: {
			id : id
		}
	})
}
