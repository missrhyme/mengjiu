import 'core-js/es6/promise'

//const host = '';
const host = 'http://115.28.68.32:8080'

export function fetch({data, url, type='GET', dataType='json'}){
	return new Promise((resolve, reject) => {
	  $.ajax({
	  	url: `${host}${url}`,
	  	type: type,
	  	dataType: dataType,
	  	data: data,
	  	success: response => {
	  		if(response.status == 200) resolve(response.result)
	  		else reject(response.msg)
	  	},
	  	error : response => reject(response.msg)
	  })
	})
}
