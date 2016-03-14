export default function createPromiseThunk(type = 'RESOLVE', promiseFuc){
	return (dispatch, getState) => {
		return promiseFuc()
			.then(	
				data => dispatch({
					type : type,
					data : data,
					state: getState()
				}),
				error => dispatch({
					type : 'PROMISE_ERROR',
					data : error,
					state: getState()
				})
			)
	}

}