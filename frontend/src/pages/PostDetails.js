import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLoadCurrentComments } from '../actions/currentComments'
import { handleLoadPost } from '../actions/posts'
import Comment from '../components/Comment'
import NewComment from '../components/NewComment'
import Post from '../components/Post'


const PostDetails = ({ match }) => {
    const { id } = match.params
    const [postParams] = useSelector(state => state.posts.filter(p => p.id === id))
    const comments = useSelector(state => state.currentComments.filter(c => c.parentId === id).sort((a,b) => b.timestamp - a.timestamp))
    const [newCommentVisibility, setNewCommentVisibility] = React.useState(false)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(handleLoadPost(id))
        dispatch(handleLoadCurrentComments(id))
    }, [dispatch, id])

    return (
        <div className="post-details">
            <Post setNewCommentVisibility={setNewCommentVisibility} {...postParams} />
            {
                comments.length === 0 ? <h2>There are no comments on this post yet.</h2> :
                <>
                    <h2 style={{ textAlign: "center", margin: "1.5em 1.5em 0.5em" }}>Comments</h2>
                    <ul className="vertical comments">
                        {
                            comments.map((comment) => (
                                <Comment key={comment.id} {...comment} />
                            ))
                        }
                    </ul>
                </>
            }
            <NewComment visible={newCommentVisibility} setVisibility={setNewCommentVisibility} parentId={id} />
        </div>
    )
}

export default PostDetails
