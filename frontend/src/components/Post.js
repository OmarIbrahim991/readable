import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiOutlineMessage, AiOutlineUpCircle, AiOutlineDownCircle, AiFillDelete, AiFillEdit, AiOutlineStop } from 'react-icons/ai'
import { handlePostVote, handleDeletePost } from '../actions/posts'


const Post = ({ id, timestamp, title, body, author, category, voteScore,
    commentCount, deleted, setNewCommentVisibility, setCurrentId, }) => {

    const dispatch = useDispatch()

    const handleNewComment = () => {
        setCurrentId && setCurrentId(id)
        setNewCommentVisibility(true)
    }

    if (!id) {
        return (
            <div className="post" style={{ alignItems: "center" }}>
                <AiOutlineStop size={100} />
                <h2>This post doesn't exist</h2>
            </div>
        )
    }

    if (deleted) {
        return (
            <div className="post" style={{ alignItems: "center" }}>
                <AiFillDelete size={100} />
                <h2>This post is deleted</h2>
            </div>
        )
    }

    return (
        <div className="post">
            <div className="top-icons">
                <Link to={"/editpost/" + id} style={{ color: "inherit", textDecoration: "inherit" }}>
                    <AiFillEdit size={20} className="top-icon clickable" onClick={() => console.log("clicked")} />
                </Link>
                <AiFillDelete size={20} className="top-icon clickable" onClick={() => dispatch(handleDeletePost(id))} />
            </div>
            <Link to={location => ({ ...location, pathname: "/posts/" + id})} style={{ color: "inherit", textDecoration: "inherit" }}>
                <div className="post-header">
                    <h3>{title}</h3>
                    <p className="small faded cap">Topic: {category}</p>
                </div>
                <div className="post-content">
                    <p>{body}</p>
                    <div className="to-end">
                        <p className="small">Posted by: {author}</p>
                        <p className="small">{new Date(timestamp).toLocaleString()}</p>
                    </div>
                </div>
            </Link>
            <div className="post-footer">
                <div className="post-votes">
                    <AiOutlineUpCircle onClick={() => dispatch(handlePostVote(id, 1))} className="clickable" size={25} />
                    <AiOutlineDownCircle onClick={() => dispatch(handlePostVote(id, -1))} className="clickable" size={25} />
                    <div className="post-counters">{voteScore}</div>
                </div>
                <div className="post-comments">
                    <AiOutlineMessage onClick={handleNewComment} className="clickable" size={25} />
                    <div className="post-counters">{commentCount}</div>
                </div>
            </div>
        </div>
    )
}

export default Post
