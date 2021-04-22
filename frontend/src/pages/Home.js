import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLoadInitialData } from '../actions/shared'
import Post from '../components/Post'
import Header from '../components/Header'
import NewPost from '../components/NewPost'
import CreateButton from '../components/CreateButton'
import NewComment from '../components/NewComment'


const Home = () => {
	const categories = useSelector(state => state.categories)
    const posts = useSelector(state => state.posts)
	const dispatch = useDispatch()

    const [category, selectCategory] = React.useState("all")
    const [order, selectOrder] = React.useState("timestamp")
    const [newPostVisibility, setNewPostVisibility] = React.useState(false)
    const [newCommentVisibility, setNewCommentVisibility] = React.useState(false)
    const [currentId, setCurrentId] = React.useState("")

    React.useEffect(() => {
        dispatch(handleLoadInitialData())
	}, [dispatch])

    const sortedFilteredPosts = (() => {
        let filtered
        if (category && category !== "all") {
            filtered = posts.filter(post => post.category === category)
        }
        else {
            filtered = posts
        }

        return filtered.filter(p => !p.deleted).sort((a,b) => b[order] - a[order])
    })()

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
                {
                    sortedFilteredPosts.length > 0 && sortedFilteredPosts.map((post) => (
                        <Post
                            key={post.id}
                            setCurrentId={setCurrentId}
                            newCommentVisibility={newCommentVisibility}
                            setNewCommentVisibility={setNewCommentVisibility}
                            {...post}
                        />
                    ))
                }
            </ul>
            <NewPost visible={newPostVisibility} setVisibility={setNewPostVisibility} categories={categories} />
            <NewComment visible={newCommentVisibility} setVisibility={setNewCommentVisibility} parentId={currentId} />
            <CreateButton style={{ display: newPostVisibility ? "none" : "block"}} onClick={() => setNewPostVisibility(s => !s)} />
        </div>
    )
}

export default Home
