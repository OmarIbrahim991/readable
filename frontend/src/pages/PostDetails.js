import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { handleLoadCurrentComments } from '../actions/currentComments'
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
        dispatch(handleLoadCurrentComments(id))
    }, [dispatch, id])

    return (
        <div className="post-details">
            <nav className="nav">
                <Link to="/" style={{ color: "inherit", textDecoration: "inherit", display: "flex", alignItems: "center" }}>
                    <AiOutlineArrowLeft className="top-icon clickable" size={35} />
                    <h3>Home</h3>
                </Link>
            </nav>
            <Post setNewCommentVisibility={setNewCommentVisibility} {...postParams} />
            {
                comments.length === 0 ? <h2 className="centered-header">There are no comments on this post.</h2> :
                <>
                    <h2 className="centered-header">Comments</h2>
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
