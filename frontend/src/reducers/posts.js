import { LOAD_POSTS } from "../actions/posts";
import { LOAD_INITIAL_DATA } from '../actions/shared'


const posts = (state=[], action) => {
    switch (action.type) {
        case LOAD_INITIAL_DATA:
            return action.posts
        case LOAD_POSTS:
            return action.posts
        default:
            return state
    }
}

export default posts
