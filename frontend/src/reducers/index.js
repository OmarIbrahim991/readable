import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import currentComments from './currentComments'
import loading from './loading'


export default combineReducers({ categories, posts, currentComments, loading, })
