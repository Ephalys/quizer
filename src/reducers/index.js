import { combineReducers } from 'redux'
import username from './username'
import search from './search'
import theme from './theme'

export default combineReducers({
  username,
  search,
  theme
})