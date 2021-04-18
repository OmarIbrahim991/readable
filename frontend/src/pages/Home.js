import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLoadInitialData } from '../actions/shared'
import Loading from './Loading'
import Post from '../components/Post'
import Header from '../components/Header'


const Home = () => {
	const categories = useSelector(state => state.categories)
    const posts = useSelector(state => state.posts)
    const loading = useSelector(state => state.loading)
	const dispatch = useDispatch()

    const [category, selectCategory] = React.useState("all")
    const [order, selectOrder] = React.useState("datetime")

    React.useEffect(() => {
        dispatch(handleLoadInitialData())
	}, [dispatch])

    if (loading) { return <Loading />}
    return(
        <div className="container">
            <Header
                category={category}
                selectCategory={selectCategory}
                order={order}
                selectOrder={selectOrder}
                categories={categories}
            />
            <ul className="vertical">
                {posts.map(post => <Post key={post.id} {...post} />)}
            </ul>
        </div>
    )
}

export default Home
