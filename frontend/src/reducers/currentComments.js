import { LOAD_CURRENT_COMMENTS } from "../actions/currentComments";


const currentComments = (state=[], action) => {
    switch (action.type) {
        case LOAD_CURRENT_COMMENTS:
            return action.currentComments
        default:
            return state
    }
}

export default currentComments
