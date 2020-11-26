import { combineReducers } from 'redux'
import username from './username'
import category from './category'
import theme from './theme'

export default combineReducers({
  username,
  category,
  theme
})