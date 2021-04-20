import { LOAD_INITIAL_DATA } from '../actions/shared'


const categories = (state=[], action) => {
    switch (action.type) {
        case LOAD_INITIAL_DATA:
            return action.categories
        default:
            return state
    }
}

export default categories
