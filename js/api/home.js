import {fetch} from '../utils/ApiUtils'

//获取轮播图
export function getSliders(){
	return fetch({
		url : '/api/home/GetSliders'
	})
}
