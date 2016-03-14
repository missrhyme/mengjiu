import 'core-js/es6/promise'

export function fetch({data, url, type='GET', dataType='json'}){
	return new Promise((resolve, reject) => {
	  $.ajax({
	  	url: url,
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