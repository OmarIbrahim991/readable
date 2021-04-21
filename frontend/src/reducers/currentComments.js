import { CREATE_COMMENT, DELETE_COMMENT, LOAD_CURRENT_COMMENTS, UPDATE_COMMENT } from "../actions/currentComments"
import { DELETE_POST } from "../actions/posts"


const currentComments = (state=[], action) => {
    switch (action.type) {
        case LOAD_CURRENT_COMMENTS:
            return action.currentComments
        case UPDATE_COMMENT:
            return state.filter(c => c.id !== action.comment.id).concat(action.comment)
        case CREATE_COMMENT:
            return [...state, action.comment]
        case DELETE_POST:
            return state.map(c => c.parentId === action.id ? { ...c, parentDeleted: true, } : c)
        case DELETE_COMMENT:
            return state.filter(c => c.id !== action.id)
        default:
            return state
    }
}

export default currentComments
