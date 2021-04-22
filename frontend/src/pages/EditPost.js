import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { handleLoadInitialData } from '../actions/shared'
import { handleEditPost } from '../actions/posts'
import Button from '../components/Button'
import Input from '../components/Input'


const EditPost = ({ history }) => {
    const { id } = useParams()
    const post = useSelector(state => state.posts.filter(p => p.id === id)[0])

    const [title, setTitle] = React.useState(post ? post.title : "")
    const [body, setBody] = React.useState(post ? post.body : "")
    const categories = useSelector(state => state.categories)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleEditPost({ id, title, body }))
        history.push("/")
    }

    const isDisabled = () => post.author.length === 0 || title.length === 0 || body.length === 0 || post.category.length === 0

    React.useEffect(() => {
        dispatch(handleLoadInitialData())
    }, [dispatch])

    if (!post || Object.keys(post).length === 0) { return <h1>This post doesn't exist</h1>}

    return (
        <div className="edit-post">
            <nav className="nav">
                <Link to="/" style={{ color: "inherit", textDecoration: "inherit", display: "flex", alignItems: "center" }}>
                    <AiOutlineArrowLeft className="top-icon clickable" size={35} />
                    <h3>Home</h3>
                </Link>
            </nav>
            <form className="form">
                <h1>Edit Post</h1>
                <Input text={post.author} type="text" label="Author: " placeholder="Author" disabled />
                <Input text={title} setText={setTitle} type="text" label="Title: " placeholder="Title" />
                <Input text={body} setText={setBody} type="text" label="Body: " placeholder="Body" />
                <div>
                    <label htmlFor="category-form">Category: </label>
                    <select id="category-form" value={post.category} disabled>
                        <option value="">...</option>
                        {
                            categories.map(({ name }) => (
                                <option key={name} value={name}>{name.toUpperCase()}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <Button disabled={isDisabled()} onClick={handleSubmit}>Edit Post</Button>
                </div>
            </form>
        </div>
    )
}

export default EditPost
