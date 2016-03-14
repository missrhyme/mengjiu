import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import '../css/index.css'
import reducer from './reducers'
import Root from './Root'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducer)

const rootEle = document.getElementById('root')

render(
	<Provider store={store}>
		<Root />
	</Provider>,
	rootEle
)
