import React from 'react'
import { useSelector } from 'react-redux'

const Posts = () => {
    const posts = useSelector(state => state.posts)

    return (
        <div className="container">
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Posts
