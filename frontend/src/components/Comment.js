import React from 'react'
import { useDispatch } from 'react-redux'
import { AiOutlineUpCircle, AiOutlineDownCircle, AiOutlineStop } from 'react-icons/ai'
import { handleCommentVote } from '../actions/currentComments'


const Comment = ({ id, timestamp, body, author, voteScore, deleted }) => {
    const dispatch = useDispatch()

    if (deleted) {
        return (
            <div className="comment">
                <AiOutlineStop size={100} />
                <h2>This comment is deleted</h2>
            </div>
        )
    }

    return (
        <div className="comment">
            <div className="comment-content">
                <h3>{author}: </h3>
                <p>{body}</p>
                <p className="small to-end">{new Date(timestamp).toLocaleString()}</p>
            </div>
            <div className="comment-footer">
                <AiOutlineUpCircle onClick={() => dispatch(handleCommentVote(id, 1))} className="clickable" size={25} />
                <AiOutlineDownCircle onClick={() => dispatch(handleCommentVote(id, -1))} className="clickable" size={25} />
                <div className="post-counters">{voteScore}</div>
            </div>
        </div>
    )
}

export default Comment
