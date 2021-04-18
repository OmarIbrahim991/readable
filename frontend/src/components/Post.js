import React from 'react'
import { AiOutlineMessage, AiOutlineUpCircle, AiOutlineDownCircle, AiOutlineStop } from 'react-icons/ai'


const Post = ({ id, timestamp, title, body, author, category, voteScore, commentCount, deleted }) => {
    if (deleted) {
        return (
            <div className="post">
                <AiOutlineStop size={100} />
                <h2>This post is deleted</h2>
            </div>
        )
    }

    return (
        <div className="post">
            <div className="post-header">
                <h3>{title}</h3>
                <p className="small faded cap">Topic: {category}</p>
            </div>
            <div className="post-content">
                <p>{body}</p>
                <p className="to-end small">Posted by: {author}</p>
                <p className="to-end small">{new Date(timestamp).toLocaleString()}</p>
            </div>
            <div className="post-footer">
                <div className="post-votes">
                    <AiOutlineUpCircle size={25} />
                    <AiOutlineDownCircle size={25} />
                    <div className="post-counters">{voteScore}</div>
                </div>
                <div className="post-comments">
                    <AiOutlineMessage size={25} />
                    <div className="post-counters">{commentCount}</div>
                </div>
            </div>
        </div>
    )
}

export default Post
