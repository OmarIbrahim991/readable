import * as API from '../utils/api'
import { generateID, getTimeStamp } from '../utils/helpers'
import { setLoading } from './loading'


export const LOAD_POST = "LOAD_POST"
export const CREATE_POST = "CREATE_POST"
export const UPDATE_POST = "UPDATE_POST"

const createPost = (post) => ({
    type: CREATE_POST,
    post,
})

const updatePost = (post) => ({
    type: UPDATE_POST,
    post,
})

export const handleLoadPost = (id) => (dispatch) => {
    API.get("/posts/" + id)
    .then(post => dispatch(updatePost(post)))
}

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
