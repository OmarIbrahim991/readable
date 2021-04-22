import { CREATE_POST, DELETE_POST, LOAD_POST, UPDATE_POST } from "../actions/posts"
import { CREATE_COMMENT } from "../actions/currentComments"
import { LOAD_INITIAL_DATA } from '../actions/shared'


const posts = (state=[], action) => {
    switch (action.type) {
        case LOAD_INITIAL_DATA:
            return action.posts 
        case LOAD_POST:
            return state.filter(p => p.id !== action.post.id).concat(action.post)
        case CREATE_POST:
            return [...state, action.post]
        case UPDATE_POST:
            return state.map(p => p.id === action.post.id ? { ...p, ...action.post } : p)
        case DELETE_POST:
            const [postToDelete] = state.filter(p => p.id === action.id)
            postToDelete.deleted = true
            return state.filter(p => p.id !== action.id).concat(postToDelete)
        case CREATE_COMMENT:
            const [postToModify] = state.filter(p => p.id === action.comment.parentId)
            postToModify.commentCount += 1
            return state.filter(p => p.id !== action.comment.parentId).concat(postToModify)
        default:
            return state
    }
}

export default posts
