import * as API from '../utils/api'


export const LOAD_CATEGORIES = "LOAD_CATEGORIES"

const loadCategories = (categories) => ({
    type: LOAD_CATEGORIES,
    categories,
})

export const handleLoadCategories = () =>(dispatch) => {
    API.get("/categories")
    .then(({ categories }) => dispatch(loadCategories(categories)))
}
