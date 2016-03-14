import { combineReducers } from 'redux'
import activity from './activity'
import detail from './detail'
import home from './home'

export default combineReducers({
  activity,
  detail,
  home,
})
