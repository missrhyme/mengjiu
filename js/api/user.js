import {fetch} from '../utils/ApiUtils'

//获取我的收藏
export function getFavorList(type = 1){
	return fetch({
		url : '/api/user/GetFavorList',
    data: {
      type : type
    }
	})
}

//login
export function userLogin(){
	return fetch({
		url : '/api/user/Login',
    data: {
      ticket : 1
    }
	})
}
