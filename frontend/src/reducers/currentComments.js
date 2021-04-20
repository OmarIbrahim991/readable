import { CREATE_COMMENT, LOAD_CURRENT_COMMENTS, UPDATE_COMMENT } from "../actions/currentComments"


const currentComments = (state=[], action) => {
    switch (action.type) {
        case LOAD_CURRENT_COMMENTS:
            return action.currentComments
        case UPDATE_COMMENT:
            return state.filter(c => c.id !== action.comment.id).concat(action.comment)
        case CREATE_COMMENT:
            return [...state, action.comment]
        default:
            return state
    }
}

export default currentComments
