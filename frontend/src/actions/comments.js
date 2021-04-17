import * as API from '../utils/api'


export const LOAD_CURRENT_COMMENTS = "LOAD_CURRENT_COMMENTS"

const loadCurrentComments = (comments) => ({
    type: LOAD_CURRENT_COMMENTS,
    comments,
})

export const handleLoadCurrentComments = (postId) => (dispatch) => {
    API.get(`/posts/${postId}/comments`)
    .then(comments => dispatch(loadCurrentComments(comments)))
}
