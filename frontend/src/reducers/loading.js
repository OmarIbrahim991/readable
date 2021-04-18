import { SET_LOADING } from "../actions/loading";


const loading = (state=false, action) => {
    switch (action.type) {
        case SET_LOADING:
            return true
        default:
            return false
    }
}

export default loading
