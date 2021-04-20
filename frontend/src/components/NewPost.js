import React from 'react'
import { useDispatch } from 'react-redux'
import { handleCreatePost } from '../actions/posts'
import Button from './Button'
import Input from './Input'


const NewPost = ({ categories, visible, setVisibility }) => {
    const [author, setAuthor] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [body, setBody] = React.useState("")
    const [category, selectCategory] = React.useState("")
    const dispatch = useDispatch()

    React.useEffect(() => {
        if (visible === true) {
            document.body.classList.add("blacked")
            document.querySelectorAll(".header select").forEach(s => s.classList.add("blacked"))
        }
        else {
            document.body.classList.remove("blacked")
            document.querySelectorAll(".header select").forEach(s => s.classList.remove("blacked"))
        }
    })

    const closePopup = (e) => {
        e.preventDefault()
        setVisibility(false)
    }

    const isDisabled = () => author.length === 0 || title.length === 0 || body.length === 0 || category.length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleCreatePost({ author, title, body, category }))
        closePopup(e)
    }

    return (
        <div className={"new-popup " + (visible ? "visible" : "invisible")}>
            
            <form className="popup-form">
                <h1 className="close-icon clickable" onClick={closePopup}>X</h1>
                <h1>Create New Post</h1>
                <Input text={author} setText={setAuthor} type="text" label="Author: " placeholder="Author" />
                <Input text={title} setText={setTitle} type="text" label="Title: " placeholder="Title" />
                <Input text={body} setText={setBody} type="text" label="Body: " placeholder="Body" />
                <div>
                    <label htmlFor="category-form">Category: </label>
                    <select id="category-form" value={category} onChange={e => selectCategory(e.target.value)}>
                        <option value="">...</option>
                        {
                            categories.map(({ name }) => (
                                <option key={name} value={name}>{name.toUpperCase()}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <Button onClick={closePopup}>Cancel</Button>
                    <Button disabled={isDisabled()} onClick={handleSubmit}>Create Post</Button>
                </div>
            </form>
        </div>
    )
}

export default NewPost
