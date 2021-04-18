import * as API from '../utils/api'


export const LOAD_CURRENT_COMMENTS = "LOAD_CURRENT_COMMENTS"

const loadCurrentComments = (currentComments) => ({
    type: LOAD_CURRENT_COMMENTS,
    currentComments,
})

export const handleLoadCurrentComments = (postId) => (dispatch) => {
    API.get(`/posts/${postId}/comments`)
    .then(currentComments => dispatch(loadCurrentComments(currentComments)))
}
