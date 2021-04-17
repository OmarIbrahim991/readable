import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLoadCategories } from '../actions/categories'
import { handleLoadCurrentComments } from '../actions/comments'
import { handleLoadPosts } from '../actions/posts'


const Home = () => {
	const categories = useSelector(state => state.categories)
    const posts = useSelector(state => state.posts)
	const dispatch = useDispatch()

    React.useEffect(() => {
		dispatch(handleLoadCategories())
        dispatch(handleLoadPosts())
        dispatch(handleLoadCurrentComments("8xf0y6ziyjabvozdd253nd"))
	}, [dispatch])

    const handleClick = () => {
        dispatch(handleLoadCategories())
        dispatch(handleLoadPosts())
    }
    return(
        <div>
            <h1>Categories</h1>
            <p>{JSON.stringify(categories)}</p>
            <h1>Posts</h1>
            <p>{JSON.stringify(posts)}</p>
            <button onClick={handleClick}>Reload</button>
        </div>
    )
}

export default Home
