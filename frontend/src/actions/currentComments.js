import * as API from '../utils/api'
import { generateID, getTimeStamp } from '../utils/helpers'


export const LOAD_CURRENT_COMMENTS = "LOAD_CURRENT_COMMENTS"
export const CREATE_COMMENT = "CREATE_COMMENT"
export const UPDATE_COMMENT = "UPDATE_COMMENT"
export const DELETE_COMMENT = "DELETE_COMMENT"

const loadCurrentComments = (currentComments) => ({
    type: LOAD_CURRENT_COMMENTS,
    currentComments,
})

const createComment = (comment) => ({
    type: CREATE_COMMENT,
    comment,
})

const updateComment = (comment) => ({
    type: UPDATE_COMMENT,
    comment,
})

const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    id,
})

export const handleLoadCurrentComments = (postId) => (dispatch) => {
    API.get(`/posts/${postId}/comments`)
    .then(currentComments => dispatch(loadCurrentComments(currentComments)))
}

export const handleCreateComment = ({ body, author, parentId}) => (dispatch) => {
    const id = generateID()
    const timestamp = getTimeStamp()
    API.post("/comments", { id, timestamp, body, author, parentId })
    .then(comment => dispatch(createComment(comment)))
}

export const handleCommentVote = (id, value) => (dispatch) => {
    API.post("/comments/" + id, { option: value === 1 ? "upVote" : "downVote" })
    .then(comment => dispatch(updateComment(comment)))
}

export const handleDeleteComment = (id) => (dispatch) => {
    API.remove("/comments/" + id)
    .then(resp => resp.ok && dispatch(deleteComment(id)))
}