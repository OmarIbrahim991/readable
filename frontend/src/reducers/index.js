import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import currentComments from './currentComments'


export default combineReducers({ categories, posts, currentComments, })
