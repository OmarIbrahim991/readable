import { LOAD_CURRENT_COMMENTS } from "../actions/comments";


const comments = (state=[], action) => {
    switch (action.type) {
        case LOAD_CURRENT_COMMENTS:
            return action.comments
        default:
            state
    }
}

export default comments
