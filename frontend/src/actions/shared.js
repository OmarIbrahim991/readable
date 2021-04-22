import * as API from '../utils/api'


export const LOAD_INITIAL_DATA = "LOAD_INITIAL_DATA"

const loadInitialData = ({ categories, posts }) => ({
    type: LOAD_INITIAL_DATA,
    categories,
    posts,
})

export const handleLoadInitialData = () => (dispatch) => {
    Promise.all([API.get("/categories"), API.get("/posts")])
    .then(([{ categories }, posts]) => dispatch(loadInitialData({ categories, posts })))
}
