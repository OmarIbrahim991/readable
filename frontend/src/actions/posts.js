import * as API from '../utils/api'
import { generateID, getTimeStamp } from '../utils/helpers'
import { setLoading } from './loading'


export const CREATE_POST = "CREATE_POST"
export const UPDATE_POST = "UPDATE_POST"
export const DELETE_POST = "DELETE_POST"

const createPost = (post) => ({
    type: CREATE_POST,
    post,
})

const updatePost = (post) => ({
    type: UPDATE_POST,
    post,
})

const deletePost = (id) => ({
    type: DELETE_POST,
    id,
})

export const handleCreatePost = (params) => (dispatch) => {
    dispatch(setLoading())
    const id = generateID()
    const timestamp = getTimeStamp()

    API.post("/posts", { id, timestamp, ...params})
    .then(post => dispatch(createPost(post)))
}

export const handlePostVote = (id, value) => (dispatch) => {
    API.post("/posts/" + id, { option: value === 1 ? "upVote" : "downVote" })
    .then(post => dispatch(updatePost(post)))
}

export const handleDeletePost = (id) => (dispatch) => {
    API.remove("/posts/" + id)
    .then(response => response.ok && dispatch(deletePost(id)))
}
