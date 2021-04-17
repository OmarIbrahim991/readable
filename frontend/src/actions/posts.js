import * as API from '../utils/api'


export const LOAD_POSTS = "LOAD_POSTS"

const loadPosts = (posts) => ({
    type: LOAD_POSTS,
    posts,
})

export const handleLoadPosts = () => (dispatch) => {
    API.get("/posts")
    .then(posts => dispatch(loadPosts(posts)))
}
